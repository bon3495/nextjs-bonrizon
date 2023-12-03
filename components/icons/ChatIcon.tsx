import { IconProps } from '@/components/icons';

const ChatIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.302 17.292C18.302 17.292 18.379 17.237 18.502 17.143C20.345 15.718 21.5 13.653 21.5 11.354C21.5 7.068 17.47 3.59 12.502 3.59C7.532 3.59 3.5 7.068 3.5 11.354C3.5 15.642 7.53 19 12.5 19C12.924 19 13.62 18.972 14.588 18.916C15.85 19.736 17.692 20.409 19.304 20.409C19.803 20.409 20.038 19.999 19.718 19.581C19.232 18.985 18.562 18.03 18.302 17.291V17.292Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.302 17.292C18.302 17.292 18.379 17.237 18.502 17.143C20.345 15.718 21.5 13.653 21.5 11.354C21.5 7.068 17.47 3.59 12.502 3.59C7.532 3.59 3.5 7.068 3.5 11.354C3.5 15.642 7.53 19 12.5 19C12.924 19 13.62 18.972 14.588 18.916C15.85 19.736 17.692 20.409 19.304 20.409C19.803 20.409 20.038 19.999 19.718 19.581C19.232 18.985 18.562 18.03 18.302 17.291V17.292Z"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.5C10.5 16 14.5 16 17 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.5C10.5 16 14.5 16 17 13.5"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatIcon;
