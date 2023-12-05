import type { Metadata } from 'next';

import { getUsersList } from '@/actions/user';
import { baseMetadata, staticMetadata } from '@/config/meta';
import { CommunityContent, CommunityHeader } from '@/containers/community/components';

export const metadata: Metadata = {
  ...baseMetadata,
  ...staticMetadata.community,
};

const CommunityPage = async () => {
  const users = await getUsersList({});

  return (
    <>
      <CommunityHeader />
      <CommunityContent users={users} />
    </>
  );
};

export default CommunityPage;
