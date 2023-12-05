'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

import { InputSearch } from '@/components/shared/search';

const CommunitySearchBar = () => {
  const [value, setValue] = useState('');
  return (
    <InputSearch
      Icon={Search}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Filter by user"
      className="hover:border-border focus:border-border focus-visible:border-border dark:hover:border-border dark:focus:border-border dark:focus-visible:border-border"
    />
  );
};

export default CommunitySearchBar;
