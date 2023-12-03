'use client';

import { motion, useMotionTemplate, useTransform } from 'framer-motion';

import useBoundedScroll from '@/hooks/useBoundedScroll';

const BOUNDS = 500;

const Page = () => {
  // const { scrollY } = useScroll();
  const { scrollYBounded, scrollYBoundedProgress } = useBoundedScroll(BOUNDS);
  // const height = useMotionValue(80);
  const height = useTransform(scrollYBounded, [0, BOUNDS], [80, 50]);
  // const heightProgress = useTransform(scrollYBoundedProgress, [0, 1], [80, 50]);
  // const opacity = useMotionValue(1);
  const opacity = useTransform(scrollYBounded, [0, BOUNDS], [1, 0]);
  // const opacityProgress = useTransform(scrollYBoundedProgress, [0, 1], [1, 0]);

  // useMotionValueEvent(scrollY, 'change', (latest) => {
  //   const previous = scrollY.getPrevious();
  //   const diff = latest - previous;
  //   const newHeight = height.get() - diff;
  //   const newOpacity = opacity.get() - diff * 0.05;

  //   height.set(clamp(newHeight, 50, 80));
  //   opacity.set(clamp(newOpacity, 0, 1));
  // });

  const scale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.9]);

  const scrollYBoundedProgressThrottled = useTransform(scrollYBoundedProgress, [0, 0.5, 1], [0, 0, 1]);

  return (
    <div className="mx-auto flex w-full flex-1 flex-col bg-white text-slate-600">
      <motion.header
        style={{
          height,
          backgroundColor: useMotionTemplate`hsl(0 0% 100% / ${useTransform(
            scrollYBoundedProgressThrottled,
            [0, 1],
            [1, 0.1],
          )})`,
        }}
        className="fixed inset-x-0 flex h-20 bg-background/10 shadow backdrop-blur-md"
      >
        <div className="mx-auto flex w-full items-center justify-between px-8">
          <motion.p
            style={{
              scale,
            }}
            className="flex origin-left items-center text-xl font-semibold uppercase"
          >
            <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">The</span>
            <span className="-ml-1 text-2xl tracking-[-.075em]">Daily Bugle</span>
          </motion.p>
          <motion.nav style={{ opacity }} className="flex space-x-4 text-xs font-medium text-slate-400">
            <a href="#">News</a>
            <a href="#">Sports</a>
            <a href="#">Culture</a>
          </motion.nav>
        </div>
      </motion.header>

      <main className="px-8 pt-28">
        <h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
        <div className="mt-8 space-y-6">
          {Array.from(Array(2).keys()).map((i) => (
            <div key={i} className="space-y-2 text-sm">
              <p className="h-4 w-5/6 rounded bg-slate-200" />
              <p className="h-4 rounded bg-slate-200" />
              <p className="h-4 w-4/6 rounded bg-slate-200" />
            </div>
          ))}
          <div className="h-64 rounded bg-slate-200"></div>
          {Array.from(Array(90).keys()).map((i) => (
            <div key={i} className="space-y-2 text-sm">
              <p className="h-4 w-5/6 rounded bg-slate-200" />
              <p className="h-4 rounded bg-slate-200" />
              <p className="h-4 w-4/6 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
