"use client";

import { createContext } from "react";

export interface SettingsModalContextValue {
  open: () => void;
  close: () => void;
}

export const SettingsModalContext =
  createContext<SettingsModalContextValue | null>(null);
