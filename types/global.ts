import React from 'react';
import type { LucideIcon } from 'lucide-react';

export type RootLayoutProps = {
  children: React.ReactNode;
};

export interface SidebarLink {
  Icon: LucideIcon;
  route: string;
  label: string;
}

export interface OptionProps {
  label: string
  value: string
}