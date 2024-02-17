import { Types } from 'mongoose';
import { z } from 'zod';

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

export const QuestionParsedSchema = z.object({
  _id: z.string(),
  title: z.string().trim(),
  details: z.string().trim(),
  tags: z.array(
    z.object({
      _id: z.string(),
      name: z.string().trim(),
      description: z.string().trim().catch(''),
    }),
  ),
  views: z.number(),
  upvotes: z
    .array(
      z.object({
        _id: z.string(),
        clerkId: z.string().trim(),
        name: z.string().trim(),
        picture: z.string().trim(),
      }),
    )
    .default([]),
  downvotes: z
    .array(
      z.object({
        _id: z.string(),
        clerkId: z.string().trim(),
        name: z.string().trim(),
        picture: z.string().trim(),
      }),
    )
    .default([]),
  author: z.object({
    _id: z.string(),
    clerkId: z.string().trim(),
    name: z.string().trim(),
    picture: z.string().trim(),
  }),
});

export const QuestionsResponseSchema = z.array(QuestionItemSchema);

export const QuestionDetailsSchema = QuestionItemSchema.extend({
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
  answers: z
    .array(z.custom<Types.ObjectId>())
    .default([])
    .transform((ids) => ids.map((id) => `${id}`)),
});

export const QuestionVoteParamsSchema = z.object({
  questionId: z.string().trim(),
  userId: z.string().trim(),
  hasUpvoted: z.boolean(),
  hasDownvoted: z.boolean(),
  path: z.string().trim(),
});

export const DeleteQuestionParamsSchema = z.object({
  path: z.string(),
  questionId: z.string(),
});

export const EditQuestionParamsSchema = z.object({
  questionId: z.string(),
  title: z.string().trim().catch(''),
  details: z.string().trim().catch(''),
  path: z.string().trim(),
});

export const TopQuestionsParamsSchema = z.object({
  total: z.number(),
});

export const TopQuestionItemSchema = z.object({
  _id: z.union([z.custom<Types.ObjectId>().transform((id) => id.toString()), z.string()]),
  title: z.string().trim(),
});

export const TopQuestionsSchema = z.array(TopQuestionItemSchema);
