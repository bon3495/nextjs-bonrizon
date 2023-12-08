import { Metadata } from 'next';

import { getTagsByFilters } from '@/actions/tag';
import { baseMetadata, staticMetadata } from '@/config/meta';
import { TagsContent, TagsHeader } from '@/containers/tags/components';

export const metadata: Metadata = {
  ...baseMetadata,
  ...staticMetadata.tags,
};

const TagsPage = async () => {
  const tagsList = await getTagsByFilters({});

  return (
    <>
      <TagsHeader />
      <TagsContent tagsList={tagsList} />
    </>
  );
};

export default TagsPage;
