interface CommunityListProps {
  children: React.ReactNode;
}

const CommunityList = ({ children }: CommunityListProps) => {
  return <ul className="mt-10 grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3">{children}</ul>;
};

export default CommunityList;
