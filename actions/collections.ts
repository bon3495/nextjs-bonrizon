import { FilterQuery } from 'mongoose';

import { CollectionsFromDbSchema } from '@/containers/collections/schema';
import { CollectionsFromDbProps, GetCollectionsParamsProps } from '@/containers/collections/types';
import QuestionModel from '@/database/question.model';
import TagModel from '@/database/tag.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getCollections(params: Partial<GetCollectionsParamsProps>) {
  try {
    connectToDatabase();

    const { clerkId, searchQuery } = params;

    const updateQuery: FilterQuery<CollectionsFromDbProps> = {};

    if (searchQuery) {
      updateQuery.title = { $regex: new RegExp(searchQuery, 'i') };
    }

    const existingUser = await UserModel.findOne({ clerkId }).populate({
      path: 'saved',
      model: QuestionModel,
      match: updateQuery,
      options: {
        sort: { createAt: -1 },
      },
      populate: [
        {
          path: 'tags',
          model: TagModel,
          select: '_id name description',
        },
        {
          path: 'author',
          model: UserModel,
          select: '_id clerkId name picture',
        },
      ],
    });

    if (!existingUser) {
      throw new Error('User not found');
    }

    const collections = CollectionsFromDbSchema.parse(existingUser).saved;

    return collections;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getCollections', error);
    throw error;
  }
}
