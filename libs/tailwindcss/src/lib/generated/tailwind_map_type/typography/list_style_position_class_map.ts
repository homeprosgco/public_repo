import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ListStylePositionType = 
  | ListStylePositionValue
  | Partial<Record<ResponsiveBreakpoint, ListStylePositionValue>>;

export type ListStylePositionValue = keyof typeof LIST_STYLE_POSITION_CLASS_MAP;

export const LIST_STYLE_POSITION_CLASS_MAP = {
  "inside": "list-inside",
  "xs:inside": "xs:list-inside",
  "sm:inside": "sm:list-inside",
  "md:inside": "md:list-inside",
  "lg:inside": "lg:list-inside",
  "xl:inside": "xl:list-inside",
  "2xl:inside": "2xl:list-inside",
  "hover:inside": "hover:list-inside",
  "focus:inside": "focus:list-inside",
  "active:inside": "active:list-inside",
  "disabled:inside": "disabled:list-inside",
  "group-hover:inside": "group-hover:list-inside",
  "group:inside": "group:list-inside",
  "first:inside": "first:list-inside",
  "last:inside": "last:list-inside",
  "odd:inside": "odd:list-inside",
  "even:inside": "even:list-inside",
  "dark:inside": "dark:list-inside",
  "outside": "list-outside",
  "xs:outside": "xs:list-outside",
  "sm:outside": "sm:list-outside",
  "md:outside": "md:list-outside",
  "lg:outside": "lg:list-outside",
  "xl:outside": "xl:list-outside",
  "2xl:outside": "2xl:list-outside",
  "hover:outside": "hover:list-outside",
  "focus:outside": "focus:list-outside",
  "active:outside": "active:list-outside",
  "disabled:outside": "disabled:list-outside",
  "group-hover:outside": "group-hover:list-outside",
  "group:outside": "group:list-outside",
  "first:outside": "first:list-outside",
  "last:outside": "last:list-outside",
  "odd:outside": "odd:list-outside",
  "even:outside": "even:list-outside",
  "dark:outside": "dark:list-outside",
} as const;