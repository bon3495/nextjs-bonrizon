'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

import { InputSearch } from '@/components/shared/search';
import { RootLayoutProps } from '@/types/global';

interface TagsSearchBar extends RootLayoutProps {}

const TagsSearchBar = ({ children }: TagsSearchBar) => {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-1 items-center gap-x-6">
      <InputSearch
        Icon={Search}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Filter by tag name"
        className="w-full duration-300 hover:border-border focus:w-full focus:border-border focus-visible:border-border dark:hover:border-border dark:focus:border-border dark:focus-visible:border-border md:w-[300px]"
      />
      {children}
    </div>
  );
};

export default TagsSearchBar;
