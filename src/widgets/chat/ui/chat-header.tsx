import { UserAvatar } from "@/entities/user";
import { Badge } from "@/shared/ui/badge";

interface ChatHeaderProps {
  username: string;
  online?: boolean;
}

export const ChatHeader = ({ username, online }: ChatHeaderProps) => {
  return (
    <div className="shrink-0 bg-white py-3.5 px-6 flex items-center justify-between border-b border-black/5">
      <div className="flex items-center gap-3">
        <UserAvatar size="lg" username={username} />
        <div className="flex flex-col">
          <span className="font-bold leading-heading text-foreground">
            @{username}
          </span>
          {online && (
            <span className="text-caption font-semibold text-success">
              online
            </span>
          )}
        </div>
      </div>

      <Badge>🔒 End-to-end encrypted</Badge>
    </div>
  );
};
