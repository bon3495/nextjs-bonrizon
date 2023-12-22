import { z } from 'zod';

import {
  AnswerItemDetailsSchema,
  AnswerItemSchema,
  AnswersQueryParamsSchema,
  CreateAnswerSchema,
} from '@/containers/answer/schema';

export type CreateAnswerType = z.infer<typeof CreateAnswerSchema>;
export type AnswerItemType = z.infer<typeof AnswerItemSchema>;
export type AnswerItemDetailsType = z.infer<typeof AnswerItemDetailsSchema>;
export type AnswersQueryParamsType = z.infer<typeof AnswersQueryParamsSchema>;
