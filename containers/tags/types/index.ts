import { z } from 'zod';

import { TagItemSchema, TagsListSchema } from '@/containers/tags/schema';

export type TagItemType = z.infer<typeof TagItemSchema>;
export type TagsListType = z.infer<typeof TagsListSchema>;
