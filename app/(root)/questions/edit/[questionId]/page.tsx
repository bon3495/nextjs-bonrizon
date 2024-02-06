import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { getQuestionById } from '@/actions/question';
import { getUserById } from '@/actions/user';
import { ROUTES_NAME } from '@/constants/routes';
import { FormContainer, InstructionsNotice } from '@/containers/ask-question/components';

interface ComponentProps {
  params: { questionId: string };
}

const EditQuestionPage = async ({ params }: ComponentProps) => {
  const { userId } = auth();
  if (!userId) redirect(ROUTES_NAME.SIGN_IN);

  const user = await getUserById({ userId });

  const questionDetails = await getQuestionById(params.questionId);

  const questionStringify = JSON.stringify(questionDetails);

  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-bold">Edit question</h1>
      <InstructionsNotice />
      <FormContainer mongoUserId={`${user._id}`} questionStringify={questionStringify} type="EDIT_QUESTION" />
    </div>
  );
};

export default EditQuestionPage;
