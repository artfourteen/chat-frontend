import { Chatting01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";
import { cn } from "@/shared/lib";

export const Logo = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "size-12 flex items-center justify-center rounded-full text-white bg-sunset-gradient shadow-brand-glow shrink-0",
        className,
      )}
      {...props}
    >
      <HugeiconsIcon icon={Chatting01Icon} strokeWidth={2} />
    </div>
  );
};
