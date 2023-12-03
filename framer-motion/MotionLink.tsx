import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = React.forwardRef<React.ElementRef<typeof Link>, React.ComponentPropsWithoutRef<typeof Link>>(
  (props, ref) => <Link ref={ref} {...props} />,
);

MotionLink.displayName = 'MotionLink';

export default motion(MotionLink);
