import type { Message } from "@/entities/message";

export const MOCK_MESSAGES: Message[] = [
  {
    id: "14",
    content: "Sunset picnic later? The sky already looks unreal",
    timestamp: "11:58",
    outgoing: false,
  },
  {
    id: "15",
    content: "Yes!! Meet you at the pier at 7?",
    timestamp: "12:00",
    outgoing: true,
    status: "read",
  },
  {
    id: "16",
    content: "I'll bring the blanket and snacks 🧺",
    timestamp: "12:01",
    outgoing: true,
    status: "read",
  },
  {
    id: "17",
    content: "golden hour at the pier 🌅 perfect. bringing my camera",
    timestamp: "12:04",
    outgoing: false,
  },
  {
    id: "18",
    content: "Read message",
    timestamp: "12:04",
    outgoing: true,
    status: "read",
  },
  {
    id: "19",
    content: "Unread message",
    timestamp: "12:05",
    outgoing: true,
    status: "sent",
  },
];
