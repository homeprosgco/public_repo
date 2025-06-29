import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type TextTransformType = 
  | TextTransformValue
  | Partial<Record<ResponsiveBreakpoint, TextTransformValue>>;

export type TextTransformValue = keyof typeof TEXT_TRANSFORM_CLASS_MAP;

export const TEXT_TRANSFORM_CLASS_MAP = {
  "uppercase": "uppercase",
  "xs:uppercase": "xs:uppercase",
  "sm:uppercase": "sm:uppercase",
  "md:uppercase": "md:uppercase",
  "lg:uppercase": "lg:uppercase",
  "xl:uppercase": "xl:uppercase",
  "2xl:uppercase": "2xl:uppercase",
  "hover:uppercase": "hover:uppercase",
  "focus:uppercase": "focus:uppercase",
  "active:uppercase": "active:uppercase",
  "disabled:uppercase": "disabled:uppercase",
  "group-hover:uppercase": "group-hover:uppercase",
  "group:uppercase": "group:uppercase",
  "first:uppercase": "first:uppercase",
  "last:uppercase": "last:uppercase",
  "odd:uppercase": "odd:uppercase",
  "even:uppercase": "even:uppercase",
  "dark:uppercase": "dark:uppercase",
  "lowercase": "lowercase",
  "xs:lowercase": "xs:lowercase",
  "sm:lowercase": "sm:lowercase",
  "md:lowercase": "md:lowercase",
  "lg:lowercase": "lg:lowercase",
  "xl:lowercase": "xl:lowercase",
  "2xl:lowercase": "2xl:lowercase",
  "hover:lowercase": "hover:lowercase",
  "focus:lowercase": "focus:lowercase",
  "active:lowercase": "active:lowercase",
  "disabled:lowercase": "disabled:lowercase",
  "group-hover:lowercase": "group-hover:lowercase",
  "group:lowercase": "group:lowercase",
  "first:lowercase": "first:lowercase",
  "last:lowercase": "last:lowercase",
  "odd:lowercase": "odd:lowercase",
  "even:lowercase": "even:lowercase",
  "dark:lowercase": "dark:lowercase",
  "capitalize": "capitalize",
  "xs:capitalize": "xs:capitalize",
  "sm:capitalize": "sm:capitalize",
  "md:capitalize": "md:capitalize",
  "lg:capitalize": "lg:capitalize",
  "xl:capitalize": "xl:capitalize",
  "2xl:capitalize": "2xl:capitalize",
  "hover:capitalize": "hover:capitalize",
  "focus:capitalize": "focus:capitalize",
  "active:capitalize": "active:capitalize",
  "disabled:capitalize": "disabled:capitalize",
  "group-hover:capitalize": "group-hover:capitalize",
  "group:capitalize": "group:capitalize",
  "first:capitalize": "first:capitalize",
  "last:capitalize": "last:capitalize",
  "odd:capitalize": "odd:capitalize",
  "even:capitalize": "even:capitalize",
  "dark:capitalize": "dark:capitalize",
  "case": "normal-case",
  "xs:case": "xs:normal-case",
  "sm:case": "sm:normal-case",
  "md:case": "md:normal-case",
  "lg:case": "lg:normal-case",
  "xl:case": "xl:normal-case",
  "2xl:case": "2xl:normal-case",
  "hover:case": "hover:normal-case",
  "focus:case": "focus:normal-case",
  "active:case": "active:normal-case",
  "disabled:case": "disabled:normal-case",
  "group-hover:case": "group-hover:normal-case",
  "group:case": "group:normal-case",
  "first:case": "first:normal-case",
  "last:case": "last:normal-case",
  "odd:case": "odd:normal-case",
  "even:case": "even:normal-case",
  "dark:case": "dark:normal-case",
} as const;