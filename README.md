# Chat — Frontend

Real-time chat web client. Direct messages over REST + WebSocket, with auth, user profiles, and end-to-end-encrypted message frames (ciphertext + nonce sent over the socket).

## Tech Stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 4** for styling
- **TanStack Query** for server state / data fetching
- **Axios** REST client, native **WebSocket** for live messages
- **React Hook Form** + **Zod** for forms & validation
- **Framer Motion** animations, **Sonner** toasts, **Base UI** / **Radix** primitives
- **Biome** for lint & format
- **pnpm** package manager

## Architecture

Follows **Feature-Sliced Design** (FSD). Source lives in `src/`:

| Layer | Purpose |
|-------|---------|
| `app/` | Next.js routes, layouts, route groups (`(auth)`, `(chat)`) |
| `providers/` | Global providers (query client, auth, modals) |
| `widgets/` | Composite UI blocks (`sidebar`, `chat`, `auth`) |
| `features/` | User actions (`auth`, `send-message`, `open-dm`, `user-settings`, `user-dropdown`) |
| `entities/` | Domain models & API (`user`, `room`, `message`) |
| `shared/` | Reusable UI, hooks, API client, WebSocket, cookies |

## Prerequisites

- **Node.js** 20+
- **pnpm** (`npm install -g pnpm`)
- Running backend API reachable at `NEXT_PUBLIC_API_URL` (exposes `/api/v1` REST + `/api/v1/ws` WebSocket)

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create `.env.local` in the project root:

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:8080
   ```

   Point it at your backend. The WebSocket URL is derived automatically (`http` swapped for `ws`).

## Run

Development server (hot reload) at [http://localhost:3000](http://localhost:3000):

```bash
pnpm dev
```

Production build & serve:

```bash
pnpm build
pnpm start
```

## Scripts

| Command | Action |
|---------|--------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |

## How It Works

- **Auth** — login / register store an access token in cookies. Middleware (`src/proxy.ts`) redirects unauthenticated users to `/login` and logged-in users away from auth routes. A `401` clears the session and bounces to login.
- **Messaging** — `shared/api/ws.ts` opens a WebSocket, authenticates with the token, and auto-reconnects with exponential backoff. Messages are sent as `{ ciphertext, nonce }` frames per room.
