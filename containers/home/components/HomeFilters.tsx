'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { HOME_PAGE_FILTERS } from '@/constants/filters';
import { cn } from '@/lib/utils';

const HomeFilters = () => {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <div className="mt-6 flex items-center gap-x-2 max-lg:hidden">
      {HOME_PAGE_FILTERS.map((option) => {
        const isActive = filters.includes(option.value);
        return (
          <Button
            key={option.value}
            className={cn('h-8 rounded-full border text-sm', {
              'dark:bg-primary-gradient border-transparent bg-primary-lightest/50 text-primary-light dark:text-accent-foreground':
                isActive,
              'hover:bg-background-dark dark:hover:bg-background-light': !isActive,
            })}
            onClick={() =>
              setFilters((prev) =>
                prev.includes(option.value) ? prev.filter((i) => i !== option.value) : [...prev, option.value],
              )
            }
            size="sm"
          >
            {option.label}
          </Button>
        );
      })}
      {filters.length > 0 ? (
        <Button className={cn('h-8 rounded-full text-sm')} onClick={() => setFilters([])} size="sm" variant="ghost">
          Reset
          <X className="ml-2 h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
};

export default HomeFilters;
