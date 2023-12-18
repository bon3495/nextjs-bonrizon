'use server';

import { revalidatePath } from 'next/cache';

import { AnswerItemType, AnswersListType } from '@/containers/answer/types';
import AnswerModel from '@/database/answer.model';
import QuestionModel from '@/database/question.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function createAnswer(params: Partial<AnswerItemType>) {
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

export async function getAnswers(params: Partial<AnswersListType>) {
  try {
    connectToDatabase();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { questionId, filter, currentPage, pageSize } = params;

    if (!questionId) throw new Error('Question not found!');

    const answers = await AnswerModel.find({ question: questionId })
      .populate({
        path: 'author',
        model: UserModel,
        select: '_id clerkId name picture',
      })
      .sort({ createAt: -1 });

    return { answers };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getAnswers', error);
    throw error;
  }
}
