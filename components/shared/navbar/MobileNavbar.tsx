import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';
import { MenuIcon } from 'lucide-react';

import { LoginLink } from '@/components/shared/navbar';
import { SidebarContent } from '@/components/shared/sidebar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ROUTES_NAME } from '@/constants/routes';

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="hidden justify-center max-sm:flex" variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col bg-background dark:bg-background-darker">
        <SheetHeader>
          <SheetTitle>
            <LoginLink isMobile href={ROUTES_NAME.HOME} />
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-1 flex-col">
          <SidebarContent className="mt-10" />
        </ScrollArea>
        <SignedOut>
          <SheetFooter className="mt-auto flex flex-col gap-y-4 pt-6">
            <SheetClose asChild>
              <Link href={ROUTES_NAME.SIGN_IN}>
                <Button className="w-full" variant="secondary">
                  Sign In
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES_NAME.SIGN_UP}>
                <Button className="w-full" variant="outline">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </SheetFooter>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
