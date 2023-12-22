'use client';

import LikeIcon from '@/components/icons/LikeIcon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn, formatNumberWithExtension } from '@/lib/utils';

interface VotesProps {
  type: 'question' | 'answer';
  upvotes: number;
  upvotesContent?: string;
  downvotesContent?: string;
  isPending?: boolean;
  hasUpvoted: boolean;
  hasDownvoted: boolean;
  onUpvotes: () => void;
  onDownvotes: () => void;
}

const Votes = ({
  type,
  upvotes,
  upvotesContent,
  downvotesContent,
  isPending,
  hasUpvoted,
  hasDownvoted,
  onUpvotes,
  onDownvotes,
}: VotesProps) => {
  return (
    <div
      className={cn('flex items-center', {
        'rounded-full bg-background-dark dark:bg-background-light': type === 'question',
      })}
    >
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className={cn(
                'w-auto rounded-l-full pl-3 hover:bg-background-darker hover:text-primary dark:hover:bg-background-lighter',
              )}
              onClick={onUpvotes}
              disabled={isPending}
            >
              <LikeIcon
                className={cn({
                  'fill-primary/10 text-primary': hasUpvoted,
                })}
              />
              <p className="px-2 text-foreground">
                {/* {formatNumberWithExtension(2918)} */}
                {formatNumberWithExtension(upvotes)}
              </p>
            </Button>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent side="top" align="center" className="max-w-[300px]">
              <span>{upvotesContent}</span>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
      <Separator className="h-6 w-[1px]" />
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className={cn(
                'w-auto rotate-180 rounded-l-full pl-3 pr-2 hover:bg-background-darker hover:text-primary dark:hover:bg-background-lighter',
              )}
              onClick={onDownvotes}
              disabled={isPending}
            >
              <LikeIcon
                className={cn({
                  'fill-primary/10 text-primary': hasDownvoted,
                })}
              />
            </Button>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent side="top" align="center" className="max-w-[300px]">
              <span>{downvotesContent}</span>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Votes;
