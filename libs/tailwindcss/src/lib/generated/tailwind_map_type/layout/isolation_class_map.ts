import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type IsolationType = 
  | IsolationValue
  | Partial<Record<ResponsiveBreakpoint, IsolationValue>>;

export type IsolationValue = keyof typeof ISOLATION_CLASS_MAP;

export const ISOLATION_CLASS_MAP = {
  "isolate": "isolate",
  "xs:isolate": "xs:isolate",
  "sm:isolate": "sm:isolate",
  "md:isolate": "md:isolate",
  "lg:isolate": "lg:isolate",
  "xl:isolate": "xl:isolate",
  "2xl:isolate": "2xl:isolate",
  "hover:isolate": "hover:isolate",
  "focus:isolate": "focus:isolate",
  "active:isolate": "active:isolate",
  "disabled:isolate": "disabled:isolate",
  "group-hover:isolate": "group-hover:isolate",
  "group:isolate": "group:isolate",
  "first:isolate": "first:isolate",
  "last:isolate": "last:isolate",
  "odd:isolate": "odd:isolate",
  "even:isolate": "even:isolate",
  "dark:isolate": "dark:isolate",
  "auto": "isolation-auto",
  "xs:auto": "xs:isolation-auto",
  "sm:auto": "sm:isolation-auto",
  "md:auto": "md:isolation-auto",
  "lg:auto": "lg:isolation-auto",
  "xl:auto": "xl:isolation-auto",
  "2xl:auto": "2xl:isolation-auto",
  "hover:auto": "hover:isolation-auto",
  "focus:auto": "focus:isolation-auto",
  "active:auto": "active:isolation-auto",
  "disabled:auto": "disabled:isolation-auto",
  "group-hover:auto": "group-hover:isolation-auto",
  "group:auto": "group:isolation-auto",
  "first:auto": "first:isolation-auto",
  "last:auto": "last:isolation-auto",
  "odd:auto": "odd:isolation-auto",
  "even:auto": "even:isolation-auto",
  "dark:auto": "dark:isolation-auto",
} as const;