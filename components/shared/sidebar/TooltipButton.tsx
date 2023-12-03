import { ButtonProps } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface IconButtonProps extends ButtonProps {
  content?: string;
  isShowTooltip?: boolean;
}

const TooltipButton = ({ children, content, isShowTooltip }: IconButtonProps) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        {isShowTooltip && (
          <TooltipPortal>
            <TooltipContent side="right" align="start" className="lg:hidden">
              <p>{content}</p>
            </TooltipContent>
          </TooltipPortal>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipButton;
