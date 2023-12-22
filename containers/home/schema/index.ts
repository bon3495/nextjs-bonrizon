import { Types } from 'mongoose';
import { z } from 'zod';

import { AnswerItemSchema } from '@/containers/answer/schema';
import { UserInfoSchema } from '@/containers/authentication/schema';

export const CreateQuestionSchema = z.object({
  title: z.string().trim().catch(''),
  details: z.string().trim().catch(''),
  tags: z.array(z.string().trim()),
  author: z.string().trim().catch(''),
  path: z.string().trim().catch(''),
});

export const GetQuestionsParamsSchema = z.object({
  currentPage: z.string().trim(),
  pageSize: z.string().trim(),
  searchQuery: z.string().trim(),
  filters: z.string().trim(),
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
  answers: z.array(AnswerItemSchema).default([]),
  createAt: z.string().trim(),
});

export const QuestionsResponseSchema = z.object({
  data: z.array(QuestionItemSchema),
});

export const QuestionDetailsSchema = z.object({
  _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
  title: z.string().trim().catch(''),
  details: z.string().trim().catch(''),
  tags: z.array(
    z.object({
      _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
      name: z.string().trim(),
      description: z.string().trim().catch(''),
    }),
  ),
  views: z.number(),
  upvotes: z
    .array(
      z.object({
        _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
        clerkId: z.string().trim(),
        name: z.string().trim(),
        picture: z.string().trim(),
      }),
    )
    .default([]),
  downvotes: z
    .array(
      z.object({
        _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
        clerkId: z.string().trim(),
        name: z.string().trim(),
        picture: z.string().trim(),
      }),
    )
    .default([]),
  author: z.object({
    _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
    clerkId: z.string().trim(),
    name: z.string().trim(),
    picture: z.string().trim(),
  }),
  answers: z
    .array(z.custom<Types.ObjectId>())
    .default([])
    .transform((ids) => ids.map((id) => `${id}`)),
  createAt: z.date().transform((date) => date.toISOString()),
});

export const QuestionVoteParamsSchema = z.object({
  questionId: z.string().trim(),
  userId: z.string().trim(),
  hasUpvoted: z.boolean(),
  hasDownvoted: z.boolean(),
  path: z.string().trim()
});
