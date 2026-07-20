export type MessageStatus = "sent" | "read";

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  outgoing: boolean;
  status?: MessageStatus;
}
