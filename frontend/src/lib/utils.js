import { clsx } from "clsx";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};
