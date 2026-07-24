import type { Message } from "@/entities/message";
import { api } from "@/shared/api";

class MessageService {
  async getRoomMessages(roomId: string) {
    const res = await api.get<Message[]>(`/messages/room/${roomId}`);
    return res.data.slice().reverse();
  }
}
export const messageService = new MessageService();
