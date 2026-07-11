import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { getAvatarColor } from "@/entities/user/lib/helper";
import type { AvatarColor } from "@/entities/user/model/types";

const avatarColorVariants: Record<AvatarColor, string> = {
  "1": "bg-avatar-1",
  "2": "bg-avatar-2",
  "3": "bg-avatar-3",
  "4": "bg-avatar-4",
  "5": "bg-avatar-5",
  "6": "bg-avatar-6",
  "7": "bg-avatar-7",
  "8": "bg-avatar-8",
};

const userAvatarVariants = cva(
  "rounded-full font-semibold text-white uppercase flex items-center justify-center shrink-0",
  {
    variants: {
      color: avatarColorVariants,
      size: {
        default: "size-10.5 text-[15px]",
        lg: "size-14 text-xl",
        sm: "size-8 text-caption",
        xs: "size-6 text-[10px]",
      },
    },
    defaultVariants: {
      color: "1",
      size: "default",
    },
  },
);

interface UserAvatarProps extends ComponentProps<"div"> {
  username: string;
}

export const UserAvatar = ({
  color,
  size,
  className,
  username,
  ...props
}: UserAvatarProps & VariantProps<typeof userAvatarVariants>) => {
  const avatarColor = color ?? getAvatarColor(username);

  return (
    <div
      className={userAvatarVariants({
        color: avatarColor,
        size,
        className,
      })}
      {...props}
    >
      {username.slice(0, 2)}
    </div>
  );
};
