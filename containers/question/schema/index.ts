import { z } from 'zod';

import { MINIMUM_TEXT_EDITOR } from '@/constants/values';
import { FormProfileSchema } from '@/containers/profile/schema';

export const FormAnswerSchema = z.object({
  answerDetail: z
    .string()
    .trim()
    .min(MINIMUM_TEXT_EDITOR, {
      message: `Answer must be greater than or equal to ${MINIMUM_TEXT_EDITOR} characters`,
    }),
});

export const ToggleSaveQuestionSchema = z.object({
  userId: z.string().trim(),
  questionId: z.string().trim(),
  path: z.string().trim(),
});

export const GetUserInfoSchema = z.object({
  userId: z.string(),
});

export const ParamsListInProfileSchema = z.object({
  userId: z.string(),
  currentPage: z.number(),
  pageSize: z.number(),
});

export const EditProfileUserParamsSchema = z.object({
  clerkId: z.string(),
  updateData: FormProfileSchema,
  path: z.string(),
});
