'use client';

import { useState } from 'react';

import TrashIcon from '@/components/icons/TrashIcon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ComponentProps {
  title: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  tooltipText?: string;
  isPending?: boolean;
  onDelete?: () => void;
}

const ProfileRemoveItem = ({ title, children, footer, tooltipText, isPending, onDelete }: ComponentProps) => {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Dialog open={open} onOpenChange={handleToggleDialog}>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 rounded-full p-0" onClick={(e) => e.stopPropagation()}>
                <TrashIcon className="h-5 w-5" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent side="top" align="center" className="max-w-[300px]">
              <span>{tooltipText}</span>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="w-[600px] border-0 bg-background-dark">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter className="flex-row items-center justify-center gap-x-4">
          {footer || (
            <>
              <Button
                variant="ghost"
                className="min-w-[110px] border-0"
                onClick={handleToggleDialog}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button variant="destructive" className="min-w-[110px]" onClick={onDelete} disabled={isPending}>
                Delete
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileRemoveItem;
