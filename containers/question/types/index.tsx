import { z } from 'zod';

import { FormAnswerSchema, ToggleSaveQuestionSchema } from '@/containers/question/schema';

export type FormAnswerType = z.infer<typeof FormAnswerSchema>;
export type ToggleSaveQuestionType = z.infer<typeof ToggleSaveQuestionSchema>;
