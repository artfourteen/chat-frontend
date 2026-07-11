import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/shared/helpers";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-pill hover:opacity-90 transition-all active:opacity-100 font-semibold hover:scale-102 active:scale-100",
  {
    variants: {
      variant: {
        default:
          "text-white [&>svg]:text-white shadow-brand-glow bg-sunset-gradient",
        secondary:
          "text-accent-600 [&>svg]:text-accent-600 bg-accent-100 hover:opacity-80",
        outline:
          "text-muted-foreground [&>svg]:text-muted-foreground border-1 border-black/10 hover:opacity-80",
        ghost:
          "text-muted-foreground [&>svg]:text-muted-foreground hover:bg-gray-100",
        destructive:
          "text-danger [&>svg]:text-danger bg-danger/10 hover:opacity-80",
        disabled:
          "cursor-not-allowed text-muted-foreground [&>svg]:text-muted-foreground bg-accent-100 opacity-60 hover:opacity-60 active:opacity-60",
      },
      size: {
        default: "text-[13px] h-8.5 py-2.25 px-4.5",
        sm: "text-xs h-6.75 py-1.5 px-3.5",
        lg: "text-sm h-10.5 py-3 px-6",
        icon: "[&>svg]:size-4 h-8.5 w-8.5",
        "icon-sm": "[&>svg]:size-3 h-6.75 w-6.75",
        "icon-lg": "[&>svg]:size-5 h-10.5 w-10.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps extends ComponentProps<"button"> {
  asChild?: boolean;
}

export const Button = ({
  className,
  type,
  asChild,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps & VariantProps<typeof buttonVariants>) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
