import { cn } from '@/lib/utils';
import { RootLayoutProps } from '@/types/global';

interface ComponentProps extends RootLayoutProps {
  className?: string;
  title?: string;
}

const ProfileBlockWrap = ({ title, className, children }: ComponentProps) => {
  return (
    <section className={cn('h-auto rounded-lg bg-background-light p-6 shadow-card-light dark:shadow-card', className)}>
      {title && <h3 className="mb-4 text-base font-semibold">{title}</h3>}
      {children}
    </section>
  );
};

export default ProfileBlockWrap;
