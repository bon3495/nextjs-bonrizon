'use server';

import { TopInteractedTagsType } from '@/containers/tags/types';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getTopInteractedTags(params: TopInteractedTagsType) {
  try {
    connectToDatabase();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId, limit } = params;

    const user = await UserModel.findById(userId);

    if (!user) throw new Error('User not found!');

    // TODO: Find interactions for the user and group by tags...
    // Interaction...

    return ['Typescript', 'Next.js', 'Javascript'];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getTopInteractedTags', error);
    throw error;
  }
}
