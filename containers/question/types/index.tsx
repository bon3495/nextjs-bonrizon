import { z } from 'zod';

import { FormAnswerSchema } from '@/containers/question/schema';

export type FormAnswerType = z.infer<typeof FormAnswerSchema>;
