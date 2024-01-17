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
  _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
  author: UserInfoSchema,
  answerDetail: z.string().trim(),
  question: z.string().trim(),
  upvotes: z.array(UserInfoSchema).default([]),
  downvotes: z.array(UserInfoSchema).default([]),
  createAt: z.string().trim(),
});

export const AnswerItemDetailsSchema = z.object({
  _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
  author: z.object({
    _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
    clerkId: z.string().trim(),
    name: z.string().trim(),
    picture: z.string().trim(),
  }),
  answerDetail: z.string().trim(),
  question: z.custom<Types.ObjectId>().transform((id) => id.toString()),
  upvotes: z.array(z.custom<Types.ObjectId>()).transform((data) => data.map((user) => `${user._id}`)),
  downvotes: z.array(z.custom<Types.ObjectId>()).transform((data) => data.map((user) => `${user._id}`)),
  createAt: z.date().transform((data) => data.toISOString()),
});

export const AnswersListSchema = z.array(AnswerItemDetailsSchema);

export const AnswersQueryParamsSchema = z.object({
  questionId: z.string().trim(),
  currentPage: z.number(),
  pageSize: z.number(),
  filter: z.string().trim(),
});

export const AnswerItemInProfileSchema = AnswerItemDetailsSchema.extend({
  question: z.object({
    _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
    title: z.string().trim(),
  }),
});

export const AnswersGroupSchema = z.array(AnswerItemInProfileSchema);

export const DeleteAnswerParamsSchema = z.object({
  answerId: z.string(),
  path: z.string(),
});

export const AnswerVoteParamsSchema = z.object({
  answerId: z.string(),
  userId: z.string(),
  hasUpvoted: z.boolean(),
  hasDownvoted: z.boolean(),
  path: z.string(),
});
