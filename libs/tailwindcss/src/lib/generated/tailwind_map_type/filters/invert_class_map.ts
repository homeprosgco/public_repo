import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type InvertType = 
  | InvertValue
  | Partial<Record<ResponsiveBreakpoint, InvertValue>>;

export type InvertValue = keyof typeof INVERT_CLASS_MAP;

export const INVERT_CLASS_MAP = {
  "0": "invert-0",
  "xs:0": "xs:invert-0",
  "sm:0": "sm:invert-0",
  "md:0": "md:invert-0",
  "lg:0": "lg:invert-0",
  "xl:0": "xl:invert-0",
  "2xl:0": "2xl:invert-0",
  "hover:0": "hover:invert-0",
  "focus:0": "focus:invert-0",
  "active:0": "active:invert-0",
  "disabled:0": "disabled:invert-0",
  "group-hover:0": "group-hover:invert-0",
  "group:0": "group:invert-0",
  "first:0": "first:invert-0",
  "last:0": "last:invert-0",
  "odd:0": "odd:invert-0",
  "even:0": "even:invert-0",
  "dark:0": "dark:invert-0",
  "invert": "invert",
  "xs:invert": "xs:invert",
  "sm:invert": "sm:invert",
  "md:invert": "md:invert",
  "lg:invert": "lg:invert",
  "xl:invert": "xl:invert",
  "2xl:invert": "2xl:invert",
  "hover:invert": "hover:invert",
  "focus:invert": "focus:invert",
  "active:invert": "active:invert",
  "disabled:invert": "disabled:invert",
  "group-hover:invert": "group-hover:invert",
  "group:invert": "group:invert",
  "first:invert": "first:invert",
  "last:invert": "last:invert",
  "odd:invert": "odd:invert",
  "even:invert": "even:invert",
  "dark:invert": "dark:invert",
} as const;