import { HTMLAttributes, ReactNode } from 'react';

export interface CardViewProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  iconArea?: ReactNode;
  actionArea?: ReactNode;
}
