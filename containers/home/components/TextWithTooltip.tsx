import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface TextWithTooltipProps {
  content: string;
  children: React.ReactNode;
  Icon?: JSX.Element;
  isHideTooltip?: boolean;
}

const TextWithTooltip = ({ content, children, Icon, isHideTooltip }: TextWithTooltipProps) => {
  return (
    <>
      {Icon && Icon}
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipPortal>
            <TooltipContent
              side="top"
              align="center"
              className={cn('max-w-[300px]', {
                hidden: isHideTooltip,
              })}
            >
              <span>{content}</span>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TextWithTooltip;
