import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type OverflowWrapType = 
  | OverflowWrapValue
  | Partial<Record<ResponsiveBreakpoint, OverflowWrapValue>>;

export type OverflowWrapValue = keyof typeof OVERFLOW_WRAP_CLASS_MAP;

export const OVERFLOW_WRAP_CLASS_MAP = {
  "words": "break-words",
  "xs:words": "xs:break-words",
  "sm:words": "sm:break-words",
  "md:words": "md:break-words",
  "lg:words": "lg:break-words",
  "xl:words": "xl:break-words",
  "2xl:words": "2xl:break-words",
  "hover:words": "hover:break-words",
  "focus:words": "focus:break-words",
  "active:words": "active:break-words",
  "disabled:words": "disabled:break-words",
  "group-hover:words": "group-hover:break-words",
  "group:words": "group:break-words",
  "first:words": "first:break-words",
  "last:words": "last:break-words",
  "odd:words": "odd:break-words",
  "even:words": "even:break-words",
  "dark:words": "dark:break-words",
} as const;