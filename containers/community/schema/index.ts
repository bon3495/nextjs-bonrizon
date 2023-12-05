import { z } from 'zod';

export const CommunityUserSchema = z.object({
  clerkId: z.string().trim(),
  name: z.string().trim(),
  username: z.string().trim(),
  email: z.string().trim(),
  bio: z.string().trim(),
  picture: z.string().trim(),
  reputation: z.number(),
});

export const GetUsersListParamsSchema = z.object({
  currentPage: z.number(),
  pageSize: z.number(),
  searchQuery: z.string().trim(),
  filter: z.string().trim(),
});
