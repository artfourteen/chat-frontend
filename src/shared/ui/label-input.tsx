import type {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from "react";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

interface LabelInputProps {
  label: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: HTMLInputAutoCompleteAttribute;
}

export const LabelInput = ({
  label,
  id,
  type,
  autoComplete,
}: LabelInputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} autoComplete={autoComplete} />
    </div>
  );
};
