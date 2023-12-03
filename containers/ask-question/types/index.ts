import { z } from 'zod';

import { FormAskQuestionSchema } from '@/containers/ask-question/schema';

export type FormAskQuestionType = z.infer<typeof FormAskQuestionSchema>;
