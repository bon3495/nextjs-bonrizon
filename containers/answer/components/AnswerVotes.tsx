'use client';

import { usePathname } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { downvotesAnswer, upvotesAnswer } from '@/actions/answer';
import Votes from '@/components/shared/Votes';
import { AnswerItemDetailsSchema } from '@/containers/answer/schema';

interface ComponentProps {
  userId: string;
  answer: z.infer<typeof AnswerItemDetailsSchema>;
}

const AnswerVotes = ({ answer, userId }: ComponentProps) => {
  const pathname = usePathname();

  const hasUpvoted = answer.upvotes.some((id) => id === userId);
  const hasDownvoted = answer.downvotes.some((id) => id === userId);

  const mutationUpvotes = useMutation({
    mutationFn: upvotesAnswer,
  });

  const mutationDownvotes = useMutation({
    mutationFn: downvotesAnswer,
  });

  const handleVotes = (type: 'upvotes' | 'downvotes') => {
    const body = {
      hasUpvoted,
      hasDownvoted,
      path: pathname,
      answerId: answer._id,
      userId,
    };

    if (type === 'upvotes') mutationUpvotes.mutate(body);
    if (type === 'downvotes') mutationDownvotes.mutate(body);
  };

  return (
    <Votes
      type="answer"
      upvotes={answer.upvotes.length}
      hasUpvoted={hasUpvoted}
      hasDownvoted={hasDownvoted}
      upvotesContent="This answer is useful"
      downvotesContent="This answer is not useful"
      onUpvotes={() => handleVotes('upvotes')}
      onDownvotes={() => handleVotes('downvotes')}
    />
  );
};

export default AnswerVotes;
