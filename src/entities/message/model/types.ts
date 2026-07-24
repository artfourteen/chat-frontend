// export type MessageStatus = "sent" | "read";

export interface Message {
  id: string;
  ciphertext: string;
  nonce: string;
  sender_id: string;
  room_id: string;
  created_at: string;
}

export interface SendMessageRequest {
  room_id: string;
  ciphertext: string;
  nonce: string;
}
