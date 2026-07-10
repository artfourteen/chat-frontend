"use client";

import {
  Search01Icon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, useState } from "react";

const inputVariants = cva(
  "w-full text-foreground text-body leading-heading outline-none focus:border-primary-500 ring-0 focus:ring-3 ring-primary-100 transition-all",
  {
    variants: {
      variant: {
        default: "py-2.75 px-3.75 rounded-input border border-black/10",
        search:
          "text-body bg-accent-50 px-2.5 py-4 pl-10 rounded-pill text-foreground placeholder:text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const Input = ({
  className,
  variant,
  type,
  ...props
}: ComponentProps<"input"> & VariantProps<typeof inputVariants>) => {
  const [isShown, setIsShown] = useState(false);

  switch (variant) {
    case "default":
      if (variant === "default" && type === "password") {
        return (
          <div className="relative">
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
          className={inputVariants({ variant, className })}
          {...props}
        />
      );
    case "search":
      return (
        <div className="relative">
          <HugeiconsIcon
            icon={Search01Icon}
            size={16}
            className="text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2"
          />
          <input
            type={type}
            className={inputVariants({ variant, className })}
            {...props}
          />
        </div>
      );
  }
};
