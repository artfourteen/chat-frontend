"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import type { Message } from "@/entities/message";
import { connectWS } from "@/shared/api";

export const useChatSocket = () => {
  const qc = useQueryClient();

  useEffect(() => {
    const ws = connectWS((frame) => {
      if (frame.type !== "message") return;

      const msg: Message = {
        id: frame.id,
        room_id: frame.room_id,
        sender_id: frame.sender_id,
        ciphertext: frame.ciphertext,
        nonce: frame.nonce,
        created_at: frame.created_at,
      };

      qc.setQueryData<Message[]>(["message", msg.room_id], (old) => {
        if (!old) return [msg];
        if (old.some((m) => m.id === msg.id)) return old;
        return [...old, msg];
      });
    });

    return () => ws.close();
  }, [qc]);
};
