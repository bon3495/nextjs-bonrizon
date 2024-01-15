import { z } from 'zod';

import { UserFromDbSchema, UserInfoSchema, UserServerSchema } from '@/containers/authentication/schema';

export type UserServerType = z.infer<typeof UserServerSchema>;
export type UserInfoType = z.infer<typeof UserInfoSchema>;
export type UserDataType = z.infer<typeof UserFromDbSchema>;
