import { FilterCombobox } from '@/components/shared/filters';
import { QUESTION_FILTERS } from '@/constants/filters';
import { CollectionsFilters, CollectionsSearchBar } from '@/containers/collections/components';

const CollectionsHeader = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">All Saves</h1>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="flex items-center gap-5">
          <CollectionsSearchBar />
          <FilterCombobox filters={QUESTION_FILTERS} triggerClassName="" />
        </div>

        <CollectionsFilters />
      </div>
    </>
  );
};

export default CollectionsHeader;
