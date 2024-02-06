import Link from 'next/link';
import { auth, SignedIn } from '@clerk/nextjs';

import { getQuestionsInProfile } from '@/actions/user';
import EditIcon2 from '@/components/icons/EditIcon2';
import EyeIcon from '@/components/icons/EyeIcon';
import LikeIcon from '@/components/icons/LikeIcon';
import TagLink from '@/components/shared/TagLink';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MONTH_DATE_YEAR_FULLTIME } from '@/constants/date-time-format';
import { ROUTES_NAME } from '@/constants/routes';
import { QUERY_DEFAULT } from '@/constants/values';
import { TextWithTooltip } from '@/containers/home/components';
import { ProfileRemoveQuestion } from '@/containers/profile';
import { formatDateToLocal } from '@/lib/dayjs-timezone';
import { cn, formatNumberWithDot, formatNumberWithExtension, getTimestamp } from '@/lib/utils';

interface ComponentProps {
  userId: string;
  clerkId: string;
}

const ProfileQuestions = async ({ userId, clerkId }: ComponentProps) => {
  const { userId: authId } = auth();
  const { userQuestions } = await getQuestionsInProfile({
    userId,
    currentPage: QUERY_DEFAULT.CURRENT_PAGE,
    pageSize: QUERY_DEFAULT.PAGE_SIZE,
  });

  return (
    <ul className="mt-6 flex flex-1 flex-col rounded-md border border-border">
      {userQuestions.length > 0 ? (
        userQuestions.map((question) => {
          return (
            <li
              key={question._id.toString()}
              className="relative flex flex-col border-b p-4 last:border-b-0 dark:bg-background-light"
            >
              <div className="flex items-start justify-between">
                <Link href={`${ROUTES_NAME.QUESTIONS}/${question._id.toString()}`}>
                  <h3 className="line-clamp-2 text-base font-semibold transition-all hover:text-primary-lighter">
                    {question.title}
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
                              href={`${ROUTES_NAME.QUESTIONS}/edit/${question._id.toString()}`}
                            >
                              <EditIcon2 className="h-5 w-5" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipPortal>
                            <TooltipContent side="top" align="center" className="max-w-[300px]">
                              <span>Edit Question</span>
                            </TooltipContent>
                          </TooltipPortal>
                        </Tooltip>
                      </TooltipProvider>

                      <ProfileRemoveQuestion questionId={question._id} />
                    </div>
                  )}
                </SignedIn>
              </div>
              {question.tags.length > 0 ? (
                <div className="my-4 flex gap-2">
                  {question.tags.map((tag) => (
                    <TagLink key={tag._id.toString()} href={`${ROUTES_NAME.TAGS}/${tag._id.toString()}`}>
                      {tag.name}
                    </TagLink>
                  ))}
                </div>
              ) : null}
              <div className="flex items-center">
                <div className="flex items-center text-foreground">
                  <TextWithTooltip
                    content={`${formatNumberWithDot(question.upvotes.length)} votes`}
                    Icon={<LikeIcon className="sm:h-5 sm:w-5" />}
                    isHideTooltip={question.upvotes.length < 1000}
                  >
                    <p className="ml-1 flex items-center space-x-1 text-sm">
                      <span>{formatNumberWithExtension(question.upvotes.length)}</span>
                      <span className="hidden sm:inline-block">votes</span>
                    </p>
                  </TextWithTooltip>
                </div>
                <div className="ml-2 flex items-center">
                  <TextWithTooltip
                    content={`${formatNumberWithDot(question.views)} views`}
                    Icon={<EyeIcon className="sm:h-5 sm:w-5" />}
                    isHideTooltip={question.views < 1000}
                  >
                    <p className="ml-1 flex items-center space-x-1 text-sm">
                      <span>{formatNumberWithExtension(question.views)}</span>
                      <span className="hidden sm:inline-block">views</span>
                    </p>
                  </TextWithTooltip>
                </div>
                <div className="ml-auto">
                  <TextWithTooltip content={formatDateToLocal(question.createAt, MONTH_DATE_YEAR_FULLTIME)}>
                    <small className="text-sm text-muted-foreground">{getTimestamp(new Date(question.createAt))}</small>
                  </TextWithTooltip>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <li className="flex items-center justify-center p-10">
          You have not{' '}
          <Link
            href={ROUTES_NAME.ASK_QUESTION}
            className={cn(buttonVariants({ variant: 'link' }), 'mx-1.5 flex h-auto items-center px-0 py-0')}
          >
            asked
          </Link>{' '}
          any questions
        </li>
      )}
    </ul>
  );
};

export default ProfileQuestions;
