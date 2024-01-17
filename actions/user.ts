'use server';

import { revalidatePath } from 'next/cache';
import { UpdateQuery } from 'mongoose';
import { z } from 'zod';

import { QUERY_DEFAULT } from '@/constants/values';
import { AnswersGroupSchema } from '@/containers/answer/schema';
import { UserFromDbSchema } from '@/containers/authentication/schema';
import { UserInfoType, UserServerType } from '@/containers/authentication/types';
import { GetUsersListParamsType } from '@/containers/community/types';
import { QuestionsResponseSchema } from '@/containers/home/schema';
import { ParamsListInProfileSchema } from '@/containers/question/schema';
import { GetUserInfoType, ToggleSaveQuestionType } from '@/containers/question/types';
import AnswerModel from '@/database/answer.model';
import QuestionModel from '@/database/question.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getUserById(params: UserServerType): Promise<UserInfoType> {
  try {
    connectToDatabase();

    const { userId } = params;

    const existingUser = await UserModel.findOne({ clerkId: userId });

    if (existingUser) {
      return existingUser;
    }
    throw new Error('User not found!');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getUserById', error);
    throw error;
  }
}

export async function createUser(params: Partial<UserInfoType>): Promise<UserInfoType> {
  try {
    connectToDatabase();

    const newUser = await UserModel.create(params);

    return newUser;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - createUser', error);
    throw error;
  }
}
// id: string, dataUpdate: Partial<UserInfoType>, path: string
export async function updateUser(params: {
  clerkId: string;
  updateData: Partial<UserInfoType>;
  path: string;
}): Promise<void> {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;

    await UserModel.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - updateUser', error);
    throw error;
  }
}

export async function deleteUser(clerkId: string): Promise<void> {
  try {
    connectToDatabase();

    const user = await UserModel.findOne({ clerkId });

    if (!user) {
      throw new Error('User not found!');
    }

    // Delete user from database, and questions, comments, answers, ...
    // const userQuestionIds = await QuestionModel.find({ author: user._id });

    await QuestionModel.deleteMany({ author: user._id });
    await UserModel.findByIdAndDelete(user._id);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - deleteUser', error);
    throw error;
  }
}

export async function getUsersList(params: Partial<GetUsersListParamsType>): Promise<UserInfoType[]> {
  try {
    connectToDatabase();

    const { currentPage = 1, pageSize = 20 } = params;

    const users: UserInfoType[] = await UserModel.find({})
      .sort({ createAt: -1 })
      .limit(pageSize)
      .skip((currentPage - 1) * pageSize);

    return users;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getUsersList', error);
    throw error;
  }
}

export async function toggleSaveQuestion(params: ToggleSaveQuestionType) {
  try {
    connectToDatabase();

    const { userId, questionId, path } = params;

    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error('User not found!');
    }

    const userParsed = UserFromDbSchema.parse(user);

    const isQuestionSaved = userParsed.saved.includes(questionId);

    const updateQuery: UpdateQuery<UserInfoType> = {};

    if (isQuestionSaved) {
      updateQuery.$pull = { saved: questionId };
    } else {
      updateQuery.$push = { saved: questionId };
    }

    await UserModel.findByIdAndUpdate(userId, updateQuery, { new: true });

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - toggleSaveQuestion', error);
    throw error;
  }
}

export async function getUserInfo({ userId }: GetUserInfoType) {
  try {
    connectToDatabase();

    const user = await UserModel.findOne({ clerkId: userId });
    if (!user) throw new Error('User not found!');

    const userParsed = UserFromDbSchema.parse(user);

    const totalQuestions = await QuestionModel.countDocuments({ author: userParsed._id });
    const totalAnswers = await AnswerModel.countDocuments({ author: userParsed._id });

    return {
      user: userParsed,
      totalAnswers,
      totalQuestions,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getUserInfo', error);
    throw error;
  }
}

export async function getQuestionsInProfile(params: z.infer<typeof ParamsListInProfileSchema>) {
  try {
    connectToDatabase();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId, currentPage = QUERY_DEFAULT.CURRENT_PAGE, pageSize = QUERY_DEFAULT.PAGE_SIZE } = params;

    const totalQuestions = await QuestionModel.countDocuments({ author: userId });
    const userQuestions = await QuestionModel.find({ author: userId })
      .sort({ views: -1, upvotes: -1 })
      .populate('tags', '_id name description')
      .populate('author', '_id clerkId name picture');

    const userQuestionsParsed = QuestionsResponseSchema.parse(userQuestions);

    return {
      totalQuestions,
      userQuestions: userQuestionsParsed,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getQuestionsInProfile', error);
    throw error;
  }
}

export async function getAnswersInProfile(params: z.infer<typeof ParamsListInProfileSchema>) {
  try {
    connectToDatabase();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId, currentPage = QUERY_DEFAULT.CURRENT_PAGE, pageSize = QUERY_DEFAULT.PAGE_SIZE } = params;

    const totalAnswers = await AnswerModel.countDocuments({ author: userId });
    const userAnswers = await AnswerModel.find({ author: userId, upvotes: { $ne: [] } })
      .sort({ upvotes: -1 })
      .populate({
        path: 'question',
        model: QuestionModel,
        select: '_id title',
      })
      .populate('author', '_id clerkId name picture');

    const userAnswersParsed = AnswersGroupSchema.parse(userAnswers);

    return {
      totalAnswers,
      userAnswers: userAnswersParsed,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getQuestionsInProfile', error);
    throw error;
  }
}
