'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

import { TooltipButton } from '@/components/shared/sidebar';
import { buttonVariants } from '@/components/ui/button';
import { SIDEBAR_LINKS } from '@/constants/global';
import { ROUTES_NAME } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { SidebarLink } from '@/types/global';

interface SidebarContentProps extends React.HTMLAttributes<HTMLUListElement> {
  isAllowExpanded?: boolean;
  sidebarLinks?: SidebarLink[];
  isShowTooltip?: boolean;
}

const SidebarContent = ({
  className,
  isAllowExpanded,
  sidebarLinks = SIDEBAR_LINKS,
  isShowTooltip,
  ...props
}: SidebarContentProps) => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <ul className={cn('flex flex-col items-start gap-y-4 px-6', className)} {...props}>
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || item.route === pathname;

        let route = item.route;
        if (route === ROUTES_NAME.PROFILE) {
          route = userId ? `${route}/${userId}` : ROUTES_NAME.HOME;
        }

        return (
          <li key={item.route} className="w-full">
            <TooltipButton content={item.label} isShowTooltip={isShowTooltip}>
              <Link
                href={route}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className:
                      'h-auto w-full justify-start gap-x-2 px-4 py-3 text-base font-semibold hover:bg-background-darker dark:hover:bg-background-light',
                  }),
                  {
                    'bg-primary-gradient text-white hover:text-white': isActive,
                  },
                )}
              >
                <item.Icon />
                <p
                  className={cn({
                    'hidden lg:inline-block': isAllowExpanded,
                  })}
                >
                  {item.label}
                </p>
              </Link>
            </TooltipButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarContent;
