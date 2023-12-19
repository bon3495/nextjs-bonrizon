import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import { ClockIcon, Eye } from 'lucide-react';

import { getQuestionById } from '@/actions/question';
import { getUserById } from '@/actions/user';
import FormAnswer from '@/components/forms/FormAnswer';
import ParseHTML from '@/components/shared/ParseHTML';
import TagLink from '@/components/shared/TagLink';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { MONTH_DATE_YEAR_FULLTIME } from '@/constants/date-time-format';
import { ROUTES_NAME } from '@/constants/routes';
import { TextWithTooltip } from '@/containers/home/components';
import { QuestionDetailsFilter } from '@/containers/question/components';
import { formatDateToLocal } from '@/lib/dayjs-timezone';
import { getAvatarFallback } from '@/lib/helpers';
import { getTimestamp } from '@/lib/utils';

interface QuestionDetailsPageProps {
  params: { questionId: string };
}

const QuestionDetailsPage = async ({ params }: QuestionDetailsPageProps) => {
  const { userId } = auth();

  if (!userId) redirect(ROUTES_NAME.SIGN_IN);

  const user = await getUserById({ userId });
  const { questionId } = params;

  const questionDetails = await getQuestionById(questionId);

  return (
    <section className="flex flex-1 flex-col">
      <h2 className="mb-3 text-3xl font-semibold">{questionDetails.title}</h2>
      <section className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href={`${ROUTES_NAME.PROFILE}/${questionDetails.author._id}`} className="flex items-center">
            <Avatar className="mr-2 shadow-avatar">
              <AvatarImage src={questionDetails.author.picture} />
              <AvatarFallback>{getAvatarFallback(questionDetails.author.name)}</AvatarFallback>
            </Avatar>
          </Link>

          <Link
            href={`${ROUTES_NAME.PROFILE}/${questionDetails.author._id}`}
            className="flex items-center transition-all hover:text-primary"
          >
            <p className="text-sm font-medium">{questionDetails.author.name}</p>
          </Link>

          <span className="mx-2 text-xs text-contrast-low">|</span>

          <TextWithTooltip content={formatDateToLocal(questionDetails.createAt, MONTH_DATE_YEAR_FULLTIME)}>
            <p className="flex items-center space-x-2 text-sm text-muted-foreground">
              <ClockIcon className="h-4 w-4" />
              <span>
                Asked{' '}
                <span className="font-medium text-foreground">{getTimestamp(new Date(questionDetails.createAt))}</span>
              </span>
            </p>
          </TextWithTooltip>
        </div>
        <div className="flex items-center space-x-4">
          <p className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Eye className="h-4 w-4" />
            <span>
              Viewed <span className="font-medium text-foreground">{questionDetails.views} times</span>
            </span>
          </p>
        </div>
      </section>
      <Separator className="my-4" />

      <ParseHTML content={questionDetails.details} />

      <section className="my-10 flex items-center gap-x-2">
        {questionDetails.tags.map((tag) => (
          <TagLink href={`${ROUTES_NAME.TAGS}/${tag._id}`} key={`${tag._id}`} content={tag.description}>
            {tag.name}
          </TagLink>
        ))}
      </section>

      {/* <Separator className="my-6" /> */}
      <QuestionDetailsFilter />
      <Separator className="my-6" />

      <FormAnswer userId={`${user._id}`} questionId={`${questionDetails._id}`} />
    </section>
  );
};

export default QuestionDetailsPage;
