import { Tick01Icon, TickDouble01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserAvatar } from "@/entities/user";
import type { Message } from "@/entities/message/model/types";

interface MessageBubbleProps {
  message: Message;
  username: string;
}

export const MessageBubble = ({ message, username }: MessageBubbleProps) => {
  if (message.outgoing) {
    return (
      <div className="flex items-end gap-3 self-end">
        <div className="flex items-end gap-2 bg-sunset-gradient w-fit rounded-4xl rounded-br-lg px-5 py-3 shadow-popover">
          <span className="text-white leading-body">{message.content}</span>
          <div className="flex items-end">
            <span className="text-timestamp text-white">
              {message.timestamp}
            </span>
            <HugeiconsIcon
              size="16"
              icon={message.status === "read" ? TickDouble01Icon : Tick01Icon}
              className="text-white"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-3">
      <UserAvatar username={username} />
      <div className="flex items-end gap-2 bg-white w-fit rounded-4xl rounded-bl-lg px-5 py-3 shadow-popover">
        <span className="text-foreground leading-body">{message.content}</span>
        <span className="text-timestamp text-muted-foreground">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};
