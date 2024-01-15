import { IconProps } from '@/components/icons';

const MapPinIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <circle
        cx="12.5"
        cy="11"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12.5"
        cy="11"
        r="3"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.157 16.657L13.914 20.9C13.1331 21.68 11.8679 21.68 11.087 20.9L6.843 16.657C3.71892 13.5327 3.71901 8.46747 6.84319 5.34334C9.96738 2.21921 15.0326 2.21921 18.1568 5.34334C21.281 8.46747 21.2811 13.5327 18.157 16.657V16.657Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.157 16.657L13.914 20.9C13.1331 21.68 11.8679 21.68 11.087 20.9L6.843 16.657C3.71892 13.5327 3.71901 8.46747 6.84319 5.34334C9.96738 2.21921 15.0326 2.21921 18.1568 5.34334C21.281 8.46747 21.2811 13.5327 18.157 16.657V16.657Z"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MapPinIcon;
