"use client";

import { useSettingsModal } from "@/features/user-settings/model/use-settings-modal";
import { Avatar } from "@/shared/ui/avatar";

export const UserSettingsButton = () => {
  const { open } = useSettingsModal();

  return (
    <Avatar
      username="art14"
      className="border-2 border-white shadow-md cursor-pointer hover:opacity-90 transition-all"
      onClick={open}
    />
  );
};
