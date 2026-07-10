import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const avatarVariants = cva(
  "rounded-full font-semibold text-white uppercase flex items-center justify-center shrink-0",
  {
    variants: {
      color: {
        default: "bg-sunset-gradient",
      },
      size: {
        default: "size-10.5 text-[15px]",
        lg: "size-14 text-xl",
        sm: "size-8 text-caption",
        xs: "size-6 text-[10px]",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  },
);

interface AvatarProps extends ComponentProps<"div"> {
  username: string;
}

export const Avatar = ({
  color,
  size,
  className,
  username,
  ...props
}: AvatarProps & VariantProps<typeof avatarVariants>) => {
  return (
    <div className={avatarVariants({ color, size, className })} {...props}>
      {username.slice(0, 2)}
    </div>
  );
};
