import type { Types } from 'mongoose';
import { z } from 'zod';

import { QUERY_DEFAULT } from '@/constants/values';
import { UserInfoSchema } from '@/containers/authentication/schema';
import { QuestionItemSchema, QuestionsResponseSchema } from '@/containers/home/schema';

export const TagItemSchema = z.object({
  _id: z.custom<Types.ObjectId>(),
  name: z.string().trim(),
  description: z.string().trim().catch(''),
  questions: z.array(QuestionItemSchema),
  followers: z.array(UserInfoSchema),
  createdOn: z.string(),
});

export const TagsListSchema = z.object({
  data: z.array(TagItemSchema),
});

export const TopInteractedTagsSchema = z.object({
  userId: z.string().trim(),
  limit: z.number().optional(),
});

export const TagsParamsFiltersSchema = z.object({
  currentPage: z.number(),
  pageSize: z.number(),
  searchQuery: z.string().trim(),
  filter: z.string().trim(),
});

export const GetQuestionsByTagIdParamsSchema = z.object({
  id: z.string(),
  currentPage: z.number().default(QUERY_DEFAULT.CURRENT_PAGE).optional(),
  pageSize: z.number().default(QUERY_DEFAULT.PAGE_SIZE).optional(),
  searchQuery: z.string().trim().optional(),
});

export const GetTagFromDbSchema = z.object({
  _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
  name: z.string().trim(),
  questions: QuestionsResponseSchema,
});

export const TopPopularTagsParamsSchema = z.object({
  total: z.number(),
});

export const TopPopularTagSchema = z.object({
  name: z.string(),
  numberOfQuestions: z.number(),
  _id: z.union([z.custom<Types.ObjectId>().transform((id) => id.toString()), z.string()]),
  description: z.string(),
});

export const TopPopularTagsListSchema = z.array(TopPopularTagSchema);
