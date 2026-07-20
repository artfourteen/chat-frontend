"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { AuthProvider } from "@/providers/auth-provider";
import { SettingsModalProvider } from "@/providers/settings-modal-provider";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SettingsModalProvider>
          <Toaster richColors position="top-right" />
          {children}
        </SettingsModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
