import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/components/theme-provider';
import { baseMetadata } from '@/config/meta';
import { fontInter, fontSignikaNegative } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { RootLayoutProps } from '@/types/global';

import '@/styles/global.css';

export const metadata: Metadata = {
  ...baseMetadata,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-inter text-foreground antialiased',
          fontInter.variable,
          fontSignikaNegative.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClerkProvider
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary',
                footerActionLink: 'primary-text-gradient hover:text-primary',
              },
            }}
          >
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
