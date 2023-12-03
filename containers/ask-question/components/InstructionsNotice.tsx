const STEPS = [
  'Summarize your problem in a one-line title.',
  'Describe your problem in more detail.',
  'Describe what you tried and what you expected to happen.',
  'Add “tags” which help surface your question to members of the community.',
  'Review your question and post it to the site.',
];

const InstructionsNotice = () => {
  return (
    <div className="mb-6 flex flex-col rounded-md border border-success-darker bg-success-lighter/10 p-6 shadow-card-light">
      <h2 className="mb-4 text-xl font-semibold">Writing a good question</h2>
      <p className="text-sm">
        You're ready to ask a programming-related question and this form will help guide you through the process.
        Looking to ask a non-programming question? See the topics here to find a relevant site.
      </p>
      <p className="mb-2 mt-4 text-sm font-semibold">Steps</p>
      <ul className="pl-4 text-sm">
        {STEPS.map((step, index) => (
          <li
            key={index}
            className="flex items-center before:mx-2 before:block before:h-1 before:w-1 before:rounded-full before:bg-foreground"
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructionsNotice;
