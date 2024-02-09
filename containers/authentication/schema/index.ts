import { Types } from 'mongoose';
import { z } from 'zod';

export const UserServerSchema = z.object({
  userId: z.string().trim(),
});

export const UserInfoSchema = z.object({
  _id: z.union([z.custom<Types.ObjectId>().transform((id) => id.toString()), z.string()]),
  clerkId: z.string().trim(),
  name: z.string().trim(),
  username: z.string().trim(),
  email: z.string().trim(),
  // password: z.string().trim(),
  bio: z.string().trim().optional(),
  picture: z.string().trim(),
  location: z.string().trim().optional(),
  portfolioWebsite: z.string().trim().optional(),
  reputation: z.number(),
  answers: z.number(),
  reached: z.number(),
  questions: z.number(),
  saved: z.union([
    z.array(z.custom<Types.ObjectId>()).transform((data) => data.map((id) => id.toString())),
    z.array(z.string()),
  ]),
  joined: z.string().trim(),
  gender: z.string().trim(),
  birthday: z.string().trim(),
});

export const UserFromDbSchema = z.object({
  _id: z.custom<Types.ObjectId>().transform((id) => id.toString()),
  clerkId: z.string().trim(),
  name: z.string().trim(),
  username: z.string().trim(),
  email: z.string().trim(),
  bio: z.string().trim().optional(),
  picture: z.string().trim(),
  location: z.string().trim().optional(),
  portfolioWebsite: z.string().trim().optional(),
  reputation: z.number(),
  answers: z.number(),
  reached: z.number(),
  questions: z.number(),
  saved: z.array(z.custom<Types.ObjectId>()).transform((data) => data.map((id) => id.toString())),
  joined: z.date().transform((data) => data.toISOString()),
  gender: z.string().trim(),
  birthday: z.string().trim(),
});
