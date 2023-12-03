import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';
import { LogIn, UserCircle2 } from 'lucide-react';

import { SidebarContent, SidebarWrapper, TooltipButton } from '@/components/shared/sidebar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ROUTES_NAME } from '@/constants/routes';

const LeftSidebar = () => {
  return (
    <SidebarWrapper className="left-0 justify-between border-r dark:border-background-lighter max-sm:hidden">
      <ScrollArea className="flex flex-1 flex-col">
        <SidebarContent isAllowExpanded isShowTooltip />
      </ScrollArea>

      <SignedOut>
        <section className="mt-auto flex flex-col gap-y-4 px-6 pt-10">
          <TooltipButton content="Sign In">
            <Link href={ROUTES_NAME.SIGN_IN}>
              <Button className="w-full" variant="secondary">
                <UserCircle2 className="lg:hidden" />
                <span className="sm:hidden lg:inline-block">Sign In</span>
              </Button>
            </Link>
          </TooltipButton>
          <TooltipButton content="Sign Up">
            <Link href={ROUTES_NAME.SIGN_UP}>
              <Button className="w-full" variant="outline">
                <LogIn className="lg:hidden" />
                <span className="sm:hidden lg:inline-block">Sign Up</span>
              </Button>
            </Link>
          </TooltipButton>
        </section>
      </SignedOut>
    </SidebarWrapper>
  );
};

export default LeftSidebar;
