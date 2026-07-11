"use client";

import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserAvatar } from "@/entities/user";
import { useSettingsModal } from "@/features/user-settings/model/use-settings-modal";
import { Button } from "@/shared/ui/button";

export const UserSettingsButton = () => {
  const { open } = useSettingsModal();

  return (
    <Button
      variant="outline"
      className="p-1 pr-2 h-auto shadow-md gap-1"
      onClick={open}
    >
      <UserAvatar size="sm" username="art14" />
      <HugeiconsIcon size="16" icon={ArrowDown01Icon} />
    </Button>
  );
};
