import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type EaseInType = 
  | EaseInValue
  | Partial<Record<ResponsiveBreakpoint, EaseInValue>>;

export type EaseInValue = keyof typeof EASE_IN_CLASS_MAP;

export const EASE_IN_CLASS_MAP = {
  "in": "ease-in",
  "xs:in": "xs:ease-in",
  "sm:in": "sm:ease-in",
  "md:in": "md:ease-in",
  "lg:in": "lg:ease-in",
  "xl:in": "xl:ease-in",
  "2xl:in": "2xl:ease-in",
  "hover:in": "hover:ease-in",
  "focus:in": "focus:ease-in",
  "active:in": "active:ease-in",
  "disabled:in": "disabled:ease-in",
  "group-hover:in": "group-hover:ease-in",
  "group:in": "group:ease-in",
  "first:in": "first:ease-in",
  "last:in": "last:ease-in",
  "odd:in": "odd:ease-in",
  "even:in": "even:ease-in",
  "dark:in": "dark:ease-in",
  "out": "ease-in-out",
  "xs:out": "xs:ease-in-out",
  "sm:out": "sm:ease-in-out",
  "md:out": "md:ease-in-out",
  "lg:out": "lg:ease-in-out",
  "xl:out": "xl:ease-in-out",
  "2xl:out": "2xl:ease-in-out",
  "hover:out": "hover:ease-in-out",
  "focus:out": "focus:ease-in-out",
  "active:out": "active:ease-in-out",
  "disabled:out": "disabled:ease-in-out",
  "group-hover:out": "group-hover:ease-in-out",
  "group:out": "group:ease-in-out",
  "first:out": "first:ease-in-out",
  "last:out": "last:ease-in-out",
  "odd:out": "odd:ease-in-out",
  "even:out": "even:ease-in-out",
  "dark:out": "dark:ease-in-out",
} as const;