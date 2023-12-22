'use client';

import { usePathname } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { downvotesQuestion, upvotesQuestion } from '@/actions/question';
import Votes from '@/components/shared/Votes';
import { UserInfoType } from '@/containers/authentication/types';
import { QuestionDetailsType } from '@/containers/home/types';

interface QuestionVotesProps {
  user: UserInfoType;
  questionDetails: QuestionDetailsType;
}

const QuestionVotes = ({ user, questionDetails }: QuestionVotesProps) => {
  const pathname = usePathname();
  const mutationUpvotes = useMutation({
    mutationFn: upvotesQuestion,
  });

  const mutationDownvotes = useMutation({
    mutationFn: downvotesQuestion,
  });

  const handleVotes = (type: 'upvotes' | 'downvotes') => {
    const body = {
      hasUpvoted: questionDetails.upvotes.some((item) => item._id === user._id),
      hasDownvoted: questionDetails.downvotes.some((item) => item._id === user._id),
      path: pathname,
      questionId: questionDetails._id,
      userId: user._id,
    };

    if (type === 'upvotes') mutationUpvotes.mutate(body);
    if (type === 'downvotes') mutationDownvotes.mutate(body);
  };

  return (
    <Votes
      type="question"
      upvotesContent="This question shows research effort; it is useful and clear."
      downvotesContent="This question does not show any research effort; it is unclear or not useful."
      upvotes={questionDetails.upvotes.length}
      isPending={mutationUpvotes.isPending || mutationDownvotes.isPending}
      onUpvotes={() => handleVotes('upvotes')}
      onDownvotes={() => handleVotes('downvotes')}
      hasUpvoted={questionDetails.upvotes.some((info) => info.clerkId === user.clerkId)}
      hasDownvoted={questionDetails.downvotes.some((info) => info.clerkId === user.clerkId)}
    />
  );
};

export default QuestionVotes;
