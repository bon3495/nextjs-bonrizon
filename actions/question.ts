'use server';

import { revalidatePath } from 'next/cache';
import { UpdateQuery } from 'mongoose';
import { z } from 'zod';

import {
  DeleteQuestionParamsSchema,
  EditQuestionParamsSchema,
  QuestionDetailsSchema,
  QuestionsResponseSchema,
  TopQuestionsParamsSchema,
  TopQuestionsSchema,
} from '@/containers/home/schema';
import {
  CreateQuestionType,
  GetQuestionsParamsType,
  QuestionDetailsType,
  QuestionVoteParamsType,
} from '@/containers/home/types';
import AnswerModel from '@/database/answer.model';
import InteractionModel from '@/database/interaction.model';
import QuestionModel from '@/database/question.model';
import TagModel from '@/database/tag.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getQuestions(params: Partial<GetQuestionsParamsType>) {
  try {
    connectToDatabase();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { currentPage, pageSize, searchQuery, filters } = params;

    const questions = await QuestionModel.find({})
      .populate({
        path: 'tags',
        model: TagModel,
        select: '_id name description',
      })
      .populate({
        path: 'author',
        model: UserModel,
        select: '_id clerkId name picture',
      })
      .sort({ createAt: -1 });

    if (!questions) {
      throw new Error('Questions not found');
    }

    return QuestionsResponseSchema.parse(questions);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionType) {
  try {
    connectToDatabase();
    const { title, details, tags, author, path } = params;

    // Create the question
    const question = await QuestionModel.create({
      title,
      details,
      author,
    });

    const tagsDocument = [];

    // Create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await TagModel.findOneAndUpdate(
        {
          name: {
            $regex: new RegExp(`^${tag}$`, 'i'),
          },
        },
        {
          $setOnInsert: { name: tag, description: '' },
          $push: { questions: question._id },
        },
        {
          upsert: true,
          new: true,
        },
      );

      tagsDocument.push(existingTag ? existingTag._id : question._id);
    }

    await QuestionModel.findByIdAndUpdate(question._id, {
      $push: {
        tags: { $each: tagsDocument },
      },
    });
    revalidatePath(path);

    return { questionId: question._id.toString() as string };
  } catch (error) {}
}

export async function editQuestion(params: z.infer<typeof EditQuestionParamsSchema>) {
  try {
    connectToDatabase();
    const { title, details, questionId, path } = params;

    const existingQuestion = await QuestionModel.findById(questionId);
    if (!existingQuestion) throw new Error('Question not found!');

    existingQuestion.title = title;
    existingQuestion.details = details;

    await existingQuestion.save();
    revalidatePath(path);

    return { questionId: existingQuestion._id.toString() as string };
  } catch (error) {}
}

export async function getQuestionById(questionId: string) {
  try {
    connectToDatabase();
    const question = await QuestionModel.findById(questionId)
      .populate({
        path: 'tags',
        model: TagModel,
        select: '_id name',
      })
      .populate({
        path: 'author',
        model: UserModel,
        select: '_id clerkId name username email picture',
      })
      .populate({
        path: 'upvotes',
        model: UserModel,
        select: '_id clerkId name username email picture',
      })
      .populate({
        path: 'downvotes',
        model: UserModel,
        select: '_id clerkId name username email picture',
      });
    if (!question) throw new Error('Question not found');

    const response = QuestionDetailsSchema.parse(question);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getQuestionById', error);
    throw error;
  }
}

export async function upvotesQuestion(params: QuestionVoteParamsType) {
  try {
    connectToDatabase();

    const { questionId, userId, hasDownvoted, hasUpvoted, path } = params;
    const updateQuery: UpdateQuery<QuestionDetailsType> = {};

    if (hasUpvoted) {
      updateQuery.$pull = { upvotes: userId };
    } else if (hasDownvoted) {
      updateQuery.$pull = { downvotes: userId };
      // $push - adds items in the order in which they were received. Also you can add same items several times.
      updateQuery.$push = { upvotes: userId };
    } else {
      // $addToSet - adds just unique items, but order of items is not guaranteed.
      updateQuery.$addToSet = { upvotes: userId };
    }

    const question = await QuestionModel.findByIdAndUpdate(questionId, updateQuery, { new: true });

    if (!question) {
      throw new Error('Question not found!');
    }

    // TODO: Increment author's reputation
    // ...

    // const response = QuestionDetailsSchema.parse(question);

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - upvotesQuestion', error);
    throw error;
  }
}

export async function downvotesQuestion(params: QuestionVoteParamsType) {
  try {
    connectToDatabase();

    const { questionId, userId, hasDownvoted, hasUpvoted, path } = params;
    const updateQuery: UpdateQuery<QuestionDetailsType> = {};

    if (hasUpvoted) {
      updateQuery.$pull = { upvotes: userId };
      updateQuery.$push = { downvotes: userId };
    } else if (hasDownvoted) {
      updateQuery.$pull = { upvotes: userId };
    } else {
      updateQuery.$addToSet = { downvotes: userId };
    }

    const question = await QuestionModel.findByIdAndUpdate(questionId, updateQuery, { new: true });

    if (!question) {
      throw new Error('Question not found!');
    }

    // const response = QuestionDetailsSchema.parse(question);

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - upvotesQuestion', error);
    throw error;
  }
}

export async function deleteQuestion(params: z.infer<typeof DeleteQuestionParamsSchema>) {
  try {
    connectToDatabase();

    const { questionId, path } = params;

    await Promise.all([
      QuestionModel.deleteOne({ _id: questionId }),
      AnswerModel.deleteMany({ question: questionId }),
      InteractionModel.deleteMany({ question: questionId }),
      TagModel.updateMany(
        {
          questions: questionId,
        },
        {
          $pull: { questions: questionId },
        },
      ),
    ]);

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - deleteQuestion', error);
    throw error;
  }
}

export async function getTopQuestions(params: Partial<z.infer<typeof TopQuestionsParamsSchema>>) {
  try {
    connectToDatabase();
    const { total = 10 } = params;
    const response = await QuestionModel.find({}).sort({ views: -1, upvotes: -1 }).limit(total);

    const topQuestionsParsed = TopQuestionsSchema.parse(response);

    return topQuestionsParsed;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getTopQuestions', error);
    throw error;
  }
}
