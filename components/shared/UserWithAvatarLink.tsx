import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ROUTES_NAME } from '@/constants/routes';
import { getAvatarFallback } from '@/lib/helpers';

interface UserWithAvatarLinkProps {
  userId: string;
  userName: string;
  userUrl: string;
}

const UserWithAvatarLink = ({ userId, userName, userUrl }: UserWithAvatarLinkProps) => {
  return (
    <>
      <Link href={`${ROUTES_NAME.PROFILE}/${userId}`} className="flex items-center">
        <Avatar className="mr-2 shadow-avatar">
          <AvatarImage src={userUrl} />
          <AvatarFallback>{getAvatarFallback(userName)}</AvatarFallback>
        </Avatar>
      </Link>
      <Link href={`${ROUTES_NAME.PROFILE}/${userId}`} className="flex items-center transition-all hover:text-primary">
        <p className="text-sm font-medium">{userName}</p>
      </Link>
    </>
  );
};

export default UserWithAvatarLink;
