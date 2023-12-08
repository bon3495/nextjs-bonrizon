import { RootLayoutProps } from '@/types/global';

interface TagsListProps extends RootLayoutProps {}

const TagsList = ({ children }: TagsListProps) => {
  return <ul className="mt-10 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">{children}</ul>;
};

export default TagsList;
