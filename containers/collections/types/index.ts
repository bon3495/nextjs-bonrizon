import { z } from 'zod';

import {
  CollectionsFromDbSchema,
  GetCollectionsParamsSchema,
  SavedQuestionSchema,
} from '@/containers/collections/schema';

export type GetCollectionsParamsProps = z.infer<typeof GetCollectionsParamsSchema>;
export type SavedQuestionProps = z.infer<typeof SavedQuestionSchema>;
export type CollectionsFromDbProps = z.infer<typeof CollectionsFromDbSchema>;
