import { Types } from 'mongoose';
import { z } from 'zod';

import { UserInfoSchema } from '@/containers/authentication/schema';

export const CreateAnswerSchema = z.object({
  answerDetail: z.string().trim().catch(''),
  author: z.string().trim().catch(''),
  question: z.string().trim().catch(''),
  path: z.string().trim().catch(''),
});

export const AnswerItemSchema = z.object({
  _id: z.custom<Types.ObjectId>(),
  author: UserInfoSchema,
  answerDetail: z.string().trim(),
  question: z.string().trim(),
  upvotes: z.array(UserInfoSchema).default([]),
  downvotes: z.array(UserInfoSchema).default([]),
  createAt: z.string().trim(),
});

export const AnswersListSchema = z.object({
  questionId: z.string().trim(),
  currentPage: z.number(),
  pageSize: z.number(),
  filter: z.string().trim(),
});
