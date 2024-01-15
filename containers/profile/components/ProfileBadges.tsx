import BadgeIcon from '@/components/icons/BadgeIcon';
import { UserDataType } from '@/containers/authentication/types';
import { ProfileBlockWrap } from '@/containers/profile';

interface ComponentProps {
  className?: string;
  user: UserDataType;
}

const ProfileBadges = ({ className }: ComponentProps) => {
  return (
    <ProfileBlockWrap className={className} title="Badges">
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-1 items-center gap-x-4 rounded-md p-4">
          <BadgeIcon className="[&_path]:fill-warning-darker" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold leading-tight">8</p>
            <p>gold badges</p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-x-4 rounded-md p-4">
          <BadgeIcon className="[&_path]:fill-gray-400" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold leading-tight">25</p>
            <p>silver badges</p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-x-4 rounded-md p-4">
          <BadgeIcon className="[&_path]:fill-warning-light" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold leading-tight">168</p>
            <p>bronze badges</p>
          </div>
        </div>
      </div>
    </ProfileBlockWrap>
  );
};

export default ProfileBadges;
