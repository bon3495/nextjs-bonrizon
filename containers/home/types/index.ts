import { z } from 'zod';

import {
  CreateQuestionSchema,
  GetQuestionsParamsSchema,
  QuestionItemSchema,
  QuestionsResponseSchema,
} from '@/containers/home/schema';

export type CreateQuestionType = z.infer<typeof CreateQuestionSchema>;
export type GetQuestionsParamsType = z.infer<typeof GetQuestionsParamsSchema>;
export type QuestionItemType = z.infer<typeof QuestionItemSchema>;
export type QuestionsResponseType = z.infer<typeof QuestionsResponseSchema>;
