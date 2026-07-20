import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/shared/lib";

const badgeVariants = cva("flex items-center w-fit rounded-pill text-pretty", {
  variants: {
    variant: {
      default: "bg-accent-100 text-accent-600!",
      secondary: "bg-white/90 text-muted-foreground! font-semibold",
    },
    size: {
      default: "py-1.25 px-3 text-caption",
      sm: "py-0.75 px-4 text-caption",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const Badge = ({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof badgeVariants>) => {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
};
