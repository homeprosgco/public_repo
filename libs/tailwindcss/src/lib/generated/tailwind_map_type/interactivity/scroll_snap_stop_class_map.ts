import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ScrollSnapStopType = 
  | ScrollSnapStopValue
  | Partial<Record<ResponsiveBreakpoint, ScrollSnapStopValue>>;

export type ScrollSnapStopValue = keyof typeof SCROLL_SNAP_STOP_CLASS_MAP;

export const SCROLL_SNAP_STOP_CLASS_MAP = {
  "normal": "snap-normal",
  "xs:normal": "xs:snap-normal",
  "sm:normal": "sm:snap-normal",
  "md:normal": "md:snap-normal",
  "lg:normal": "lg:snap-normal",
  "xl:normal": "xl:snap-normal",
  "2xl:normal": "2xl:snap-normal",
  "hover:normal": "hover:snap-normal",
  "focus:normal": "focus:snap-normal",
  "active:normal": "active:snap-normal",
  "disabled:normal": "disabled:snap-normal",
  "group-hover:normal": "group-hover:snap-normal",
  "group:normal": "group:snap-normal",
  "first:normal": "first:snap-normal",
  "last:normal": "last:snap-normal",
  "odd:normal": "odd:snap-normal",
  "even:normal": "even:snap-normal",
  "dark:normal": "dark:snap-normal",
  "always": "snap-always",
  "xs:always": "xs:snap-always",
  "sm:always": "sm:snap-always",
  "md:always": "md:snap-always",
  "lg:always": "lg:snap-always",
  "xl:always": "xl:snap-always",
  "2xl:always": "2xl:snap-always",
  "hover:always": "hover:snap-always",
  "focus:always": "focus:snap-always",
  "active:always": "active:snap-always",
  "disabled:always": "disabled:snap-always",
  "group-hover:always": "group-hover:snap-always",
  "group:always": "group:snap-always",
  "first:always": "first:snap-always",
  "last:always": "last:snap-always",
  "odd:always": "odd:snap-always",
  "even:always": "even:snap-always",
  "dark:always": "dark:snap-always",
} as const;