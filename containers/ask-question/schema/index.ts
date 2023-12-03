import { z } from 'zod';

import { MINIMUM_TEXT_EDITOR } from '@/constants/values';

const MIN_TITLE = 5;
const MAX_TITLE = 128;
const MAX_DETAILS = 1000;

export const FormAskQuestionSchema = z.object({
  title: z
    .string()
    .trim()
    .min(MIN_TITLE, {
      message: `Title must be greater than or equal to ${MIN_TITLE} characters`,
    })
    .max(MAX_TITLE, {
      message: `Title must be less than or equal to ${MAX_TITLE} characters`,
    }),
  details: z
    .string()
    .trim()
    .min(MINIMUM_TEXT_EDITOR, {
      message: `Details must be greater than or equal to ${MINIMUM_TEXT_EDITOR} characters`,
    })
    .max(MAX_DETAILS, {
      message: `Details must be less than or equal to ${MAX_DETAILS} characters`,
    }),
  // expecting: z
  //   .string()
  //   .trim()
  //   .max(MAX_DETAILS, {
  //     message: `Your expecting must be less than or equal to ${MAX_DETAILS} characters`,
  //   }),
  tags: z.array(z.string().trim()),
});
