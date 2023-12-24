import { z } from 'zod';

import { ViewQuestionParamsSchema } from '@/containers/interaction/schema';

export type ViewQuestionParamsProps = z.infer<typeof ViewQuestionParamsSchema>;
