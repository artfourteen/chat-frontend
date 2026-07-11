"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { UserAvatar } from "@/entities/user";
import { cn } from "@/shared/helpers";

type OpenChatButtonProps = {
  id: string;
  username: string;
};

export const OpenDMButton = ({ id, username }: OpenChatButtonProps) => {
  const params = useParams();
  const roomId = params.roomId as string;

  return (
    <Link
      href={`/r/${id}`}
      className={cn(
        "flex items-center hover:bg-gray-100 py-2.5 px-3 rounded-user-card transition-all gap-3",
        { "bg-primary-50 hover:bg-primary-50": roomId === id },
      )}
    >
      <UserAvatar username={username} size="lg" />

      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="text-foreground font-semibold text-subhead leading-heading">
            @{username}
          </span>
          <span className="text-primary-500 font-semibold text-timestamp">
            12:04
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-muted-foreground text-caption leading-heading">
            golden hour at the pier 🌅
          </span>
          <span className="bg-sunset-gradient text-white font-bold w-4.5 h-4.5 px-4 text-caption rounded-pill flex items-center justify-center">
            2
          </span>
        </div>
      </div>
    </Link>
  );
};
