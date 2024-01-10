import { FilterCombobox } from '@/components/shared/filters';
import { TAG_FILTERS } from '@/constants/filters';
import { TagDetailsFilters, TagDetailsSearchBar } from '@/containers/tags/components';

interface ComponentProps {
  title: string;
}

const TagDetailsHeader = ({ title }: ComponentProps) => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Questions tagged [{title}]</h1>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="flex items-center gap-5">
          <TagDetailsSearchBar />
          <FilterCombobox filters={TAG_FILTERS} />
        </div>

        <TagDetailsFilters />
      </div>
    </>
  );
};

export default TagDetailsHeader;
