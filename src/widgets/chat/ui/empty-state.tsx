import { Badge } from "@/shared/ui/badge";

export const ChatEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-full gap-3 w-90">
      <div className="relative">
        <div className="-ml-18 bg-avatar-1 size-18 pt-0.5 pr-0.5 text-title flex items-center justify-center leading-heading rounded-full shrink-0">
          💬
        </div>
        <div className="absolute -left-3 z-10 top-0 bg-avatar-2 outline-3 outline-primary-50 size-18 text-title flex items-center justify-center rounded-full shrink-0">
          🌅
        </div>
      </div>

      <span className="text-center text-foreground font-bold text-heading leading-heading">
        Your conversations live here
      </span>
      <span className="text-center text-muted-foreground text-subhead leading-subhead">
        Pick a conversation from the left, or search for someone by username to
        start a new one.
      </span>

      <Badge>🔒 Every chat is end-to-end encrypted</Badge>
    </div>
  );
};
