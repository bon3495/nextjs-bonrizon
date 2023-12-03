import { cn } from '@/lib/utils';

interface SidebarWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SidebarWrapper = ({ children, className }: SidebarWrapperProps) => {
  return (
    <aside
      className={cn(
        'sticky top-[80px] flex h-[calc(100vh-80px)] w-[105px] flex-col overflow-y-hidden transition-all duration-200 dark:shadow-none lg:w-[260px]',
        className,
      )}
    >
      <div className="flex flex-1 flex-col overflow-hidden pb-6 pt-12">{children}</div>
    </aside>
  );
};

export default SidebarWrapper;
