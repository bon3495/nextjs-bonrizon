import { motion } from 'framer-motion';

import { IconProps } from '@/components/icons';

const CheckedIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      {...props}
    >
      <motion.path
        d="M5.5 12L10.5 17L20.5 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, color: 'transparent' }}
        animate={{
          pathLength: 1,
          color: 'currentColor',
        }}
        transition={{ delay: 0.2, type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />
    </svg>
  );
};

export default CheckedIcon;
