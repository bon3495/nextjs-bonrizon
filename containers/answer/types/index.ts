import { z } from 'zod';

import { AnswerItemSchema, AnswersListSchema } from '@/containers/answer/schema';

export type AnswerItemType = z.infer<typeof AnswerItemSchema>;
export type AnswersListType = z.infer<typeof AnswersListSchema>;
