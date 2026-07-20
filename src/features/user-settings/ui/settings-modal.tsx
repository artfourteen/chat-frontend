"use client";

import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "framer-motion";
import { UserAvatar } from "@/entities/user";
import { useGetMe } from "@/features/user";
import { useSettingsModal } from "@/features/user-settings/model/use-settings-modal";
import { UpdateProfileForm } from "@/features/user-settings/ui/update-profile-form";
import { Button } from "@/shared/ui/button";

interface SettingsModalProps {
  open: boolean;
}

export const SettingsModal = ({ open = true }: SettingsModalProps) => {
  const { data } = useGetMe();
  const { close } = useSettingsModal();

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="z-30 absolute top-0 left-0 w-full h-dvh backdrop-blur-xs flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="rounded-card bg-white py-7 px-7.5 w-110 flex flex-col gap-3 shadow-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <UserAvatar size="lg" username={data?.username} />
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

            <UpdateProfileForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
