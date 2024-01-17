'use client';

import { usePathname } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { deleteQuestion } from '@/actions/question';
import { ProfileRemoveItem } from '@/containers/profile';

interface ComponentProps {
  questionId: string;
}

const ProfileRemoveQuestion = ({ questionId }: ComponentProps) => {
  const pathname = usePathname();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteQuestion,
  });

  const handleDeleteQuestion = () => {
    mutate({ questionId, path: pathname });
  };

  return (
    <ProfileRemoveItem
      title="Delete Question?"
      tooltipText="Delete Question"
      isPending={isPending}
      onDelete={handleDeleteQuestion}
    >
      <p>This will delete this question permanently. You cannot undo this action.</p>
    </ProfileRemoveItem>
  );
};

export default ProfileRemoveQuestion;
