import { z } from 'zod';

import { TagItemSchema, TagsListSchema, TopInteractedTagsSchema } from '@/containers/tags/schema';

export type TagItemType = z.infer<typeof TagItemSchema>;
export type TagsListType = z.infer<typeof TagsListSchema>;
export type TopInteractedTagsType = z.infer<typeof TopInteractedTagsSchema>;
