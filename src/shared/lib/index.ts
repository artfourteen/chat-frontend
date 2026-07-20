import axios from "axios";
import clsx, { type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const toastError = (err: unknown) =>
  toast.error(
    axios.isAxiosError(err)
      ? (err.response?.data.error ?? err.message)
      : "Unknown error! Please try again later.",
    {
      style: {
        // textTransform: "capitalize",
      },
    },
  );
