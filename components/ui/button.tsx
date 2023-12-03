import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium outline-none ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        primary:
          'bg-primary-gradient text-primary-foreground hover:shadow-button-primary focus-visible:ring-primary-dark',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/80',
        outline:
          'border border-input bg-background-light hover:bg-background-dark hover:text-accent-foreground focus-visible:ring-contrast-low dark:hover:bg-background-lighter',
        secondary:
          'bg-secondary-lighter text-secondary-foreground hover:bg-secondary hover:shadow-button-secondary focus-visible:ring-secondary-light',
        ghost:
          'hover:bg-background-dark hover:text-accent-foreground focus-visible:ring-contrast-low dark:hover:bg-background-lighter',
        link: 'text-secondary underline-offset-4 hover:underline focus-visible:ring-secondary-light dark:text-secondary-lighter',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
