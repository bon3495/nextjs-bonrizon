import Link from 'next/link';
import { auth, SignedIn } from '@clerk/nextjs';

import { getAnswersInProfile } from '@/actions/user';
import EditIcon2 from '@/components/icons/EditIcon2';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ROUTES_NAME } from '@/constants/routes';
import { QUERY_DEFAULT } from '@/constants/values';
import { cn } from '@/lib/utils';

interface ComponentProps {
  userId: string;
  clerkId: string;
}

const ProfileAnswers = async ({ clerkId, userId }: ComponentProps) => {
  const { userId: authId } = auth();

  const { userAnswers } = await getAnswersInProfile({
    userId,
    currentPage: QUERY_DEFAULT.CURRENT_PAGE,
    pageSize: QUERY_DEFAULT.PAGE_SIZE,
  });

  return (
    <ul className="mt-6 flex flex-1 flex-col rounded-md border">
      {userAnswers.length > 0 ? (
        userAnswers.map((answer) => (
          <li key={answer._id} className="flex flex-col border-b p-4 last:border-b-0 dark:bg-background-light">
            <div className="flex items-start justify-between">
              <Link href={`${ROUTES_NAME.QUESTIONS}/${answer.question._id}#${answer._id}`}>
                <h3 className="line-clamp-2 text-base font-semibold transition-all hover:text-primary-lighter">
                  {answer.question.title}
                </h3>
              </Link>
              <SignedIn>
                {clerkId === authId && (
                  <div className="ml-2 flex items-center gap-x-1">
                    <TooltipProvider delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            className={cn(buttonVariants({ variant: 'ghost' }), 'h-8 w-8 rounded-full p-0')}
                            href={`${ROUTES_NAME.QUESTIONS}/${answer.question._id}#${answer._id}`}
                          >
                            <EditIcon2 className="h-5 w-5" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipPortal>
                          <TooltipContent side="top" align="center" className="max-w-[300px]">
                            <span>Edit Answer</span>
                          </TooltipContent>
                        </TooltipPortal>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
              </SignedIn>
            </div>
          </li>
        ))
      ) : (
        <li className="flex items-center justify-center p-10">
          You have not{' '}
          <Link
            href={ROUTES_NAME.ASK_QUESTION}
            className={cn(buttonVariants({ variant: 'link' }), 'mx-1.5 flex h-auto items-center px-0 py-0')}
          >
            answered
          </Link>{' '}
          any questions
        </li>
      )}
    </ul>
  );
};

export default ProfileAnswers;
