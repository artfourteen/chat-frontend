import { MessageInput } from "@/features/send-message";
import { MOCK_MESSAGES } from "@/widgets/chat/model/mock";
import { ChatHeader } from "./chat-header";
import { MessageList } from "./message-list";

interface ChatRoomProps {
  username: string;
}

export const ChatRoom = ({ username }: ChatRoomProps) => {
  return (
    <main className="flex flex-col h-dvh">
      <ChatHeader username={username} online />
      <MessageList messages={MOCK_MESSAGES} username={username} />
      <MessageInput />
    </main>
  );
};
