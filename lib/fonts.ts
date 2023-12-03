import { Inter, Signika_Negative as SignikaNegative } from 'next/font/google';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fontSignikaNegative = SignikaNegative({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-signikaNegative',
});
