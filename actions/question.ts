'use server';

import { revalidatePath } from 'next/cache';

import {
  CreateQuestionType,
  GetQuestionsParamsType,
  QuestionItemType,
  QuestionsResponseType,
} from '@/containers/home/types';
import QuestionModel from '@/database/question.model';
import TagModel from '@/database/tag.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getQuestions(params: GetQuestionsParamsType): Promise<QuestionsResponseType> {
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
