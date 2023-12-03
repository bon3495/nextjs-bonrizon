import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex h-7 items-center rounded-full border px-3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-gradient border-transparent text-primary-foreground',
        secondary: 'border-transparent bg-secondary-light text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        tag: 'border-0 bg-secondary-lightest/20 text-secondary dark:border-transparent dark:bg-secondary-lighter dark:text-white',
        'tag-secondary':
          'border-0 bg-secondary-lightest/20 text-secondary-sub hover:bg-secondary/20 dark:bg-secondary-sub dark:text-white dark:hover:bg-secondary-light',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <p className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
