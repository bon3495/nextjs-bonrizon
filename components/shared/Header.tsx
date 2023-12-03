'use client';

import { motion, useTransform } from 'framer-motion';

import { Navbar } from '@/components/shared/navbar';
import useBoundedScroll from '@/hooks/useBoundedScroll';

const BOUNDS = 200;
const Header = () => {
  const { scrollYBoundedProgress } = useBoundedScroll(BOUNDS);

  const height = useTransform(scrollYBoundedProgress, [0, 1], [80, 80]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 h-header border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-background-lighter"
      style={{ height }}
    >
      <Navbar />
    </motion.header>
  );
};

export default Header;
