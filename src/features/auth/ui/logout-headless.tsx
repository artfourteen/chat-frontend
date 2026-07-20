"use client";

import { Slot } from "@radix-ui/react-slot";
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { authCookies } from "@/shared/api";

export const LogoutHeadless = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const handleLogout = () => {
    authCookies.clear();
    router.push("/login");
  };

  return <Slot onClick={handleLogout}>{children}</Slot>;
};
