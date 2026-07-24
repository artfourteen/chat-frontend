import type { Message } from "@/entities/message/model/types";
import { UserAvatar } from "@/entities/user";

interface MessageBubbleProps {
  message: Message;
  username: string;
  currentUserId?: string;
}

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export const MessageBubble = ({
  message,
  username,
  currentUserId,
}: MessageBubbleProps) => {
  const outgoing = message.sender_id === currentUserId;

  if (outgoing) {
    return (
      <div className="flex items-end gap-3 self-end">
        <div className="flex items-end gap-2 bg-sunset-gradient w-fit rounded-4xl rounded-br-lg px-5 py-3 shadow-popover">
          <span className="text-white leading-body">{message.ciphertext}</span>
          <span className="text-timestamp text-white">
            {formatTime(message.created_at)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2 bg-white w-fit rounded-4xl rounded-bl-lg px-5 py-3 shadow-popover">
      <span className="text-foreground leading-body">{message.ciphertext}</span>
      <span className="text-timestamp text-muted-foreground">
        {formatTime(message.created_at)}
      </span>
    </div>
  );
};
