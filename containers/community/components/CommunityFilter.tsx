'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { USER_FILTERS } from '@/constants/filters';
import { cn } from '@/lib/utils';

const CommunityFilter = () => {
  const [filter, setFilter] = useState<string>('topcontributors');

  return (
    <div className="mt-6 flex items-center gap-x-2 max-lg:hidden">
      {USER_FILTERS.map((option) => {
        const isActive = filter === option.value;
        return (
          <Button
            key={option.value}
            className={cn('relative h-8 rounded-full text-sm', {
              'text-primary-light dark:text-accent-foreground': isActive,
              'hover:bg-background-dark dark:hover:bg-background-light': !isActive,
            })}
            onClick={() => setFilter(option.value)}
            size="sm"
          >
            {isActive && (
              <motion.span
                layoutId="community-filter-animation"
                className="dark:bg-primary-gradient absolute inset-0 bg-primary-lightest/50"
                transition={{ type: 'spring', duration: 0.6 }}
                style={{ borderRadius: 9999 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default CommunityFilter;
