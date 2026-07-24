import { authCookies } from "@/shared/api/cookies";

const WS_URL = `${process.env.NEXT_PUBLIC_API_URL!.replace("http", "ws")}/api/v1/ws`;

const MAX_BACKOFF = 30_000;

let socket: WebSocket | null = null;

export const connectWS = (onFrame: (frame: any) => void) => {
  let closedByClient = false;
  let attempt = 0;
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null;

  const open = () => {
    const ws = new WebSocket(WS_URL);
    socket = ws;

    ws.onopen = () => {
      attempt = 0;
      ws.send(JSON.stringify({ type: "auth", token: authCookies.getAccess() }));
    };

    ws.onmessage = (e) => onFrame(JSON.parse(e.data));

    ws.onerror = (err) => console.error("[WS ERROR]", err);

    ws.onclose = () => {
      if (socket === ws) socket = null;
      if (closedByClient) return;

      const delay = Math.min(1000 * 2 ** attempt, MAX_BACKOFF);
      attempt += 1;
      reconnectTimer = setTimeout(open, delay);
    };
  };

  open();

  return {
    close: () => {
      closedByClient = true;
      if (reconnectTimer) clearTimeout(reconnectTimer);
      socket?.close();
    },
  };
};

export const sendMessage = (
  roomId: string,
  ciphertext: string,
  nonce: string,
) => {
  if (socket?.readyState !== WebSocket.OPEN) {
    console.warn("[WS] not open, drop");
    return false;
  }
  socket.send(
    JSON.stringify({ type: "message", room_id: roomId, ciphertext, nonce }),
  );
  return true;
};
