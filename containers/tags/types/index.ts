import { z } from 'zod';

import {
  GetQuestionsByTagIdParamsSchema,
  TagItemSchema,
  TagsListSchema,
  TagsParamsFiltersSchema,
  TopInteractedTagsSchema,
} from '@/containers/tags/schema';

export type TagItemType = z.infer<typeof TagItemSchema>;
export type TagsListType = z.infer<typeof TagsListSchema>;
export type TopInteractedTagsType = z.infer<typeof TopInteractedTagsSchema>;
export type TagsParamsFiltersType = z.infer<typeof TagsParamsFiltersSchema>;
export type GetQuestionsByTagIdParamsType = z.infer<typeof GetQuestionsByTagIdParamsSchema>;
