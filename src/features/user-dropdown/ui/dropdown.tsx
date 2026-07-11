"use client";

import {
  ArrowDown01Icon,
  LogoutSquare01Icon,
  Setting07Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserAvatar } from "@/entities/user";
import { useSettingsModal } from "@/features/user-settings/model/use-settings-modal";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/dropdown";

export const UserDropdown = () => {
  const { open } = useSettingsModal();

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline" className="p-1 pr-2 h-auto shadow-md gap-1">
          <UserAvatar size="sm" username="art14" />
          <HugeiconsIcon size="16" icon={ArrowDown01Icon} />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onClick={open} asChild>
          <Button variant="ghost" className="w-full gap-1">
            <HugeiconsIcon size="16" strokeWidth={2.5} icon={Setting07Icon} />
            <span>Settings</span>
          </Button>
        </DropdownItem>
        <DropdownItem asChild>
          <Button variant="destructive" className="w-full gap-1">
            <HugeiconsIcon
              size="16"
              strokeWidth={2.5}
              icon={LogoutSquare01Icon}
            />
            <span>Log out</span>
          </Button>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
