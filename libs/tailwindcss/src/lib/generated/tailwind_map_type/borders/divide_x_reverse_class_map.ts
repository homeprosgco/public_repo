import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type DivideXReverseType = 
  | DivideXReverseValue
  | Partial<Record<ResponsiveBreakpoint, DivideXReverseValue>>;

export type DivideXReverseValue = keyof typeof DIVIDE_X_REVERSE_CLASS_MAP;

export const DIVIDE_X_REVERSE_CLASS_MAP = {
  "1": "divide-x-reverse",
  "xs:1": "xs:divide-x-reverse",
  "sm:1": "sm:divide-x-reverse",
  "md:1": "md:divide-x-reverse",
  "lg:1": "lg:divide-x-reverse",
  "xl:1": "xl:divide-x-reverse",
  "2xl:1": "2xl:divide-x-reverse",
  "hover:1": "hover:divide-x-reverse",
  "focus:1": "focus:divide-x-reverse",
  "active:1": "active:divide-x-reverse",
  "disabled:1": "disabled:divide-x-reverse",
  "group-hover:1": "group-hover:divide-x-reverse",
  "group:1": "group:divide-x-reverse",
  "first:1": "first:divide-x-reverse",
  "last:1": "last:divide-x-reverse",
  "odd:1": "odd:divide-x-reverse",
  "even:1": "even:divide-x-reverse",
  "dark:1": "dark:divide-x-reverse",
} as const;