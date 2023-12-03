import { cn } from '@/lib/utils';

const BACKGROUND = [
  'bg-background-darker',
  'bg-background-dark',
  'bg-background',
  'bg-background-light',
  'bg-background-lighter',
];

const ACCENT = ['bg-accent', 'bg-accent-foreground'];

const PRIMARY = [
  'bg-primary-darker',
  'bg-primary-dark',
  'bg-primary',
  'bg-primary-light',
  'bg-primary-lighter',
  'bg-primary-foreground',
];

const SECONDARY = [
  'bg-secondary-darker',
  'bg-secondary-dark',
  'bg-secondary',
  'bg-secondary-light',
  'bg-secondary-lighter',
  'bg-secondary-foreground',
];

const DESTRUCTIVE = ['bg-destructive', 'bg-destructive-foreground'];

const MUTED = ['bg-muted', 'bg-muted-foreground'];

const POPOVER = ['bg-popover', 'bg-popover-foreground'];

const CARD = ['bg-card', 'bg-card-foreground'];

const CONTRAST = [
  'bg-contrast-lower',
  'bg-contrast-low',
  'bg-contrast-medium',
  'bg-contrast-high',
  'bg-contrast-higher',
];

const WARNING = ['bg-warning-darker', 'bg-warning-dark', 'bg-warning', 'bg-warning-light', 'bg-warning-lighter'];

const SUCCESS = ['bg-success-darker', 'bg-success-dark', 'bg-success', 'bg-success-light', 'bg-success-lighter'];

const ERROR = [
  'bg-error-darker',
  'bg-error-dark',
  'bg-error',
  'bg-error-light',
  'bg-error-lighter',
  'bg-error-foreground',
];

const OTHERS = ['bg-border', 'bg-input', 'bg-ring', 'bg-foreground'];

const COLOR_PALETTES = [
  {
    list: BACKGROUND,
    title: 'BACKGROUND',
  },
  {
    list: PRIMARY,
    title: 'PRIMARY',
  },
  {
    list: SECONDARY,
    title: 'SECONDARY',
  },
  {
    list: DESTRUCTIVE,
    title: 'DESTRUCTIVE',
  },
  {
    list: MUTED,
    title: 'MUTED',
  },
  {
    list: ACCENT,
    title: 'ACCENT',
  },
  {
    list: POPOVER,
    title: 'POPOVER',
  },
  {
    list: CARD,
    title: 'CARD',
  },
  {
    list: CONTRAST,
    title: 'CONTRAST',
  },
  {
    list: WARNING,
    title: 'WARNING',
  },
  {
    list: SUCCESS,
    title: 'SUCCESS',
  },
  {
    list: ERROR,
    title: 'ERROR',
  },
  {
    list: OTHERS,
    title: 'OTHERS',
  },
];

const ColorPalettes = () => {
  return (
    <div className="flex flex-col gap-y-4 bg-white">
      {COLOR_PALETTES.map((item) => (
        <div className="flex flex-col space-y-4" key={item.title}>
          <h3 className="text-left text-base font-bold text-black">{item.title}</h3>
          <div className="grid grid-cols-5 gap-y-2">
            {item.list.map((bgColor) => {
              return (
                <div className="flex flex-col items-center justify-center gap-y-2" key={bgColor}>
                  <div className={cn('h-10 w-10 rounded-md border border-black', bgColor)} />
                  <p className="text-black">{bgColor.slice(3)}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalettes;
