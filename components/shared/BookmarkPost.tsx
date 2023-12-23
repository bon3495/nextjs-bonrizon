'use client';

import BookmarkIcon from '@/components/icons/BookmarkIcon';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface BookmarkPostProps {
  hasSaved: boolean;
  bookmarkContent: string;
  isPending?: boolean;
  onSave: () => void;
}
const BookmarkPost = ({ hasSaved, bookmarkContent, isPending, onSave }: BookmarkPostProps) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="rounded-full hover:bg-background-darker hover:text-primary dark:hover:bg-background-lighter"
            onClick={onSave}
            disabled={isPending}
          >
            <BookmarkIcon
              className={cn({
                'fill-warning text-warning-darker': hasSaved,
              })}
            />
          </Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="top" align="center" className="max-w-[300px]">
            <span>{bookmarkContent}</span>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BookmarkPost;
