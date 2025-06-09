import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type TableLayoutType = 
  | TableLayoutValue
  | Partial<Record<ResponsiveBreakpoint, TableLayoutValue>>;

export type TableLayoutValue = keyof typeof TABLE_LAYOUT_CLASS_MAP;

export const TABLE_LAYOUT_CLASS_MAP = {
  "auto": "table-auto",
  "xs:auto": "xs:table-auto",
  "sm:auto": "sm:table-auto",
  "md:auto": "md:table-auto",
  "lg:auto": "lg:table-auto",
  "xl:auto": "xl:table-auto",
  "2xl:auto": "2xl:table-auto",
  "hover:auto": "hover:table-auto",
  "focus:auto": "focus:table-auto",
  "active:auto": "active:table-auto",
  "disabled:auto": "disabled:table-auto",
  "group-hover:auto": "group-hover:table-auto",
  "group:auto": "group:table-auto",
  "first:auto": "first:table-auto",
  "last:auto": "last:table-auto",
  "odd:auto": "odd:table-auto",
  "even:auto": "even:table-auto",
  "dark:auto": "dark:table-auto",
  "fixed": "table-fixed",
  "xs:fixed": "xs:table-fixed",
  "sm:fixed": "sm:table-fixed",
  "md:fixed": "md:table-fixed",
  "lg:fixed": "lg:table-fixed",
  "xl:fixed": "xl:table-fixed",
  "2xl:fixed": "2xl:table-fixed",
  "hover:fixed": "hover:table-fixed",
  "focus:fixed": "focus:table-fixed",
  "active:fixed": "active:table-fixed",
  "disabled:fixed": "disabled:table-fixed",
  "group-hover:fixed": "group-hover:table-fixed",
  "group:fixed": "group:table-fixed",
  "first:fixed": "first:table-fixed",
  "last:fixed": "last:table-fixed",
  "odd:fixed": "odd:table-fixed",
  "even:fixed": "even:table-fixed",
  "dark:fixed": "dark:table-fixed",
} as const;