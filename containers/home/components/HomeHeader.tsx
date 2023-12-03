import { FilterCombobox } from '@/components/shared/filters';
import { HOME_PAGE_FILTERS } from '@/constants/filters';
import { AskQuestionButton, HomeFilters, HomeSearchBar } from '@/containers/home/components';

// interface HomeHeaderProps {
// }

const HomeHeader = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">All Questions</h1>
        <AskQuestionButton />
      </div>
      <div className="mt-10 flex flex-col">
        <div className="flex items-center gap-5">
          <HomeSearchBar />
          <FilterCombobox filters={HOME_PAGE_FILTERS} triggerClassName="" />
        </div>

        <HomeFilters />
      </div>
    </>
  );
};

export default HomeHeader;
