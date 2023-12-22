'use client';

import Votes from '@/components/shared/Votes';

const AnswerVotes = () => {
  const handleUpvotesAnswer = () => {
    console.log('up');
  };

  const handleDownvotesAnswer = () => {
    console.log('up');
  };

  return (
    <Votes
      type="answer"
      upvotes={0}
      hasUpvoted={false}
      hasDownvoted={false}
      upvotesContent="This answer is useful"
      downvotesContent="This answer is not useful"
      onUpvotes={handleUpvotesAnswer}
      onDownvotes={handleDownvotesAnswer}
    />
  );
};

export default AnswerVotes;
