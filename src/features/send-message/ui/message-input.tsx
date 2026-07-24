"use client";

import { SentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { type SyntheticEvent, useState } from "react";
import { sendMessage } from "@/shared/api";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface MessageInputProps {
  roomId: string;
}

export const MessageInput = ({ roomId }: MessageInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;

    // TODO crypto: text -> base64 ciphertext + nonce
    const ok = sendMessage(roomId, text, "");
    if (ok) setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
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
          type="submit"
          variant={value.trim().length ? "default" : "disabled"}
          size="icon-lg"
          className="z-10 absolute right-4 top-1/2 -translate-y-1/2"
        >
          <HugeiconsIcon icon={SentIcon} size={16} className="text-white" />
        </Button>
      </div>
    </form>
  );
};
