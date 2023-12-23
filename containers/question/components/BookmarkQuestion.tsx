'use client';

import { usePathname } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { toggleSaveQuestion } from '@/actions/user';
import BookmarkPost from '@/components/shared/BookmarkPost';
import { UserInfoType } from '@/containers/authentication/types';
import { QuestionDetailsType } from '@/containers/home/types';

interface BookmarkQuestionProps {
  user: UserInfoType;
  questionDetails: QuestionDetailsType;
}

const BookmarkQuestion = ({ user, questionDetails }: BookmarkQuestionProps) => {
  const pathname = usePathname();

  const mutateSaveQuestion = useMutation({
    mutationFn: toggleSaveQuestion,
  });

  const handleToggleSave = () => {
    mutateSaveQuestion.mutate({
      path: pathname,
      userId: user._id,
      questionId: questionDetails._id,
    });
  };

  return (
    <BookmarkPost
      hasSaved={user.saved.includes(questionDetails._id)}
      bookmarkContent="Save this question."
      isPending={mutateSaveQuestion.isPending}
      onSave={handleToggleSave}
    />
  );
};
export default BookmarkQuestion;
