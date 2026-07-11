"use client";

import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "framer-motion";
import { UserAvatar } from "@/entities/user";
import { useSettingsModal } from "@/features/user-settings/model/use-settings-modal";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { LabelInput } from "@/shared/ui/label-input";

interface SettingsModalProps {
  open: boolean;
}

export const SettingsModal = ({ open = true }: SettingsModalProps) => {
  const { close } = useSettingsModal();

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="z-30 absolute top-0 left-0 w-full h-dvh bg-black/30 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={close}
        >
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.1 }}
            className="rounded-card bg-white py-7 px-7.5 w-110 flex flex-col gap-3 shadow-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <UserAvatar size="lg" username="art14" />
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-bold text-heading leading-heading">
                    Your profile
                  </span>
                  <span className="text-muted-foreground text-caption leading-heading">
                    Joined March 2026
                  </span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="self-start hover:rotate-90 hover:scale-105"
                onClick={close}
              >
                <HugeiconsIcon icon={Cancel01Icon} size="16" />
              </Button>
            </div>

            <LabelInput
              id="username"
              label="Username"
              autoComplete="username"
              defaultValue="art14"
            />
            <LabelInput
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              defaultValue="armat2005vip@gmail.com"
            />

            <Badge className="rounded-input!">
              🔒 Your messages are end-to-end encrypted on this device. No one,
              not even us can read them.
            </Badge>

            <div className="flex items-center gap-2">
              <Button size="lg" className="flex-1">
                Save changes
              </Button>
              <Button size="lg" variant="destructive" className="w-1/3">
                Log out
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
