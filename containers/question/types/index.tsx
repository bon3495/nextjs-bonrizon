import { z } from 'zod';

import { FormAnswerSchema, GetUserInfoSchema, ToggleSaveQuestionSchema } from '@/containers/question/schema';

export type FormAnswerType = z.infer<typeof FormAnswerSchema>;
export type ToggleSaveQuestionType = z.infer<typeof ToggleSaveQuestionSchema>;
export type GetUserInfoType = z.infer<typeof GetUserInfoSchema>;
