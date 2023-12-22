'use server';

import { revalidatePath } from 'next/cache';
import { UpdateQuery } from 'mongoose';

import { QuestionDetailsSchema } from '@/containers/home/schema';
import {
  CreateQuestionType,
  GetQuestionsParamsType,
  QuestionDetailsType,
  QuestionItemType,
  QuestionsResponseType,
  QuestionVoteParamsType,
} from '@/containers/home/types';
import QuestionModel from '@/database/question.model';
import TagModel from '@/database/tag.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getQuestions(params: Partial<GetQuestionsParamsType>): Promise<QuestionsResponseType> {
  try {
    connectToDatabase();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { currentPage, pageSize, searchQuery, filters } = params;

    const questions = (await QuestionModel.find({})
      .populate({
        path: 'tags',
        model: TagModel,
      })
      .populate({
        path: 'author',
        model: UserModel,
      })
      .sort({ createAt: -1 })) as QuestionItemType[];

    return { data: questions };
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
          $setOnInsert: { name: tag },
          $push: { questions: question._id },
        },
        {
          upsert: true,
          new: true,
        },
      );

      tagsDocument.push(existingTag._id);
    }

    await QuestionModel.findByIdAndUpdate(question._id, {
      $push: {
        tags: { $each: tagsDocument },
      },
    });

    // Create an interaction record for the user's ask question action

    // Increment author's reputation by +5 for creating a question
    revalidatePath(path);
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
