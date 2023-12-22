import { getAnswers } from '@/actions/answer';
import { Separator } from '@/components/ui/separator';
import { AnswersByFilter, AnswerVotes, DisplayAnswer } from '@/containers/answer/components';
import { UserInfoType } from '@/containers/authentication/types';

interface DisplayAllAnswersProps {
  questionId: string;
  user: UserInfoType;
  totalAnswers: number;
}

const DisplayAllAnswers = async ({ questionId, totalAnswers, user }: DisplayAllAnswersProps) => {
  const { answers } = await getAnswers({
    questionId,
  });

  return (
    <div className="flex flex-col">
      <AnswersByFilter totalAnswers={totalAnswers} />
      <Separator className="mb-12 mt-4" />
      <div className="flex flex-col">
        {answers.map((answer) => {
          return (
            <DisplayAnswer key={`${answer._id}`} answer={answer}>
              <AnswerVotes />
            </DisplayAnswer>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayAllAnswers;
