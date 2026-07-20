import type { ComponentProps } from "react";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

interface LabelInputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
}

export const LabelInput = ({ id, label, error, ...props }: LabelInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1 w-full">
        <Label htmlFor={id}>{label}</Label>
        <Input variant="default" id={id} {...props} />
      </div>
      {error && <p className="text-danger text-xs">{error}</p>}
    </div>
  );
};
