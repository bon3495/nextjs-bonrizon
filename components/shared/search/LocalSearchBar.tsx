'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

import { InputSearch } from '@/components/shared/search';

// interface LocalSearchBarProps {
//   route: (typeof ROUTES_NAME)[keyof typeof ROUTES_NAME];
// }

const LocalSearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <InputSearch
      Icon={Search}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search for questions"
    />
  );
};

export default LocalSearchBar;
