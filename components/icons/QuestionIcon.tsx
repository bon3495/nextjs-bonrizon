import { IconProps } from '@/components/icons';

const QuestionIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <circle
        cx="12.5"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12.5"
        cy="12"
        r="9"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 17V17.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.5 17V17.01"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 13.5C12.4622 12.8331 12.8699 12.2215 13.5 12C14.5307 11.6058 15.2003 10.604 15.1704 9.50088C15.1404 8.39779 14.4174 7.43378 13.3668 7.09616C12.3162 6.75853 11.167 7.12085 10.5 7.99996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 13.5C12.4622 12.8331 12.8699 12.2215 13.5 12C14.5307 11.6058 15.2003 10.604 15.1704 9.50088C15.1404 8.39779 14.4174 7.43378 13.3668 7.09616C12.3162 6.75853 11.167 7.12085 10.5 7.99996"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuestionIcon;
