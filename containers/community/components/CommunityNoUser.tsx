import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { ROUTES_NAME } from '@/constants/routes';

const CommunityNoUser = () => {
  return (
    <section className="mt-6 flex flex-1 flex-col items-center">
      <Image
        src="/assets/illustrations/500.svg"
        alt="No result illustration"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[360px] object-cover"
      />

      <p className="mb-2 mt-4">No users matched your search.</p>
      <Link href={ROUTES_NAME.SIGN_IN} className={buttonVariants({ variant: 'link' })}>
        Join to be the first!
      </Link>
    </section>
  );
};

export default CommunityNoUser;
