"use client";

import { Slot } from "@radix-ui/react-slot";
import { AnimatePresence, motion } from "framer-motion";
import {
  type ComponentProps,
  type PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/shared/helpers";
import { useClickOutside } from "@/shared/hooks";
import { DropdownContext, useDropdown } from "./dropdown-context";

interface DropdownProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Dropdown = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: PropsWithChildren<DropdownProps>) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const rootRef = useRef<HTMLDivElement>(null);
  useClickOutside(rootRef, () => setOpen(false));

  const value = useMemo(
    () => ({ open, setOpen, toggle: () => setOpen(!open) }),
    [open, setOpen],
  );

  return (
    <DropdownContext.Provider value={value}>
      <div ref={rootRef} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

interface DropdownTriggerProps extends ComponentProps<"button"> {
  asChild?: boolean;
}

export const DropdownTrigger = ({
  asChild,
  className,
  onClick,
  ...props
}: DropdownTriggerProps) => {
  const { toggle } = useDropdown();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type={asChild ? undefined : "button"}
      onClick={(e) => {
        onClick?.(e);
        toggle();
      }}
      className={cn(className)}
      {...props}
    />
  );
};

export const DropdownContent = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const { open } = useDropdown();

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.11 }}
          className={cn(
            "absolute left-0 top-full z-50 mt-2 min-w-40 bg-white shadow-popover rounded-user-card p-1 space-y-1",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface DropdownItemProps extends ComponentProps<"div"> {
  asChild?: boolean;
}

export const DropdownItem = ({
  asChild,
  className,
  onClick,
  ...props
}: DropdownItemProps) => {
  const { setOpen } = useDropdown();
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      onClick={(e) => {
        onClick?.(e);
        setOpen(false);
      }}
      className={cn("", className)}
      {...props}
    />
  );
};
