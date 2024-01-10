import { Metadata } from 'next';

import { getQuestionsByTagId } from '@/actions/tag';
import { HomeNotFound, QuestionCard, QuestionsList } from '@/containers/home/components';
import { TagDetailsHeader } from '@/containers/tags/components';

type Props = {
  params: { id: string };
};

interface ComponentProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { title } = await getQuestionsByTagId({
    id: params.id,
  });
  return {
    title: `Questions tagged ${title} | Bonrizon`,
  };
};

const TagDetailsPage = async ({ params }: ComponentProps) => {
  const { title, questions } = await getQuestionsByTagId({
    id: params.id,
    currentPage: 1,
    pageSize: 10,
  });

  if (questions.length === 0) return <HomeNotFound />;

  return (
    <>
      <TagDetailsHeader title={title} />
      <QuestionsList>
        {questions.map((question) => {
          return <QuestionCard key={question._id.toString()} question={question} />;
        })}
      </QuestionsList>
    </>
  );
};

export default TagDetailsPage;
