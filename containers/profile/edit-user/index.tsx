import { UserInfoType } from '@/containers/authentication/types';

interface ComponentProps {
  user: UserInfoType;
}

const EditProfile = ({ user }: ComponentProps) => {
  console.log(user);

  return <div>EditProfile</div>;
};

export default EditProfile;
