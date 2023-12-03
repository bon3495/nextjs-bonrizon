import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import UnderLineIcon from '@/components/icons/UnderLineIcon';
import { ROUTES_NAME } from '@/constants/routes';
import { cn } from '@/lib/utils';

interface LoginLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  isMobile?: boolean;
}

const LoginLink = ({ href = ROUTES_NAME.HOME, className, isMobile, ...props }: LoginLinkProps) => {
  return (
    <Link href={href} className={cn('relative flex w-fit origin-left items-center gap-2', className)} {...props}>
      <Image src="/assets/images/logo.png" alt="Logo Bonrizon" width={32} height={32} />
      <p
        className={cn('flex items-center font-spaceGrotesk text-3xl font-bold tracking-tighter', {
          'max-sm:hidden': !isMobile,
        })}
      >
        <span className="text-accent-foreground">Bon</span>
        <span className="text-primary">rizon</span>
      </p>

      <UnderLineIcon
        className={cn('absolute -bottom-2 right-0 w-[110px] scale-[1.1]', { 'max-sm:hidden': !isMobile })}
      />
    </Link>
  );
};

export default LoginLink;
