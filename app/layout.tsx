import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import Providers from '@/app/providers';
import { ThemeProvider } from '@/components/theme-provider';
import { baseMetadata } from '@/config/meta';
import { fontInter, fontSignikaNegative } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { RootLayoutProps } from '@/types/global';

import '@/styles/global.css';
import '@/styles/prism.css';

export const metadata: Metadata = {
  ...baseMetadata,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(fontInter.variable, fontSignikaNegative.variable)}>
      <head />
      <body className={cn('min-h-screen bg-background font-inter text-foreground antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClerkProvider
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary',
                footerActionLink: 'primary-text-gradient hover:text-primary',
              },
            }}
          >
            <Providers>{children}</Providers>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
