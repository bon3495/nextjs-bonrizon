import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="relative flex rounded-md">
        <Label htmlFor="global-search" className="absolute left-4 top-1/2 -translate-y-1/2">
          <Search />
        </Label>
        <Input
          id="global-search"
          placeholder="Search globally"
          className="h-12 border-none bg-background-dark pl-14 shadow-none outline-none transition-all focus:bg-background-lighter focus:shadow-search-global focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background-light"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
