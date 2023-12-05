import Image from 'next/image';
import Link from 'next/link';

import { getTopInteractedTags } from '@/actions/tag';
import TagLink from '@/components/shared/TagLink';
import { ROUTES_NAME } from '@/constants/routes';
import { UserInfoType } from '@/containers/authentication/types';

interface CommunityCardType {
  user: UserInfoType;
}

const CommunityCard = async ({ user }: CommunityCardType) => {
  const tags = await getTopInteractedTags({
    userId: `${user._id}`,
  });

  return (
    <li className="flex flex-col rounded-md bg-background shadow-card-light dark:bg-background-light dark:shadow-card-dark">
      <article className="flex flex-1 flex-col p-6">
        <div className="flex flex-col items-center gap-x-4">
          <Link href={`${ROUTES_NAME.PROFILE}/${user.clerkId}`} className="flex items-center">
            <Image
              src={user.picture}
              alt={`${user.name} avatar`}
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-[100px] w-[100px] rounded-full object-cover"
            />
          </Link>
          <div className="mt-5 flex flex-col items-center">
            <Link
              href={`${ROUTES_NAME.PROFILE}/${user.clerkId}`}
              className="text-lg font-semibold transition-all hover:text-primary-lighter"
            >
              {user.name}
            </Link>
            <span className="text-sm font-medium">@{user.username}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-wrap items-start justify-center gap-2">
          {tags.map((tag) => (
            <TagLink
              key={tag._id}
              content={tag.description}
              isShowTooltip={!!tag.description}
              href={`${ROUTES_NAME.TAGS}/${tag._id}`}
              // className="flex px-2 last:hidden md:last:flex"
            >
              {tag.name}
            </TagLink>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <p className="flex flex-col items-center">
            <span className="text-lg font-semibold">{user.reputation}</span>
            <span className="text-sm">Reputation</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="text-lg font-semibold">{user.reached}</span>
            <span className="text-sm">Reached</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="text-lg font-semibold">{user.answers}</span>
            <span className="text-sm">Answers</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="text-lg font-semibold">{user.questions}</span>
            <span className="text-sm">Questions</span>
          </p>
        </div>
      </article>
    </li>
  );
};

export default CommunityCard;
