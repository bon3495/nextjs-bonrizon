import { getUserInfo } from '@/actions/user';
import EditProfile from '@/containers/profile/edit-user';

interface ComponentProps {
  params: { id: string };
}

const ProfileEditUser = async ({ params }: ComponentProps) => {
  const userInfo = await getUserInfo({ userId: params.id });

  return (
    <section className="flex flex-1 flex-col">
      <h2 className="mb-4 text-3xl font-semibold">Profile Details</h2>
      <EditProfile user={JSON.stringify(userInfo.user)} clerkId={params.id} />
    </section>
  );
};

export default ProfileEditUser;
