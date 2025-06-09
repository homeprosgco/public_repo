import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type TextOverflowType = 
  | TextOverflowValue
  | Partial<Record<ResponsiveBreakpoint, TextOverflowValue>>;

export type TextOverflowValue = keyof typeof TEXT_OVERFLOW_CLASS_MAP;

export const TEXT_OVERFLOW_CLASS_MAP = {
  "ellipsis": "text-ellipsis",
  "xs:ellipsis": "xs:text-ellipsis",
  "sm:ellipsis": "sm:text-ellipsis",
  "md:ellipsis": "md:text-ellipsis",
  "lg:ellipsis": "lg:text-ellipsis",
  "xl:ellipsis": "xl:text-ellipsis",
  "2xl:ellipsis": "2xl:text-ellipsis",
  "hover:ellipsis": "hover:text-ellipsis",
  "focus:ellipsis": "focus:text-ellipsis",
  "active:ellipsis": "active:text-ellipsis",
  "disabled:ellipsis": "disabled:text-ellipsis",
  "group-hover:ellipsis": "group-hover:text-ellipsis",
  "group:ellipsis": "group:text-ellipsis",
  "first:ellipsis": "first:text-ellipsis",
  "last:ellipsis": "last:text-ellipsis",
  "odd:ellipsis": "odd:text-ellipsis",
  "even:ellipsis": "even:text-ellipsis",
  "dark:ellipsis": "dark:text-ellipsis",
  "clip": "text-clip",
  "xs:clip": "xs:text-clip",
  "sm:clip": "sm:text-clip",
  "md:clip": "md:text-clip",
  "lg:clip": "lg:text-clip",
  "xl:clip": "xl:text-clip",
  "2xl:clip": "2xl:text-clip",
  "hover:clip": "hover:text-clip",
  "focus:clip": "focus:text-clip",
  "active:clip": "active:text-clip",
  "disabled:clip": "disabled:text-clip",
  "group-hover:clip": "group-hover:text-clip",
  "group:clip": "group:text-clip",
  "first:clip": "first:text-clip",
  "last:clip": "last:text-clip",
  "odd:clip": "odd:text-clip",
  "even:clip": "even:text-clip",
  "dark:clip": "dark:text-clip",
} as const;