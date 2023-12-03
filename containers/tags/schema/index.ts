import { z } from 'zod';

import { UserInfoSchema } from '@/containers/authentication/schema';
import { QuestionItemSchema } from '@/containers/home/schema';

export const TagItemSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim().catch(''),
  questions: z.array(QuestionItemSchema),
  followers: z.array(UserInfoSchema),
  createdOn: z.string(),
});

export const TagsListSchema = z.object({
  data: z.array(TagItemSchema),
});
