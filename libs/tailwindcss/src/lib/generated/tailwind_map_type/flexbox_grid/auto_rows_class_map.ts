import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type AutoRowsType = 
  | AutoRowsValue
  | Partial<Record<ResponsiveBreakpoint, AutoRowsValue>>;

export type AutoRowsValue = keyof typeof AUTO_ROWS_CLASS_MAP;

export const AUTO_ROWS_CLASS_MAP = {
  "fr": "auto-rows-fr",
  "xs:fr": "xs:auto-rows-fr",
  "sm:fr": "sm:auto-rows-fr",
  "md:fr": "md:auto-rows-fr",
  "lg:fr": "lg:auto-rows-fr",
  "xl:fr": "xl:auto-rows-fr",
  "2xl:fr": "2xl:auto-rows-fr",
  "hover:fr": "hover:auto-rows-fr",
  "focus:fr": "focus:auto-rows-fr",
  "active:fr": "active:auto-rows-fr",
  "disabled:fr": "disabled:auto-rows-fr",
  "group-hover:fr": "group-hover:auto-rows-fr",
  "group:fr": "group:auto-rows-fr",
  "first:fr": "first:auto-rows-fr",
  "last:fr": "last:auto-rows-fr",
  "odd:fr": "odd:auto-rows-fr",
  "even:fr": "even:auto-rows-fr",
  "dark:fr": "dark:auto-rows-fr",
} as const;