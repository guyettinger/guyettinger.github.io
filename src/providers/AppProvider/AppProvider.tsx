'use client';
import { AppStyleProvider } from '@/providers/AppStyleProvider/AppStyleProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStyleProvider>{children}</AppStyleProvider>
    </QueryClientProvider>
  );
};
