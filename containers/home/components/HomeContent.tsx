import { HomeNotFound, QuestionCard, QuestionsList } from '@/containers/home/components';
import { QuestionItemType } from '@/containers/home/types';

interface HomeContentProps {
  questions: QuestionItemType[];
}

const HomeContent = ({ questions }: HomeContentProps) => {
  if (questions.length === 0) return <HomeNotFound />;

  return (
    <QuestionsList>
      {questions.map((question) => {
        return <QuestionCard key={question._id.toString()} question={question} />;
      })}
    </QuestionsList>
  );
};

export default HomeContent;
