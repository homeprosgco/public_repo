import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type WordBreakType = 
  | WordBreakValue
  | Partial<Record<ResponsiveBreakpoint, WordBreakValue>>;

export type WordBreakValue = keyof typeof WORD_BREAK_CLASS_MAP;

export const WORD_BREAK_CLASS_MAP = {
  "all": "break-all",
  "xs:all": "xs:break-all",
  "sm:all": "sm:break-all",
  "md:all": "md:break-all",
  "lg:all": "lg:break-all",
  "xl:all": "xl:break-all",
  "2xl:all": "2xl:break-all",
  "hover:all": "hover:break-all",
  "focus:all": "focus:break-all",
  "active:all": "active:break-all",
  "disabled:all": "disabled:break-all",
  "group-hover:all": "group-hover:break-all",
  "group:all": "group:break-all",
  "first:all": "first:break-all",
  "last:all": "last:break-all",
  "odd:all": "odd:break-all",
  "even:all": "even:break-all",
  "dark:all": "dark:break-all",
  "keep": "break-keep",
  "xs:keep": "xs:break-keep",
  "sm:keep": "sm:break-keep",
  "md:keep": "md:break-keep",
  "lg:keep": "lg:break-keep",
  "xl:keep": "xl:break-keep",
  "2xl:keep": "2xl:break-keep",
  "hover:keep": "hover:break-keep",
  "focus:keep": "focus:break-keep",
  "active:keep": "active:break-keep",
  "disabled:keep": "disabled:break-keep",
  "group-hover:keep": "group-hover:break-keep",
  "group:keep": "group:break-keep",
  "first:keep": "first:break-keep",
  "last:keep": "last:break-keep",
  "odd:keep": "odd:break-keep",
  "even:keep": "even:break-keep",
  "dark:keep": "dark:break-keep",
} as const;