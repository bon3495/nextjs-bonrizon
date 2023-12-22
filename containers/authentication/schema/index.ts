import { Types } from 'mongoose';
import { z } from 'zod';

export const UserServerSchema = z.object({
  userId: z.string().trim(),
});

export const UserInfoSchema = z.object({
  _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
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
  answers: z.number(),
  reached: z.number(),
  questions: z.number(),
  saved: z.array(z.custom<Types.ObjectId>()).transform((data) => data.map((id) => id.toString())),
  joined: z.string().trim(),
  gender: z.string().trim(),
  birthday: z.string().trim(),
});
