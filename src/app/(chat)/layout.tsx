import type { PropsWithChildren } from "react";
import { Sidebar } from "@/widgets/sidebar";

export default function ChatLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-dvh flex items-start">
      <Sidebar />
      <main className="flex-1 bg-primary-50 h-dvh">{children}</main>
    </div>
  );
}
