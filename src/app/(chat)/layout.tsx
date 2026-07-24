"use client";

import type { PropsWithChildren } from "react";
import { useChatSocket } from "@/shared/hooks";
import { Sidebar } from "@/widgets/sidebar";

export default function ChatLayout({ children }: PropsWithChildren) {
  useChatSocket();

  return (
    <div className="h-dvh flex items-start">
      <Sidebar />
      <main className="flex-1 bg-primary-50 h-dvh">{children}</main>
    </div>
  );
}
