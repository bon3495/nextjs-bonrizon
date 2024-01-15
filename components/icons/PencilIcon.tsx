import { IconProps } from '@/components/icons';

const PencilIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        d="M4.5 20.0001H8.5L19 9.50006C20.1046 8.39549 20.1046 6.60463 19 5.50006C17.8954 4.39549 16.1046 4.39549 15 5.50006L4.5 16.0001V20.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 20.0001H8.5L19 9.50006C20.1046 8.39549 20.1046 6.60463 19 5.50006C17.8954 4.39549 16.1046 4.39549 15 5.50006L4.5 16.0001V20.0001"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 6.5L18 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14 6.5L18 10.5"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
