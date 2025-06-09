import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type AutoColsType = 
  | AutoColsValue
  | Partial<Record<ResponsiveBreakpoint, AutoColsValue>>;

export type AutoColsValue = keyof typeof AUTO_COLS_CLASS_MAP;

export const AUTO_COLS_CLASS_MAP = {
  "fr": "auto-cols-fr",
  "xs:fr": "xs:auto-cols-fr",
  "sm:fr": "sm:auto-cols-fr",
  "md:fr": "md:auto-cols-fr",
  "lg:fr": "lg:auto-cols-fr",
  "xl:fr": "xl:auto-cols-fr",
  "2xl:fr": "2xl:auto-cols-fr",
  "hover:fr": "hover:auto-cols-fr",
  "focus:fr": "focus:auto-cols-fr",
  "active:fr": "active:auto-cols-fr",
  "disabled:fr": "disabled:auto-cols-fr",
  "group-hover:fr": "group-hover:auto-cols-fr",
  "group:fr": "group:auto-cols-fr",
  "first:fr": "first:auto-cols-fr",
  "last:fr": "last:auto-cols-fr",
  "odd:fr": "odd:auto-cols-fr",
  "even:fr": "even:auto-cols-fr",
  "dark:fr": "dark:auto-cols-fr",
} as const;