import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type PointerEventsType = 
  | PointerEventsValue
  | Partial<Record<ResponsiveBreakpoint, PointerEventsValue>>;

export type PointerEventsValue = keyof typeof POINTER_EVENTS_CLASS_MAP;

export const POINTER_EVENTS_CLASS_MAP = {
  "none": "pointer-events-none",
  "xs:none": "xs:pointer-events-none",
  "sm:none": "sm:pointer-events-none",
  "md:none": "md:pointer-events-none",
  "lg:none": "lg:pointer-events-none",
  "xl:none": "xl:pointer-events-none",
  "2xl:none": "2xl:pointer-events-none",
  "hover:none": "hover:pointer-events-none",
  "focus:none": "focus:pointer-events-none",
  "active:none": "active:pointer-events-none",
  "disabled:none": "disabled:pointer-events-none",
  "group-hover:none": "group-hover:pointer-events-none",
  "group:none": "group:pointer-events-none",
  "first:none": "first:pointer-events-none",
  "last:none": "last:pointer-events-none",
  "odd:none": "odd:pointer-events-none",
  "even:none": "even:pointer-events-none",
  "dark:none": "dark:pointer-events-none",
  "auto": "pointer-events-auto",
  "xs:auto": "xs:pointer-events-auto",
  "sm:auto": "sm:pointer-events-auto",
  "md:auto": "md:pointer-events-auto",
  "lg:auto": "lg:pointer-events-auto",
  "xl:auto": "xl:pointer-events-auto",
  "2xl:auto": "2xl:pointer-events-auto",
  "hover:auto": "hover:pointer-events-auto",
  "focus:auto": "focus:pointer-events-auto",
  "active:auto": "active:pointer-events-auto",
  "disabled:auto": "disabled:pointer-events-auto",
  "group-hover:auto": "group-hover:pointer-events-auto",
  "group:auto": "group:pointer-events-auto",
  "first:auto": "first:pointer-events-auto",
  "last:auto": "last:pointer-events-auto",
  "odd:auto": "odd:pointer-events-auto",
  "even:auto": "even:pointer-events-auto",
  "dark:auto": "dark:pointer-events-auto",
} as const;