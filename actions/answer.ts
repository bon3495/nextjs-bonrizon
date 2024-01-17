'use server';

import { revalidatePath } from 'next/cache';
import { UpdateQuery } from 'mongoose';
import { z } from 'zod';

import {
  AnswerItemDetailsSchema,
  AnswersListSchema,
  AnswerVoteParamsSchema,
  DeleteAnswerParamsSchema,
} from '@/containers/answer/schema';
import { AnswersQueryParamsType, CreateAnswerType } from '@/containers/answer/types';
import AnswerModel from '@/database/answer.model';
import InteractionModel from '@/database/interaction.model';
import QuestionModel from '@/database/question.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function createAnswer(params: Partial<CreateAnswerType>) {
  try {
    connectToDatabase();
    const { answerDetail, author, question, path } = params;
    const newAnswer = await AnswerModel.create({
      answerDetail,
      author,
      question,
    });

    // TODO: Add the answer to the question's answers array
    await QuestionModel.findByIdAndUpdate(question, {
      $push: {
        answers: newAnswer._id,
      },
    });

    // TODO: Add interaction...

    if (path) {
      revalidatePath(path);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - createAnswer', error);
    throw error;
  }
}

export async function getAnswers(params: Partial<AnswersQueryParamsType>) {
  try {
    connectToDatabase();
    const { questionId } = params;

    if (!questionId) throw new Error('Question not found!');

    const answers = await AnswerModel.find({ question: questionId }).populate({
      path: 'author',
      model: UserModel,
      select: '_id clerkId name picture',
    });

    const response = AnswersListSchema.parse(answers);

    return { answers: response };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getAnswers', error);
    throw error;
  }
}

export async function deleteAnswer(params: z.infer<typeof DeleteAnswerParamsSchema>) {
  try {
    connectToDatabase();
    const { answerId, path } = params;

    const answer = await AnswerModel.findById(answerId);
    const answerParsed = AnswerItemDetailsSchema.parse(answer);

    if (!answerParsed) throw new Error('Answer not found!');

    await Promise.all([
      AnswerModel.deleteOne({ _id: answerId }),
      QuestionModel.updateMany(
        { _id: answerParsed.question },
        {
          $pull: { answers: answerId },
        },
      ),
      InteractionModel.deleteMany({
        answer: answerId,
      }),
    ]);

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - deleteAnswer', error);
    throw error;
  }
}

export async function upvotesAnswer(params: z.infer<typeof AnswerVoteParamsSchema>) {
  try {
    connectToDatabase();

    const { userId, answerId, hasDownvoted, hasUpvoted, path } = params;
    const updateQuery: UpdateQuery<z.infer<typeof AnswerItemDetailsSchema>> = {};
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

    const answerUpdated = await AnswerModel.findByIdAndUpdate(answerId, updateQuery, { new: true });

    if (!answerUpdated) {
      throw new Error('Answer not found!');
    }

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - upvotesAnswer', error);
    throw error;
  }
}

export async function downvotesAnswer(params: z.infer<typeof AnswerVoteParamsSchema>) {
  try {
    connectToDatabase();

    const { userId, answerId, hasDownvoted, hasUpvoted, path } = params;
    const updateQuery: UpdateQuery<z.infer<typeof AnswerItemDetailsSchema>> = {};

    if (hasUpvoted) {
      updateQuery.$pull = { upvotes: userId };
      updateQuery.$push = { downvotes: userId };
    } else if (hasDownvoted) {
      updateQuery.$pull = { upvotes: userId };
    } else {
      updateQuery.$addToSet = { downvotes: userId };
    }

    const answerUpdated = await AnswerModel.findByIdAndUpdate(answerId, updateQuery, { new: true });

    if (!answerUpdated) {
      throw new Error('Answer not found!');
    }

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - downvotesAnswer', error);
    throw error;
  }
}
