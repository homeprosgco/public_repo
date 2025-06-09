import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type DivideYReverseType = 
  | DivideYReverseValue
  | Partial<Record<ResponsiveBreakpoint, DivideYReverseValue>>;

export type DivideYReverseValue = keyof typeof DIVIDE_Y_REVERSE_CLASS_MAP;

export const DIVIDE_Y_REVERSE_CLASS_MAP = {
  "1": "divide-y-reverse",
  "xs:1": "xs:divide-y-reverse",
  "sm:1": "sm:divide-y-reverse",
  "md:1": "md:divide-y-reverse",
  "lg:1": "lg:divide-y-reverse",
  "xl:1": "xl:divide-y-reverse",
  "2xl:1": "2xl:divide-y-reverse",
  "hover:1": "hover:divide-y-reverse",
  "focus:1": "focus:divide-y-reverse",
  "active:1": "active:divide-y-reverse",
  "disabled:1": "disabled:divide-y-reverse",
  "group-hover:1": "group-hover:divide-y-reverse",
  "group:1": "group:divide-y-reverse",
  "first:1": "first:divide-y-reverse",
  "last:1": "last:divide-y-reverse",
  "odd:1": "odd:divide-y-reverse",
  "even:1": "even:divide-y-reverse",
  "dark:1": "dark:divide-y-reverse",
} as const;