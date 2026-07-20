"use client";

import {
  Search01Icon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, useState } from "react";
import { cn } from "@/shared/lib";

const inputVariants = cva(
  "w-full text-foreground text-body leading-heading outline-none transition-all",
  {
    variants: {
      variant: {
        default:
          "py-2.75 px-3.75 rounded-input border border-black/10 focus:border-primary-500 ring-0 focus:ring-3 ring-primary-100",
        search:
          "text-body bg-accent-50 px-2.5 py-4 pl-10 rounded-pill text-foreground placeholder:text-muted-foreground focus:border-primary-500 ring-0 focus:ring-3 ring-primary-100",
        message:
          "px-5 py-5 bg-white text-foreground placeholder-text-muted-foreground border-t border-black/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InputProps extends ComponentProps<"input"> {
  parentClassName?: string;
}

export const Input = ({
  className,
  parentClassName,
  variant = "default",
  type,
  ...props
}: InputProps & VariantProps<typeof inputVariants>) => {
  const [isShown, setIsShown] = useState(false);

  switch (variant) {
    case "default":
      if (type === "password") {
        return (
          <div
            className={cn(
              "relative transition-all hover:scale-102 active:scale-100 duration-100",
              parentClassName,
            )}
          >
            <input
              type={isShown ? "text" : "password"}
              className={inputVariants({ variant, className })}
              {...props}
            />
            <button
              type="button"
              className="text-foreground absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setIsShown((prev) => !prev)}
            >
              {isShown ? (
                <HugeiconsIcon size={16} icon={ViewOffIcon} />
              ) : (
                <HugeiconsIcon size={16} icon={ViewIcon} />
              )}
            </button>
          </div>
        );
      }
      return (
        <input
          type={type}
          className={cn(
            "duration-100 hover:scale-102 active:scale-100",
            inputVariants({ variant, className }),
          )}
          {...props}
        />
      );
    case "search":
      return (
        <div
          className={cn(
            "relative transition-all hover:scale-102 active:scale-100 duration-100",
            parentClassName,
          )}
        >
          <HugeiconsIcon
            icon={Search01Icon}
            size={16}
            className="z-10 pointer-events-none text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2"
          />
          <input
            type={type}
            className={inputVariants({ variant, className })}
            {...props}
          />
        </div>
      );
    case "message":
      return (
        <input
          type={type}
          className={inputVariants({ variant, className })}
          {...props}
        />
      );
  }
};
