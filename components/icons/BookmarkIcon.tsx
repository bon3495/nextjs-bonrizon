import { IconProps } from '@/components/icons';

const BookmarkIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        d="M9.5 4H15.5C16.6046 4 17.5 4.89543 17.5 6V20L12.5 17L7.5 20V6C7.5 4.89543 8.39543 4 9.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 4H15.5C16.6046 4 17.5 4.89543 17.5 6V20L12.5 17L7.5 20V6C7.5 4.89543 8.39543 4 9.5 4"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookmarkIcon;
