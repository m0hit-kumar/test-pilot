import { user } from "@/store/selectors/user";
import { type ClassValue, clsx } from "clsx";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GetUserID = (): string => {
  return useSelector(user).userId;
};
