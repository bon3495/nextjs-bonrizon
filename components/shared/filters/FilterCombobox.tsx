'use client';

import { useState } from 'react';
import { Check, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { OptionProps } from '@/types/global';

interface FilterComboboxProps {
  filters: OptionProps[];
  hasSearch?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
}

function FilterCombobox({ filters, hasSearch, triggerClassName, contentClassName }: FilterComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'hidden h-10 justify-center p-1 font-normal data-[state=open]:bg-background-dark dark:border-border data-[state=open]:dark:bg-background-lighter max-lg:flex max-lg:w-10',
            triggerClassName,
          )}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-[160px] p-0', contentClassName)} align="end">
        <Command>
          {hasSearch && <CommandInput placeholder="Search option..." />}
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {filters.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check className={cn('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')} />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default FilterCombobox;
