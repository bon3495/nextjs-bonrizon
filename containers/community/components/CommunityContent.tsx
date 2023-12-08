import { UserInfoType } from '@/containers/authentication/types';
import { CommunityCard, CommunityList, CommunityNoUser } from '@/containers/community/components';

interface CommunityContentProps {
  users: UserInfoType[];
}

const CommunityContent = ({ users }: CommunityContentProps) => {
  return users.length > 0 ? (
    <CommunityList>
      {users.map((user) => (
        // @ts-expect-error Server Component
        <CommunityCard key={user.clerkId} user={user} />
      ))}
    </CommunityList>
  ) : (
    <CommunityNoUser />
  );
};

export default CommunityContent;
