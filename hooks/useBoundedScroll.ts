import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const useBoundedScroll = (bounds: number) => {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(scrollYBounded, [0, bounds], [0, 1]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    const diff = latest - previous;
    const newScrollYBounded = scrollYBounded.get() + diff;

    scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
  });

  return { scrollYBounded, scrollYBoundedProgress };
};

export default useBoundedScroll;
