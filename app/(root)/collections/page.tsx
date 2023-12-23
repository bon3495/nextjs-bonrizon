import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { getCollections } from '@/actions/collections';
import { baseMetadata, staticMetadata } from '@/config/meta';
import { ROUTES_NAME } from '@/constants/routes';
import { CollectionsHeader } from '@/containers/collections/components';
import { HomeContent } from '@/containers/home/components';

export const metadata: Metadata = {
  ...baseMetadata,
  ...staticMetadata.savesQuestions,
};

const CollectionsPage = async () => {
  const { userId } = auth();

  if (!userId) redirect(ROUTES_NAME.SIGN_IN);

  const collections = await getCollections({
    clerkId: userId,
  });

  return (
    <>
      <CollectionsHeader />
      <HomeContent questions={collections} />
    </>
  );
};

export default CollectionsPage;
