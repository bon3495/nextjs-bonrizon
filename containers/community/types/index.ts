import { z } from 'zod';

import { CommunityUserSchema, GetUsersListParamsSchema } from '@/containers/community/schema';

export type CommunityUserType = z.infer<typeof CommunityUserSchema>;
export type GetUsersListParamsType = z.infer<typeof GetUsersListParamsSchema>;
