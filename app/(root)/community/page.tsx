import type { Metadata } from 'next';

import { baseMetadata, staticMetadata } from '@/config/meta';

export const metadata: Metadata = {
  ...baseMetadata,
  ...staticMetadata.community,
};

const CommunityPage = () => {
  return <div>CommunityPage</div>;
};

export default CommunityPage;
