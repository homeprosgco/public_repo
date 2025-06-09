import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type TransitionTimingFunctionType = 
  | TransitionTimingFunctionValue
  | Partial<Record<ResponsiveBreakpoint, TransitionTimingFunctionValue>>;

export type TransitionTimingFunctionValue = keyof typeof TRANSITION_TIMING_FUNCTION_CLASS_MAP;

export const TRANSITION_TIMING_FUNCTION_CLASS_MAP = {
  "linear": "ease-linear",
  "xs:linear": "xs:ease-linear",
  "sm:linear": "sm:ease-linear",
  "md:linear": "md:ease-linear",
  "lg:linear": "lg:ease-linear",
  "xl:linear": "xl:ease-linear",
  "2xl:linear": "2xl:ease-linear",
  "hover:linear": "hover:ease-linear",
  "focus:linear": "focus:ease-linear",
  "active:linear": "active:ease-linear",
  "disabled:linear": "disabled:ease-linear",
  "group-hover:linear": "group-hover:ease-linear",
  "group:linear": "group:ease-linear",
  "first:linear": "first:ease-linear",
  "last:linear": "last:ease-linear",
  "odd:linear": "odd:ease-linear",
  "even:linear": "even:ease-linear",
  "dark:linear": "dark:ease-linear",
} as const;