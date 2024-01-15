import MedalIcon from '@/components/icons/MedalIcon';
import PencilIcon from '@/components/icons/PencilIcon';
import QuestionIcon from '@/components/icons/QuestionIcon';
import StarIcon from '@/components/icons/StarIcon';
import { UserDataType } from '@/containers/authentication/types';
import { ProfileBlockWrap } from '@/containers/profile';
import { formatNumberWithExtension } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  user: UserDataType;
  totalAnswers: number;
  totalQuestions: number;
}

const ProfileStats = ({ className, totalAnswers, totalQuestions, user }: ComponentProps) => {
  console.log(user);
  return (
    <ProfileBlockWrap className={className} title="Stats">
      <div className="grid grid-cols-1 gap-4">
        <p className="flex items-center font-semibold text-warning-darker dark:text-warning-dark">
          <MedalIcon className="shrink-0" />
          <span className="ml-1">Reputation:</span>
          <span className="ml-2 text-lg">{formatNumberWithExtension(user.reputation)}</span>
        </p>
        <p className="flex items-center font-semibold text-secondary-darker dark:text-secondary-lightest">
          <StarIcon className="shrink-0" />
          <span className="ml-1">Reached:</span>
          <span className="ml-2 text-lg">{formatNumberWithExtension(user.reached)}</span>
        </p>
        <p className="flex items-center font-semibold text-primary-lighter">
          <PencilIcon className="shrink-0" />
          <span className="ml-1">Answers:</span>
          <span className="ml-2 text-lg">{formatNumberWithExtension(totalAnswers)}</span>
        </p>
        <p className="flex items-center font-semibold text-success">
          <QuestionIcon className="shrink-0" />
          <span className="ml-1">Questions:</span>
          <span className="ml-2 text-lg">{formatNumberWithExtension(totalQuestions)}</span>
        </p>
      </div>
    </ProfileBlockWrap>
  );
};

export default ProfileStats;
