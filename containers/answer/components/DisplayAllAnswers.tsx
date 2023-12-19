import { getAnswers } from '@/actions/answer';
import { AnswersByFilter, DisplayAnswer } from '@/containers/answer/components';

interface DisplayAllAnswersProps {
  questionId: string;
  userId: string;
  totalAnswers: number;
}

const DisplayAllAnswers = async ({ questionId, totalAnswers }: DisplayAllAnswersProps) => {
  const { answers } = await getAnswers({
    questionId,
  });

  return (
    <div className="flex flex-col">
      <AnswersByFilter totalAnswers={totalAnswers} />
      <div className="mt-12 flex flex-col">
        {answers.map((answer) => {
          return <DisplayAnswer key={`${answer._id}`} answer={answer} />;
        })}
      </div>
    </div>
  );
};

export default DisplayAllAnswers;
