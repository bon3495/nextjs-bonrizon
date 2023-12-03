import Link from 'next/link';

// import ChatIcon from '@/components/icons/ChatIcon';
import EyeIcon from '@/components/icons/EyeIcon';
import LikeIcon from '@/components/icons/LikeIcon';
import TagLink from '@/components/shared/TagLink';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { MONTH_DATE_YEAR_FULLTIME } from '@/constants/date-time-format';
import { ROUTES_NAME } from '@/constants/routes';
import { TextWithTooltip } from '@/containers/home/components';
import { QuestionItemType } from '@/containers/home/types';
import { formatDateToLocal } from '@/lib/dayjs-timezone';
import { getAvatarFallback } from '@/lib/helpers';
import { formatNumberWithDot, formatNumberWithExtension, getTimestamp } from '@/lib/utils';

interface QuestionCardProps {
  question: QuestionItemType;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <li className="flex flex-col rounded-md p-6 shadow-card-light dark:bg-background-light dark:shadow-card">
      <Link href={`${ROUTES_NAME.QUESTIONS}/${question._id.toString()}`} className="">
        <h3 className="mb-4 line-clamp-2 text-lg font-semibold transition-all hover:text-primary-lighter">
          {question.title}
        </h3>
      </Link>

      <div className="flex items-center">
        <Link href={`${ROUTES_NAME.PROFILE}/${question.author._id}`} className="flex items-center">
          <Avatar className="mr-2 shadow-avatar">
            <AvatarImage src={question.author.picture} />
            <AvatarFallback>{getAvatarFallback(question.author.name)}</AvatarFallback>
          </Avatar>
        </Link>
        <small className="mr-1 text-sm text-muted-foreground">by</small>

        <Link
          href={`${ROUTES_NAME.PROFILE}/${question.author._id}`}
          className="flex items-center transition-all hover:text-primary"
        >
          <small className="text-sm">{question.author.name}</small>
        </Link>

        <span className="mx-2 text-xs text-contrast-low">|</span>

        <TextWithTooltip content={formatDateToLocal(question.createAt, MONTH_DATE_YEAR_FULLTIME)}>
          <small className="text-sm text-muted-foreground">{getTimestamp(new Date(question.createAt))}</small>
        </TextWithTooltip>
      </div>

      {question.tags.length > 0 ? (
        <div className="mt-4 flex gap-2">
          {question.tags.map((tag) => (
            <TagLink key={tag._id.toString()} href={`${ROUTES_NAME.TAGS}/${tag._id.toString()}`}>
              {tag.name}
            </TagLink>
          ))}
        </div>
      ) : null}
      <Separator className="my-4" />

      <div className="mt-auto flex items-center">
        <div className="flex items-center text-foreground">
          <TextWithTooltip
            content={`${formatNumberWithDot(question.upvotes.length)} votes`}
            Icon={<LikeIcon className="sm:h-5 sm:w-5" />}
            isHideTooltip={question.upvotes.length < 1000}
          >
            <p className="ml-1 flex items-center space-x-1 text-sm">
              <span>{formatNumberWithExtension(question.upvotes.length)}</span>
              <span className="hidden sm:inline-block">votes</span>
            </p>
          </TextWithTooltip>
        </div>
        <div className="ml-auto mr-2 flex items-center">
          <TextWithTooltip
            content={`${formatNumberWithDot(question.views)} views`}
            Icon={<EyeIcon className="sm:h-5 sm:w-5" />}
            isHideTooltip={question.views < 1000}
          >
            <p className="ml-1 flex items-center space-x-1 text-sm">
              <span>{formatNumberWithExtension(question.views)}</span>
              <span className="hidden sm:inline-block">views</span>
            </p>
          </TextWithTooltip>
        </div>
        {/* <div className="flex items-center">
          <TextWithTooltip
            content={`${formatNumberWithDot(question.answers)} answers`}
            Icon={<ChatIcon className="sm:h-5 sm:w-5" />}
          >
            <p className="ml-1 flex items-center space-x-1 text-sm">
              <span>{formatNumberWithExtension(question.answers)}</span>
              <span className="hidden sm:inline-block">answers</span>
            </p>
          </TextWithTooltip>
        </div> */}
      </div>
    </li>
  );
};

export default QuestionCard;
