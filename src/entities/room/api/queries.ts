import { useMutation, useQuery } from "@tanstack/react-query";
import { roomService } from "@/entities/room/api/room.service";

export const useGetRooms = () =>
  useQuery({
    queryKey: ["rooms"],
    queryFn: roomService.getRooms,
  });

export const useGetRoom = (id: string) =>
  useQuery({
    queryKey: ["rooms", id],
    queryFn: () => roomService.getRoom(id),
  });

export const useOpenDm = (userId: string) =>
  useMutation({
    mutationKey: ["dm", userId],
    mutationFn: () => roomService.openDm(userId),
  });
