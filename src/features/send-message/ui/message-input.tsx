"use client";

import { SentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const MessageInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full">
        <Input
          variant="message"
          placeholder="Write a message..."
          className="text-subhead pr-16"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />

        <Button
          variant={value.length ? "default" : "disabled"}
          size="icon-lg"
          className="z-10 absolute right-4 top-1/2 -translate-y-1/2"
        >
          <HugeiconsIcon icon={SentIcon} size={16} className="text-white" />
        </Button>
      </div>
    </div>
  );
};
