"use client";

import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { useGetMe } from "@/entities/user";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const skip = pathname === "/login" || pathname === "/register";
  useGetMe(!skip);
  return children;
};
