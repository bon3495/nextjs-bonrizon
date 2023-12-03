interface QuestionsListProps {
  children: React.ReactNode;
}

const QuestionsList = ({ children }: QuestionsListProps) => {
  return <ul className="mt-6 flex flex-1 flex-col gap-6">{children}</ul>;
};

export default QuestionsList;
