'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { TAG_FILTERS } from '@/constants/filters';
import { cn } from '@/lib/utils';

const TagsFilter = () => {
  const [filter, setFilter] = useState<string>('popular');

  return (
    <div className="ml-auto hidden items-center gap-x-2 md:flex">
      {TAG_FILTERS.map((tag) => {
        const isActive = filter === tag.value;
        return (
          <Button
            key={tag.value}
            className={cn('relative h-8 rounded-full text-sm', {
              'text-primary-light dark:text-accent-foreground': isActive,
              'hover:bg-background-dark dark:hover:bg-background-light': !isActive,
            })}
            onClick={() => setFilter(tag.value)}
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
            <span className="relative z-10">{tag.label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default TagsFilter;
