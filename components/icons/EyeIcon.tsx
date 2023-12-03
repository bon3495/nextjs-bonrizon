import { IconProps } from '@/components/icons';

const EyeIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <circle
        cx="12.5"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12.5"
        cy="12"
        r="2"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 12C19.833 16.667 16.5 19 12.5 19C8.5 19 5.167 16.667 2.5 12C5.167 7.333 8.5 5 12.5 5C16.5 5 19.833 7.333 22.5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 12C19.833 16.667 16.5 19 12.5 19C8.5 19 5.167 16.667 2.5 12C5.167 7.333 8.5 5 12.5 5C16.5 5 19.833 7.333 22.5 12"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
