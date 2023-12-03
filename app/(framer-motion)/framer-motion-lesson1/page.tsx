'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import CheckedIcon from '@/components/icons/CheckedIcon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { COLORS } from '@/constants/styles';
import { getColor } from '@/lib/helpers';
import { cn } from '@/lib/utils';

const stepVariants = {
  inactive: {
    backgroundColor: getColor(COLORS.DEFAULT.BACKGROUND),
    borderColor: getColor(COLORS.DEFAULT.CONTRAST_MEDIUM),
    color: getColor(COLORS.DEFAULT.MUTED_FOREGROUND),
  },
  active: {
    backgroundColor: getColor(COLORS.DEFAULT.BACKGROUND),
    borderColor: getColor(COLORS.PRIMARY),
    color: getColor(COLORS.PRIMARY),
  },
  complete: {
    backgroundColor: getColor(COLORS.PRIMARY),
    borderColor: getColor(COLORS.PRIMARY),
    color: getColor(COLORS.PRIMARY),
  },
};

const Page = () => {
  const [step, setStep] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent className="w-[600px] bg-background-lighter">
        <DialogHeader>
          <DialogTitle>Multiple Steps</DialogTitle>
        </DialogHeader>
        <section className="grid grid-cols-1 gap-4 py-4">
          <ul className="flex justify-between">
            <Step value={1} currentStep={step} />
            <Step value={2} currentStep={step} />
            <Step value={3} currentStep={step} />
            <Step value={4} currentStep={step} />
          </ul>

          <div className="mt-4 flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </section>
        <DialogFooter className="flex-row items-center justify-between">
          <Button
            variant="ghost"
            className="min-w-[110px]"
            disabled={step === 1}
            onClick={() => setStep((prev) => prev - 1)}
          >
            Back
          </Button>
          <Button className="min-w-[110px]" onClick={() => setStep((prev) => prev + 1)} disabled={step === 5}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Page;

const Step = ({ value, currentStep }: { currentStep: number; value: number }) => {
  const status = value === currentStep ? 'active' : currentStep < value ? 'inactive' : 'complete';

  return (
    <motion.li className={cn('relative')} animate={status}>
      <motion.span
        className="absolute inset-0 h-full w-full rounded-full bg-primary-lighter/40"
        transition={{
          duration: 0.3,
          delay: 0.2,
          type: 'tween',
          ease: 'circOut',
        }}
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
      />
      <motion.p
        initial={false}
        transition={{ duration: 0.2 }}
        variants={stepVariants}
        className={cn('relative flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg')}
      >
        {status === 'complete' ? <CheckedIcon className="text-white" /> : value}
      </motion.p>
    </motion.li>
  );
};
