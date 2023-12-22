'use client';

import BookmarkIcon from '@/components/icons/BookmarkIcon';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface BookmarkPostProps {
  userId: string;
  hasSaved?: boolean;
}
const BookmarkPost = ({ userId, hasSaved }: BookmarkPostProps) => {
  const handleBookMark = () => {
    console.log(userId);
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="rounded-full hover:bg-background-darker hover:text-primary dark:hover:bg-background-lighter"
            onClick={handleBookMark}
          >
            <BookmarkIcon
              className={cn({
                'fill-primary text-primary': hasSaved,
              })}
            />
          </Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="top" align="center" className="max-w-[300px]">
            <span>Save this question.</span>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BookmarkPost;
