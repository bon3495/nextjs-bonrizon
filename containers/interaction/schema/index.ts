import { z } from 'zod';

export const ViewQuestionParamsSchema = z.object({
  questionId: z.string().trim(),
  userId: z.string().trim().optional(),
});
