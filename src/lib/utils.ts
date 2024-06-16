import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

//  TODO: relocate this to a different directory
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
