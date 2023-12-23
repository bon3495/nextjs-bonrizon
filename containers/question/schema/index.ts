import { z } from 'zod';

import { MINIMUM_TEXT_EDITOR } from '@/constants/values';

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
