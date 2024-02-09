import { z } from 'zod';

export const FormProfileSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'Name is required',
  }),
  username: z.string().trim().min(1, {
    message: 'Username is required',
  }),
  bio: z.string().trim().optional(),
  location: z.string().trim().optional(),
  portfolioWebsite: z.string().url('Portfolio website invalid. Try again!').optional().or(z.literal('')),
});
