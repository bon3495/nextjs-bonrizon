'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

const HomeNotFound = () => {
  return (
    <section className={cn('mt-10 flex flex-1 flex-col items-center', {})}>
      <Image
        src="/assets/illustrations/404.svg"
        alt="No result illustration"
        width={350}
        height={300}
        className="object-cover"
      />

      <div className="flex max-w-md flex-col items-center">
        <h2 className="py-5 text-2xl font-bold">There are no question to show</h2>
        <p className="text-center text-sm">
          Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next
          big thing others learn from. Get involved! 💡
        </p>
      </div>
    </section>
  );
};

export default HomeNotFound;
