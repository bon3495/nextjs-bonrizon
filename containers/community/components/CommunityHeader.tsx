import { FilterCombobox } from '@/components/shared/filters';
import { USER_FILTERS } from '@/constants/filters';
import { CommunityFilter, CommunitySearchBar } from '@/containers/community/components';

const CommunityHeader = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Community</h1>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="flex items-center gap-5">
          <CommunitySearchBar />
          <FilterCombobox filters={USER_FILTERS} contentClassName="w-[180px]" />
        </div>
        <CommunityFilter />
      </div>
    </>
  );
};

export default CommunityHeader;
