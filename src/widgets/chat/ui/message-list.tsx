"use client";

import { useEffect, useRef } from "react";
import { type Message, MessageBubble } from "@/entities/message";
import { useGetMe } from "@/entities/user";
import { Badge } from "@/shared/ui/badge";

interface MessageListProps {
  messages: Message[];
  username: string;
}

export const MessageList = ({ messages, username }: MessageListProps) => {
  const { data: me } = useGetMe();
  const ref = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to bottom when a new message arrives
  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  return (
    <div ref={ref} className="flex-1 min-h-0 overflow-y-auto px-8">
      <div className="flex flex-col gap-3 py-3.5 min-h-full justify-end">
        <Badge variant="secondary" size="sm" className="self-center">
          Today
        </Badge>

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            username={username}
            currentUserId={me?.id}
          />
        ))}
      </div>
    </div>
  );
};
