import { ClockIcon } from 'lucide-react';

import ParseHTML from '@/components/shared/ParseHTML';
import UserWithAvatarLink from '@/components/shared/UserWithAvatarLink';
import { Separator } from '@/components/ui/separator';
import { MONTH_DATE_YEAR_FULLTIME } from '@/constants/date-time-format';
import { AnswerItemDetailsType } from '@/containers/answer/types';
import { TextWithTooltip } from '@/containers/home/components';
import { formatDateToLocal } from '@/lib/dayjs-timezone';
import { getTimestamp } from '@/lib/utils';

interface DisplayAnswerProps {
  answer: AnswerItemDetailsType;
  children: React.ReactNode;
}

const DisplayAnswer = ({ answer, children }: DisplayAnswerProps) => {
  return (
    <article key={`${answer._id}`}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <UserWithAvatarLink
            userId={`${answer.author._id}`}
            userName={answer.author.name}
            userUrl={answer.author.picture}
          />

          <span className="mx-2 text-xs text-contrast-low">|</span>

          <TextWithTooltip content={formatDateToLocal(answer.createAt, MONTH_DATE_YEAR_FULLTIME)}>
            <p className="flex items-center space-x-2 text-sm text-muted-foreground">
              <ClockIcon className="h-4 w-4" />
              <span>
                Answered <span className="font-medium text-foreground">{getTimestamp(new Date(answer.createAt))}</span>
              </span>
            </p>
          </TextWithTooltip>
        </div>
        {children}
      </div>
      <div className="py-4 pl-10">
        <ParseHTML content={answer.answerDetail} />
      </div>
      <Separator className="mt-8 last:mb-10" />
    </article>
  );
};

export default DisplayAnswer;
