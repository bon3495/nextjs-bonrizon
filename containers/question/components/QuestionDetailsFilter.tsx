'use client';

import { useState } from 'react';

import { FilterCombobox } from '@/components/shared/filters';
import { ANSWER_FILTERS } from '@/constants/filters';

const QuestionDetailsFilter = () => {
  const [filterValue, setFilterValue] = useState('highestupvotes');

  return (
    <section className="flex items-center justify-between">
      <p className="text-sm font-medium">2 Answers</p>
      <div className="flex items-center space-x-2 text-sm">
        <p>Sorted by</p>
        <FilterCombobox
          filters={ANSWER_FILTERS}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          contentClassName="w-[220px]"
          triggerClassName="flex py-2 px-4 w-[220px] text-sm justify-start max-lg:w-[220px] max-xs:w-10 max-xs:p-1 max-xs:justify-center"
        />
      </div>
    </section>
  );
};

export default QuestionDetailsFilter;
