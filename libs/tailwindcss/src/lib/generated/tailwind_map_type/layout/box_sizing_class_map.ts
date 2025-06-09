import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BoxSizingType = 
  | BoxSizingValue
  | Partial<Record<ResponsiveBreakpoint, BoxSizingValue>>;

export type BoxSizingValue = keyof typeof BOX_SIZING_CLASS_MAP;

export const BOX_SIZING_CLASS_MAP = {
  "border": "box-border",
  "xs:border": "xs:box-border",
  "sm:border": "sm:box-border",
  "md:border": "md:box-border",
  "lg:border": "lg:box-border",
  "xl:border": "xl:box-border",
  "2xl:border": "2xl:box-border",
  "hover:border": "hover:box-border",
  "focus:border": "focus:box-border",
  "active:border": "active:box-border",
  "disabled:border": "disabled:box-border",
  "group-hover:border": "group-hover:box-border",
  "group:border": "group:box-border",
  "first:border": "first:box-border",
  "last:border": "last:box-border",
  "odd:border": "odd:box-border",
  "even:border": "even:box-border",
  "dark:border": "dark:box-border",
  "content": "box-content",
  "xs:content": "xs:box-content",
  "sm:content": "sm:box-content",
  "md:content": "md:box-content",
  "lg:content": "lg:box-content",
  "xl:content": "xl:box-content",
  "2xl:content": "2xl:box-content",
  "hover:content": "hover:box-content",
  "focus:content": "focus:box-content",
  "active:content": "active:box-content",
  "disabled:content": "disabled:box-content",
  "group-hover:content": "group-hover:box-content",
  "group:content": "group:box-content",
  "first:content": "first:box-content",
  "last:content": "last:box-content",
  "odd:content": "odd:box-content",
  "even:content": "even:box-content",
  "dark:content": "dark:box-content",
} as const;