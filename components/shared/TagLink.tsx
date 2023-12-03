import { UrlObject } from 'url';
import Link from 'next/link';

import { badgeVariants } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { RootLayoutProps } from '@/types/global';

interface TagLinkProps extends RootLayoutProps {
  isShowTooltip?: boolean;
  content?: React.ReactNode;
  href: string | UrlObject;
}

const TagLink = ({ children, content, isShowTooltip, href }: TagLinkProps & typeof Link.defaultProps) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} className={cn(badgeVariants({ variant: 'tag-secondary', className: 'w-fit' }))}>
            <span className="inline-block">{children}</span>
          </Link>
        </TooltipTrigger>
        {isShowTooltip && (
          <TooltipPortal>
            <TooltipContent side="top" align="center" className="max-w-[300px]">
              <p>{content}</p>
            </TooltipContent>
          </TooltipPortal>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default TagLink;
