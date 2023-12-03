'use server';

import { revalidatePath } from 'next/cache';

import { UserInfoType, UserServerType } from '@/containers/authentication/types';
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
