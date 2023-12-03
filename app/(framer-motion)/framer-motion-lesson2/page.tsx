'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import MailIcon from '@/components/icons/MailIcon';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const titles = [
  ["Apple's newest iPhone is here", 'Watch our July event'],
  ["Nintendo's Newsletter for July", 'Introducing Strike, a 5-on-5 soccer game'],
  ['Your funds have been processed', 'See your latest deposit online'],
  ['This Week in Sports', 'The finals are heating up'],
  ['Changelog update', 'Edge subroutines and more'],
  ['React Hawaii is here!', 'Time for fun in the sun'],
];

const FramerMotionLessonTwo = () => {
  const [messages, setMessages] = useState(Array.from(Array(10).keys()));

  function addMessage() {
    const newId = (messages.at(-1) || 0) + 1;
    setMessages((messages) => [...messages, newId]);
  }

  function archiveMessage(mid: number) {
    setMessages((messages) => messages.filter((id) => id !== mid));
  }

  return (
    <div className="flex h-[800px] flex-col items-center justify-center overscroll-y-contain text-slate-600">
      <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex w-[45%] flex-col bg-slate-50 py-2">
          <div className="border-b px-5">
            <div className="flex justify-between py-2 text-right">
              <Button variant="ghost" onClick={addMessage} className="rounded-full" size="icon">
                <MailIcon className="h-5 w-5 " />
              </Button>
            </div>
          </div>
          <ScrollArea className="flex-1 p-8">
            <ul>
              <AnimatePresence initial={false}>
                {[...messages].reverse().map((mid) => (
                  <motion.li
                    key={mid}
                    className="relative"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                    }}
                    transition={{
                      opacity: {
                        duration: 0.2,
                      },
                      // type: 'spring',
                      // bounce: 0.5,
                      // duration: 1,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                  >
                    <div className="py-0.5">
                      <button
                        onClick={() => archiveMessage(mid)}
                        className="block w-full cursor-pointer truncate rounded p-3 text-left hover:bg-slate-200"
                      >
                        <p className="truncate text-sm font-medium text-slate-500">{titles[mid % titles.length][0]}</p>
                        <p className="truncate text-xs text-slate-400">{titles[mid % titles.length][1]}</p>
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </ScrollArea>
        </div>
        <ScrollArea className="flex-1 p-8">
          <h1 className="h-8 rounded bg-slate-100 text-2xl font-bold" />
          <div className="mt-8 space-y-6">
            {Array.from(Array(10).keys()).map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-100" />
                <p className="h-4 rounded bg-slate-100" />
                <p className="h-4 w-4/6 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default FramerMotionLessonTwo;
