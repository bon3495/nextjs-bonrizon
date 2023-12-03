import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-pulse rounded-md bg-background-dark dark:bg-background-light', className)} {...props} />
  );
}

export { Skeleton };
