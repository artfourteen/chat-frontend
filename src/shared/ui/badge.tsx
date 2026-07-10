import type { ComponentProps } from "react";
import { cn } from "@/shared/helpers";

export const Badge = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex items-center w-fit py-1.25 px-3 rounded-pill bg-accent-100 text-accent-600! text-caption text-pretty",
        className,
      )}
      {...props}
    ></div>
  );
};
