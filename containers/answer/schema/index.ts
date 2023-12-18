import { z } from 'zod';

import { UserInfoSchema } from '@/containers/authentication/schema';

export const AnswerItemSchema = z.object({
  author: z.string().trim(),
  answerDetail: z.string().trim(),
  question: z.string().trim(),
  upvotes: z.array(UserInfoSchema).default([]),
  downvotes: z.array(UserInfoSchema).default([]),
  createAt: z.string().trim(),
  path: z.string().trim().catch(''),
});

export const AnswersListSchema = z.object({
  questionId: z.string().trim(),
  currentPage: z.number(),
  pageSize: z.number(),
  filter: z.string().trim(),
});
