import { Types } from 'mongoose';
import { z } from 'zod';

export const UserServerSchema = z.object({
  userId: z.string().trim(),
});

export const UserInfoSchema = z.object({
  _id: z.custom<Types.ObjectId>(),
  clerkId: z.string().trim(),
  name: z.string().trim(),
  username: z.string().trim(),
  email: z.string().trim(),
  password: z.string().trim(),
  bio: z.string().trim(),
  picture: z.string().trim(),
  location: z.string().trim(),
  portfolioWebsite: z.string().trim(),
  reputation: z.number(),
  saved: z.array(z.custom<Types.ObjectId>()),
  joined: z.string().trim(),
  gender: z.string().trim(),
  birthday: z.string().trim(),
});
