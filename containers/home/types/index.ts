import { z } from 'zod';

import {
  CreateQuestionSchema,
  GetQuestionsParamsSchema,
  QuestionDetailsSchema,
  QuestionItemSchema,
  QuestionsResponseSchema,
  QuestionVoteParamsSchema,
} from '@/containers/home/schema';

export type CreateQuestionType = z.infer<typeof CreateQuestionSchema>;
export type GetQuestionsParamsType = z.infer<typeof GetQuestionsParamsSchema>;
export type QuestionItemType = z.infer<typeof QuestionItemSchema>;
export type QuestionsResponseType = z.infer<typeof QuestionsResponseSchema>;
export type QuestionDetailsType = z.infer<typeof QuestionDetailsSchema>;
export type QuestionVoteParamsType = z.infer<typeof QuestionVoteParamsSchema>;
