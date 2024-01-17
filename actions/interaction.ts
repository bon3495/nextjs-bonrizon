'use server';

import { ViewQuestionParamsProps } from '@/containers/interaction/types';
import InteractionModel from '@/database/interaction.model';
import QuestionModel from '@/database/question.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function viewQuestions(params: ViewQuestionParamsProps) {
  try {
    await connectToDatabase();
    const { questionId, userId } = params;

    // Update view count for the question
    await QuestionModel.findByIdAndUpdate(questionId, {
      $inc: { views: 1 },
    });

    if (userId) {
      const existingInteraction = await InteractionModel.findOne({
        user: userId,
        action: 'view',
        question: questionId,
      });

      // eslint-disable-next-line no-console
      if (existingInteraction) {
        console.log('User has already viewed.');
        return null;
      }

      // Create interaction
      await InteractionModel.create({
        user: userId,
        question: questionId,
        action: 'view',
      });
    }

    return null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - viewQuestions', error);
    throw error;
  }
}
