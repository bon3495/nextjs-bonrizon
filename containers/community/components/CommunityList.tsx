interface CommunityListProps {
  children: React.ReactNode;
}

const CommunityList = ({ children }: CommunityListProps) => {
  return (
    <ul className="mt-10 grid grid-cols-1-card-min justify-center gap-6 min-[520px]:grid-cols-2-cards min-[1440px]:grid-cols-3">
      {children}
    </ul>
  );
};

export default CommunityList;
