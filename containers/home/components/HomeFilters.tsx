'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { HOME_PAGE_FILTERS } from '@/constants/filters';
import { cn } from '@/lib/utils';

const HomeFilters = () => {
  const [filter, setFilter] = useState<string>('newest');

  return (
    <div className="mt-6 flex items-center gap-x-2 max-lg:hidden">
      {HOME_PAGE_FILTERS.map((option) => {
        const isActive = filter === option.value;
        return (
          <Button
            key={option.value}
            className={cn('h-8 rounded-full border text-sm', {
              'dark:bg-primary-gradient border-transparent bg-primary-lightest/50 text-primary-light dark:text-accent-foreground':
                isActive,
              'hover:bg-background-dark dark:hover:bg-background-light': !isActive,
            })}
            onClick={() => setFilter(option.value)}
            size="sm"
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
