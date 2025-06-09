import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type EaseOutType = 
  | EaseOutValue
  | Partial<Record<ResponsiveBreakpoint, EaseOutValue>>;

export type EaseOutValue = keyof typeof EASE_OUT_CLASS_MAP;

export const EASE_OUT_CLASS_MAP = {
  "out": "ease-out",
  "xs:out": "xs:ease-out",
  "sm:out": "sm:ease-out",
  "md:out": "md:ease-out",
  "lg:out": "lg:ease-out",
  "xl:out": "xl:ease-out",
  "2xl:out": "2xl:ease-out",
  "hover:out": "hover:ease-out",
  "focus:out": "focus:ease-out",
  "active:out": "active:ease-out",
  "disabled:out": "disabled:ease-out",
  "group-hover:out": "group-hover:ease-out",
  "group:out": "group:ease-out",
  "first:out": "first:ease-out",
  "last:out": "last:ease-out",
  "odd:out": "odd:ease-out",
  "even:out": "even:ease-out",
  "dark:out": "dark:ease-out",
} as const;