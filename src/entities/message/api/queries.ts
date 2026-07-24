import { useQuery } from "@tanstack/react-query";
import { messageService } from "@/entities/message/api/message.service";

export const useGetRoomMessages = (roomId: string) =>
  useQuery({
    queryKey: ["message", roomId],
    queryFn: () => messageService.getRoomMessages(roomId),
  });
