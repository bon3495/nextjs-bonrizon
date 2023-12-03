import { Briefcase, HelpCircle, Home, Star, Tag, User, Users } from 'lucide-react';

import { ROUTES_NAME } from '@/constants/routes';
import { SidebarLink } from '@/types/global';

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    Icon: Home,
    route: ROUTES_NAME.HOME,
    label: 'Home',
  },
  {
    Icon: Users,
    route: ROUTES_NAME.COMMUNITY,
    label: 'Community',
  },
  {
    Icon: Star,
    route: ROUTES_NAME.COLLECTIONS,
    label: 'Collections',
  },
  {
    Icon: Briefcase,
    route: ROUTES_NAME.JOBS,
    label: 'Find Jobs',
  },
  {
    Icon: Tag,
    route: ROUTES_NAME.TAGS,
    label: 'Tags',
  },
  {
    Icon: User,
    route: ROUTES_NAME.PROFILE,
    label: 'Profile',
  },
  {
    Icon: HelpCircle,
    route: ROUTES_NAME.ASK_QUESTION,
    label: 'Ask a Question',
  },
];
