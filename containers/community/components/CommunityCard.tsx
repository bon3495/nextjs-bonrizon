import Image from 'next/image';
import Link from 'next/link';

import { getTopInteractedTags } from '@/actions/tag';
import { Badge } from '@/components/ui/badge';
import { ROUTES_NAME } from '@/constants/routes';
import { UserInfoType } from '@/containers/authentication/types';

interface CommunityCardType {
  user: UserInfoType;
}

const CommunityCard = async ({ user }: CommunityCardType) => {
  const tags = await getTopInteractedTags({
    userId: `${user._id}`,
  });

  console.log(user);

  return (
    <li className="rounded-md bg-background shadow-card-light dark:bg-background-light dark:shadow-card-dark">
      <article className="flex flex-col p-4">
        <div className="flex items-center gap-x-4">
          <Link href={`${ROUTES_NAME.PROFILE}/${user.clerkId}`} className="flex items-center">
            <Image
              src={user.picture}
              alt={`${user.name} avatar`}
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-[60px] w-[60px] rounded-full object-cover"
            />
          </Link>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">{user.name}</p>
            <span className="text-sm font-medium">@{user.username}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-wrap items-center justify-start gap-1">
          {tags.map((tag) => (
            <Badge variant="tag-secondary" className="px-2" key={tag}>
              {tag}
              {/* Javascript */}
            </Badge>
          ))}
        </div>

        <div>
          <p>
            {user.reputation}
            Reputation
          </p>
          <p>
            {user.reached}
            Reputation
          </p>
          <p>
            {user.answers}
            Reputation
          </p>
          <p>
            {user.questions}
            Reputation
          </p>
        </div>
      </article>
    </li>
  );
};

export default CommunityCard;
