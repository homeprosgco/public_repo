import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type FontStyleType = 
  | FontStyleValue
  | Partial<Record<ResponsiveBreakpoint, FontStyleValue>>;

export type FontStyleValue = keyof typeof FONT_STYLE_CLASS_MAP;

export const FONT_STYLE_CLASS_MAP = {
  "italic": "not-italic",
  "xs:italic": "xs:not-italic",
  "sm:italic": "sm:not-italic",
  "md:italic": "md:not-italic",
  "lg:italic": "lg:not-italic",
  "xl:italic": "xl:not-italic",
  "2xl:italic": "2xl:not-italic",
  "hover:italic": "hover:not-italic",
  "focus:italic": "focus:not-italic",
  "active:italic": "active:not-italic",
  "disabled:italic": "disabled:not-italic",
  "group-hover:italic": "group-hover:not-italic",
  "group:italic": "group:not-italic",
  "first:italic": "first:not-italic",
  "last:italic": "last:not-italic",
  "odd:italic": "odd:not-italic",
  "even:italic": "even:not-italic",
  "dark:italic": "dark:not-italic",
} as const;