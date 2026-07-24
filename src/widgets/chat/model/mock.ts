import type { Message } from "@/entities/message";

const ME = "me";
const OTHER = "other";
const ROOM = "room-1";

export const MOCK_MESSAGES: Message[] = [
  {
    id: "14",
    ciphertext: "Sunset picnic later? The sky already looks unreal",
    nonce: "",
    sender_id: OTHER,
    room_id: ROOM,
    created_at: "2026-07-21T11:58:00Z",
  },
  {
    id: "15",
    ciphertext: "Yes!! Meet you at the pier at 7?",
    nonce: "",
    sender_id: ME,
    room_id: ROOM,
    created_at: "2026-07-21T12:00:00Z",
  },
  {
    id: "16",
    ciphertext: "I'll bring the blanket and snacks 🧺",
    nonce: "",
    sender_id: ME,
    room_id: ROOM,
    created_at: "2026-07-21T12:01:00Z",
  },
  {
    id: "17",
    ciphertext: "golden hour at the pier 🌅 perfect. bringing my camera",
    nonce: "",
    sender_id: OTHER,
    room_id: ROOM,
    created_at: "2026-07-21T12:04:00Z",
  },
  {
    id: "18",
    ciphertext: "Read message",
    nonce: "",
    sender_id: ME,
    room_id: ROOM,
    created_at: "2026-07-21T12:04:00Z",
  },
  {
    id: "19",
    ciphertext: "Unread message",
    nonce: "",
    sender_id: ME,
    room_id: ROOM,
    created_at: "2026-07-21T12:05:00Z",
  },
];
