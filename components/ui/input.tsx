import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  extendOnchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, errorMessage, extendOnchange, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-md border border-border bg-background-light px-4 py-2 text-sm outline-none transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:text-muted-foreground hover:border-secondary focus:border-secondary-lighter focus:bg-background-lighter focus:shadow-focus-active disabled:cursor-not-allowed disabled:opacity-50 dark:border-background-lighter dark:hover:border-secondary-lighter dark:focus:border-secondary-lighter',
          {
            'hover:border-border dark:hover:border-border': props.disabled,
            'border-error hover:border-error focus:border-error focus:shadow-focus-error dark:border-error dark:hover:border-error dark:focus:border-error dark:focus:shadow-focus-error':
              errorMessage,
          },
          className,
        )}
        ref={ref}
        {...props}
        onChange={(e) => {
          props.onChange?.(e);
          extendOnchange?.(e);
        }}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
