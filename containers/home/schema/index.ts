import { Types } from 'mongoose';
import { z } from 'zod';

import { UserInfoSchema } from '@/containers/authentication/schema';

export const CreateQuestionSchema = z.object({
  title: z.string().trim().catch(''),
  details: z.string().trim().catch(''),
  tags: z.array(z.string().trim()),
  author: z.string().trim().catch(''),
  path: z.string().trim().catch(''),
});

export const GetQuestionsParamsSchema = z.object({
  currentPage: z.string().trim().optional(),
  pageSize: z.string().trim().optional(),
  searchQuery: z.string().trim().optional(),
  filters: z.string().trim().optional(),
});

export const QuestionItemSchema = z.object({
  _id: z.custom<Types.ObjectId>(),
  title: z.string().trim().catch(''),
  details: z.string().trim().catch(''),
  tags: z.array(
    z.object({
      _id: z.custom<Types.ObjectId>(),
      name: z.string().trim(),
      description: z.string().trim().catch(''),
    }),
  ),
  views: z.number(),
  upvotes: z.array(UserInfoSchema).default([]),
  downvotes: z.array(UserInfoSchema).default([]),
  author: UserInfoSchema,
  // answers: [],
  createAt: z.string().trim(),
});

export const QuestionsResponseSchema = z.object({
  data: z.array(QuestionItemSchema),
});
