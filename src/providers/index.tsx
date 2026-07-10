"use client";

import type { PropsWithChildren } from "react";
import { SettingsModalProvider } from "@/providers/settings-modal-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return <SettingsModalProvider>{children}</SettingsModalProvider>;
};
