import { TagCard, TagsList } from '@/containers/tags/components';
import { TagItemType } from '@/containers/tags/types';

interface TagsContentProps {
  tagsList: TagItemType[];
}

const TagsContent = ({ tagsList }: TagsContentProps) => {
  return (
    <TagsList>
      {tagsList.map((tag) => (
        <TagCard tag={tag} key={tag.name} />
      ))}
    </TagsList>
  );
};

export default TagsContent;
