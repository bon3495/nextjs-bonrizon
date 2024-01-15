import { UserDataType } from '@/containers/authentication/types';
import { ProfileBlockWrap } from '@/containers/profile';

interface ComponentProps {
  className?: string;
  user: UserDataType;
}

const ProfileAbout = ({ className }: ComponentProps) => {
  return (
    <ProfileBlockWrap className={className} title="About">
      <p>
        I'm a Necromancer. Necromancers are not very good people. Very good people are those who listen on one or more
        keywords (tags) and respond if know. But necromancers don't listen (watch).
      </p>
    </ProfileBlockWrap>
  );
};

export default ProfileAbout;
