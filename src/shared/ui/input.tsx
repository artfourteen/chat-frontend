"use client";

import { ViewIcon, ViewOffIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, useState } from "react";

const inputVariants = cva(
  "w-full text-foreground py-2.75 px-3.75 rounded-input text-body leading-heading border border-black/10 outline-none focus:border-primary-500 ring-0 focus:ring-3 ring-primary-100 transition-all",
  {
    variants: {
      variant: {
        default: "",
        search: "",
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

  if (type === "password") {
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
};
