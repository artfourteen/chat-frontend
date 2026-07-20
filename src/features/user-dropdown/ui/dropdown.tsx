"use client";

import {
  ArrowDown01Icon,
  LogoutSquare01Icon,
  Setting07Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { UserAvatar } from "@/entities/user";
import { LogoutHeadless } from "@/features/auth";
import { useGetMe } from "@/features/user";
import { useSettingsModal } from "@/features/user-settings/model/use-settings-modal";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/dropdown";

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useSettingsModal();
  const { data, isPending } = useGetMe();

  return (
    <Dropdown open={isOpen} onOpenChange={setIsOpen}>
      <DropdownTrigger asChild>
        <Button
          variant="outline"
          className="p-1 pr-2 h-auto shadow-md gap-1 bg-white"
        >
          <UserAvatar size="sm" username={data?.username} />
          <HugeiconsIcon
            size="16"
            icon={ArrowDown01Icon}
            className={cn("transition-all duration-100", {
              "rotate-180": isOpen,
            })}
          />
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
          <LogoutHeadless>
            <Button variant="destructive" className="w-full gap-1">
              <HugeiconsIcon
                size="16"
                strokeWidth={2.5}
                icon={LogoutSquare01Icon}
              />
              <span>Log out</span>
            </Button>
          </LogoutHeadless>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
