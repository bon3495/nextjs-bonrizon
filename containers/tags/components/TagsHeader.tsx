import { FilterCombobox } from '@/components/shared/filters';
import { TAG_FILTERS } from '@/constants/filters';
import { TagsFilter, TagsSearchBar } from '@/containers/tags/components';

const TagsHeader = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-4">
        <h1 className="text-3xl font-bold">Tags</h1>
        <p className="text-sm">
          A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags
          makes it easier for others to find and answer your question.
        </p>
      </div>
      <div className="mt-10 flex gap-x-6">
        <TagsSearchBar>
          <TagsFilter />
        </TagsSearchBar>
        <FilterCombobox filters={TAG_FILTERS} contentClassName="w-[180px]" triggerClassName="md:hidden ml-auto" />
      </div>
    </>
  );
};

export default TagsHeader;
