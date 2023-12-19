import { ClockIcon } from 'lucide-react';

import LikeIcon from '@/components/icons/LikeIcon';
import ParseHTML from '@/components/shared/ParseHTML';
import UserWithAvatarLink from '@/components/shared/UserWithAvatarLink';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MONTH_DATE_YEAR_FULLTIME } from '@/constants/date-time-format';
import { AnswerItemType } from '@/containers/answer/types';
import { TextWithTooltip } from '@/containers/home/components';
import { formatDateToLocal } from '@/lib/dayjs-timezone';
import { formatNumberWithExtension, getTimestamp } from '@/lib/utils';

interface DisplayAnswerProps {
  answer: AnswerItemType;
}

const DisplayAnswer = ({ answer }: DisplayAnswerProps) => {
  return (
    <article key={`${answer._id}`}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <UserWithAvatarLink
            userId={`${answer.author._id}`}
            userName={answer.author.name}
            userUrl={answer.author.picture}
          />

          <span className="mx-2 text-xs text-contrast-low">|</span>

          <TextWithTooltip content={formatDateToLocal(answer.createAt, MONTH_DATE_YEAR_FULLTIME)}>
            <p className="flex items-center space-x-2 text-sm text-muted-foreground">
              <ClockIcon className="h-4 w-4" />
              <span>
                Answered <span className="font-medium text-foreground">{getTimestamp(new Date(answer.createAt))}</span>
              </span>
            </p>
          </TextWithTooltip>
        </div>
        <div className="flex items-center rounded-full bg-background-dark dark:bg-background-light">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="w-auto rounded-l-full pl-4 hover:bg-background-darker hover:text-primary dark:hover:bg-background-lighter"
                >
                  <LikeIcon />
                  <p className="px-2 text-foreground">
                    {formatNumberWithExtension(2918)}
                    {/* {formatNumberWithExtension(answer.upvotes.length)} */}
                  </p>
                </Button>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent side="top" align="center" className="max-w-[300px]">
                  <span>This answer is useful</span>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
          </TooltipProvider>
          <Separator className="h-full w-[1px]" />
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="w-auto rotate-180 rounded-l-full pl-4 pr-2 hover:bg-background-darker hover:text-primary dark:hover:bg-background-lighter"
                >
                  <LikeIcon />
                </Button>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent side="top" align="center" className="max-w-[300px]">
                  <span>This answer is not useful</span>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="py-4 pl-10">
        <ParseHTML content={answer.answerDetail} />
      </div>
      <Separator className="mt-8 last:mb-10" />
    </article>
  );
};

export default DisplayAnswer;
