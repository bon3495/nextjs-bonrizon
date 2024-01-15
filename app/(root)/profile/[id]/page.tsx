import { getUserInfo } from '@/actions/user';
import {
  ProfileAbout,
  ProfileBadges,
  ProfileHeader,
  ProfileStats,
  ProfileTabsAnswersQuestions,
  ProfileTopTags,
} from '@/containers/profile';

interface ComponentProps {
  params: {
    id: string;
  };
}

const ProfileDetails = async ({ params }: ComponentProps) => {
  const userInfo = await getUserInfo({ userId: params.id });

  return (
    <div className="flex flex-col">
      <ProfileHeader
        user={userInfo.user}
        totalAnswers={userInfo.totalAnswers}
        totalQuestions={userInfo.totalQuestions}
      />
      {/* keyword: layout masonry */}
      <div className="mt-6 grid grid-cols-10 gap-6">
        <div className="col-span-3 grid h-fit gap-6">
          <ProfileStats
            user={userInfo.user}
            totalAnswers={userInfo.totalAnswers}
            totalQuestions={userInfo.totalQuestions}
          />

          <ProfileTopTags user={userInfo.user} />
        </div>
        <div className="col-span-7 grid h-fit gap-6">
          <ProfileAbout className="h-auto" user={userInfo.user} />

          <ProfileBadges className="h-auto" user={userInfo.user} />
          <ProfileTabsAnswersQuestions user={userInfo.user} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
