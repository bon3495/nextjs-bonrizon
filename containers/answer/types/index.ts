import { z } from 'zod';

import { AnswerItemSchema, AnswersListSchema, CreateAnswerSchema } from '@/containers/answer/schema';

export type CreateAnswerType = z.infer<typeof CreateAnswerSchema>;
export type AnswerItemType = z.infer<typeof AnswerItemSchema>;
export type AnswersListType = z.infer<typeof AnswersListSchema>;
