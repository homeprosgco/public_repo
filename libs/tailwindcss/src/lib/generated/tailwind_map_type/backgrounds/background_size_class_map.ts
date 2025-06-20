import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BackgroundSizeType = 
  | BackgroundSizeValue
  | Partial<Record<ResponsiveBreakpoint, BackgroundSizeValue>>;

export type BackgroundSizeValue = keyof typeof BACKGROUND_SIZE_CLASS_MAP;

export const BACKGROUND_SIZE_CLASS_MAP = {
  "auto": "bg-auto",
  "xs:auto": "xs:bg-auto",
  "sm:auto": "sm:bg-auto",
  "md:auto": "md:bg-auto",
  "lg:auto": "lg:bg-auto",
  "xl:auto": "xl:bg-auto",
  "2xl:auto": "2xl:bg-auto",
  "hover:auto": "hover:bg-auto",
  "focus:auto": "focus:bg-auto",
  "active:auto": "active:bg-auto",
  "disabled:auto": "disabled:bg-auto",
  "group-hover:auto": "group-hover:bg-auto",
  "group:auto": "group:bg-auto",
  "first:auto": "first:bg-auto",
  "last:auto": "last:bg-auto",
  "odd:auto": "odd:bg-auto",
  "even:auto": "even:bg-auto",
  "dark:auto": "dark:bg-auto",
  "cover": "bg-cover",
  "xs:cover": "xs:bg-cover",
  "sm:cover": "sm:bg-cover",
  "md:cover": "md:bg-cover",
  "lg:cover": "lg:bg-cover",
  "xl:cover": "xl:bg-cover",
  "2xl:cover": "2xl:bg-cover",
  "hover:cover": "hover:bg-cover",
  "focus:cover": "focus:bg-cover",
  "active:cover": "active:bg-cover",
  "disabled:cover": "disabled:bg-cover",
  "group-hover:cover": "group-hover:bg-cover",
  "group:cover": "group:bg-cover",
  "first:cover": "first:bg-cover",
  "last:cover": "last:bg-cover",
  "odd:cover": "odd:bg-cover",
  "even:cover": "even:bg-cover",
  "dark:cover": "dark:bg-cover",
  "contain": "bg-contain",
  "xs:contain": "xs:bg-contain",
  "sm:contain": "sm:bg-contain",
  "md:contain": "md:bg-contain",
  "lg:contain": "lg:bg-contain",
  "xl:contain": "xl:bg-contain",
  "2xl:contain": "2xl:bg-contain",
  "hover:contain": "hover:bg-contain",
  "focus:contain": "focus:bg-contain",
  "active:contain": "active:bg-contain",
  "disabled:contain": "disabled:bg-contain",
  "group-hover:contain": "group-hover:bg-contain",
  "group:contain": "group:bg-contain",
  "first:contain": "first:bg-contain",
  "last:contain": "last:bg-contain",
  "odd:contain": "odd:bg-contain",
  "even:contain": "even:bg-contain",
  "dark:contain": "dark:bg-contain",
} as const;