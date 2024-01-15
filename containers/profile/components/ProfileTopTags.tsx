import TagLink from '@/components/shared/TagLink';
import { ROUTES_NAME } from '@/constants/routes';
import { UserDataType } from '@/containers/authentication/types';
import { ProfileBlockWrap } from '@/containers/profile';
import { DUMMY_TOP_TAGS } from '@/mocks/profile';

interface ComponentProps {
  className?: string;
  user: UserDataType;
}

const ProfileTopTags = ({ className }: ComponentProps) => {
  return (
    <ProfileBlockWrap className={className} title="Top Tags">
      <ul className="flex flex-col gap-y-4">
        {DUMMY_TOP_TAGS.map((tag) => {
          return (
            <li key={tag.id} className="flex items-center justify-between">
              <TagLink isShowTooltip content={tag.description} href={`${ROUTES_NAME.TAGS}/${tag.id}`}>
                {tag.tagName}
              </TagLink>

              <p className="flex items-center text-sm">
                <strong className="mr-2 text-base font-semibold">{tag.total}</strong>
                posts
              </p>
            </li>
          );
        })}
      </ul>
    </ProfileBlockWrap>
  );
};

export default ProfileTopTags;
