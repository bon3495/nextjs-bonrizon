import type { Types } from 'mongoose';
import { z } from 'zod';

import { UserInfoSchema } from '@/containers/authentication/schema';
import { QuestionItemSchema } from '@/containers/home/schema';

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
