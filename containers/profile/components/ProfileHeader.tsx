import Image from 'next/image';
import Link from 'next/link';
import { auth, SignedIn } from '@clerk/nextjs';

import CalendarIcon from '@/components/icons/CalendarIcon';
import EditIcon from '@/components/icons/EditIcon';
import LinkIcon from '@/components/icons/LinkIcon';
import MapPinIcon from '@/components/icons/MapPinIcon';
import { buttonVariants } from '@/components/ui/button';
import { MONTH_DATE_YEAR } from '@/constants/date-time-format';
import { ROUTES_NAME } from '@/constants/routes';
import { UserDataType } from '@/containers/authentication/types';
import { formatDateToLocal } from '@/lib/dayjs-timezone';
import { cn } from '@/lib/utils';

interface ComponentProps {
  user: UserDataType;
  totalAnswers: number;
  totalQuestions: number;
}

const ProfileHeader = ({ user }: ComponentProps) => {
  const { userId: clerkId } = auth();

  return (
    <div className="flex flex-col rounded-b-md shadow-card-light dark:shadow-card">
      <Image
        src="/assets/images/bg-profile.png"
        alt="No result illustration"
        width={0}
        height={0}
        sizes="100vw"
        className="relative z-10 w-full object-cover"
      />
      <div className="relative h-28 rounded-b-md bg-background-light">
        <Image
          src={user.picture}
          alt={user.name}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute bottom-5 left-5 z-20 w-[120px] rounded-2xl border-[5px] border-background-light object-cover"
        />

        <div className="ml-[160px] flex h-full items-center justify-between py-4 pr-[25px]">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">
              {user.name} ({user.username})
            </p>
            <div className="mt-1 flex items-center space-x-4">
              {user.portfolioWebsite && (
                <a
                  href={user.portfolioWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center space-x-1 transition-all hover:text-secondary"
                >
                  <LinkIcon />
                  <span className="group-hover:underline">Portfolio</span>
                </a>
              )}
              {user.location && (
                <p className="flex items-center space-x-1">
                  <MapPinIcon />
                  <span>{user.location}</span>
                </p>
              )}
              <p className="flex items-center space-x-1">
                <CalendarIcon />
                <span>Joined {formatDateToLocal(user.joined, MONTH_DATE_YEAR)}</span>
              </p>
            </div>
          </div>
          <SignedIn>
            {clerkId === user.clerkId && (
              <Link
                href={`${ROUTES_NAME.PROFILE}/edit/${user.clerkId}`}
                className={cn(buttonVariants({ variant: 'secondary' }), 'space-x-2')}
              >
                <EditIcon />
                <span>Edit Profile</span>
              </Link>
            )}
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
