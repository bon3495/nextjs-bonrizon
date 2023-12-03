import Header from '@/components/shared/Header';
import { LeftSidebar, RightSidebar } from '@/components/shared/sidebar';
import { RootLayoutProps } from '@/types/global';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="container relative flex flex-1">
        <LeftSidebar />
        <main className="flex min-h-screen flex-1 flex-col px-6 pb-12 pt-[130px]">{children}</main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default RootLayout;
