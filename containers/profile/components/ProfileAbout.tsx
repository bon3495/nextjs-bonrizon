import { UserDataType } from '@/containers/authentication/types';
import { ProfileBlockWrap } from '@/containers/profile';

interface ComponentProps {
  className?: string;
  user: UserDataType;
}

const ProfileAbout = ({ className, user }: ComponentProps) => {
  return (
    <ProfileBlockWrap className={className} title="About">
      <p>{user.bio}</p>
    </ProfileBlockWrap>
  );
};

export default ProfileAbout;
