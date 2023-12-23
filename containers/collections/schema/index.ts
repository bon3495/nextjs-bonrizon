import { Types } from 'mongoose';
import { z } from 'zod';

export const GetCollectionsParamsSchema = z.object({
  clerkId: z.string().trim(),
  currentPage: z.number(),
  pageSize: z.number(),
  filter: z.string().trim(),
  searchQuery: z.string().trim(),
});

export const SavedQuestionSchema = z.object({
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
  upvotes: z.array(z.custom<Types.ObjectId>()).default([]),
  downvotes: z.array(z.custom<Types.ObjectId>()).default([]),
  author: z.object({
    _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
    clerkId: z.string().trim(),
    name: z.string().trim(),
    picture: z.string().trim(),
  }),
  answers: z.array(z.custom<Types.ObjectId>()).default([]),
  createAt: z.date().transform((date) => date.toISOString()),
});

export const CollectionsFromDbSchema = z.object({
  saved: z.array(SavedQuestionSchema),
});
