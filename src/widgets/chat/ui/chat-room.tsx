import { useParams } from "next/navigation";
import { useGetRoomMessages } from "@/entities/message";
import { useGetRoom } from "@/entities/room";
import { MessageInput } from "@/features/send-message";
import { ChatHeader } from "./chat-header";
import { MessageList } from "./message-list";

export const ChatRoom = () => {
  const params = useParams();
  const roomId = params.roomId as string;
  const { data: roomData, isPending: isRoomPending } = useGetRoom(roomId);
  const { data: messagesData, isPending: isMessagesPending } =
    useGetRoomMessages(roomId);

  return (
    <main className="flex flex-col h-dvh">
      {isRoomPending || isMessagesPending ? (
        "Loading..."
      ) : !roomData ? (
        "Room not found"
      ) : !messagesData ? (
        "no messages"
      ) : (
        <>
          <ChatHeader username={roomData.username} />
          <MessageList messages={messagesData} username={roomData.username} />
        </>
      )}
      <MessageInput roomId={roomId} />
    </main>
  );
};
