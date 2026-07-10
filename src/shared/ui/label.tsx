import type { ComponentProps } from "react";
import { cn } from "@/shared/helpers";

export const Label = ({ className, ...props }: ComponentProps<"label">) => {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: shared component has no access to outer input
    <label
      className={cn(
        "text-muted-foreground! text-caption font-semibold leading-heading",
        className,
      )}
      {...props}
    />
  );
};
