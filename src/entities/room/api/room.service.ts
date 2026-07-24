import type { Room } from "@/entities/room/model/types";
import { api } from "@/shared/api";

class RoomService {
  async getRooms() {
    const res = await api.get<Room[]>("/rooms");
    return res.data;
  }

  async getRoom(id: string) {
    const res = await api.get<Room>(`/rooms/${id}`);
    return res.data;
  }

  async openDm(userId: string) {
    const res = await api.post(`/rooms`, { user_id: userId });
    return res.data;
  }
}
export const roomService = new RoomService();
