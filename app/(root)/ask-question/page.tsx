import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { getUserById } from '@/actions/user';
import { baseMetadata, staticMetadata } from '@/config/meta';
import { ROUTES_NAME } from '@/constants/routes';
import { FormContainer, InstructionsNotice } from '@/containers/ask-question/components';

export const metadata: Metadata = {
  ...baseMetadata,
  ...staticMetadata.askQuestion,
};

const AskQuestionPage = async () => {
  const { userId } = auth();

  if (!userId) redirect(ROUTES_NAME.SIGN_IN);

  const user = await getUserById({ userId });

  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-3xl font-bold">Ask a public question</h1>
      <InstructionsNotice />
      <FormContainer mongoUserId={`${user._id}`} />
    </div>
  );
};

export default AskQuestionPage;
