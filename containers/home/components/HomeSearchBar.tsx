'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

import { InputSearch } from '@/components/shared/search';

// interface HomeSearchBarProps {
//   route: (typeof ROUTES_NAME)[keyof typeof ROUTES_NAME];
// }

const HomeSearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <InputSearch
      Icon={Search}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search for questions"
      className="hover:border-border focus:border-border focus-visible:border-border dark:hover:border-border dark:focus:border-border dark:focus-visible:border-border"
    />
  );
};

export default HomeSearchBar;
