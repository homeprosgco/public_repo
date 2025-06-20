import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type OverflowYType = 
  | OverflowYValue
  | Partial<Record<ResponsiveBreakpoint, OverflowYValue>>;

export type OverflowYValue = keyof typeof OVERFLOW_Y_CLASS_MAP;

export const OVERFLOW_Y_CLASS_MAP = {
  "auto": "overflow-y-auto",
  "xs:auto": "xs:overflow-y-auto",
  "sm:auto": "sm:overflow-y-auto",
  "md:auto": "md:overflow-y-auto",
  "lg:auto": "lg:overflow-y-auto",
  "xl:auto": "xl:overflow-y-auto",
  "2xl:auto": "2xl:overflow-y-auto",
  "hover:auto": "hover:overflow-y-auto",
  "focus:auto": "focus:overflow-y-auto",
  "active:auto": "active:overflow-y-auto",
  "disabled:auto": "disabled:overflow-y-auto",
  "group-hover:auto": "group-hover:overflow-y-auto",
  "group:auto": "group:overflow-y-auto",
  "first:auto": "first:overflow-y-auto",
  "last:auto": "last:overflow-y-auto",
  "odd:auto": "odd:overflow-y-auto",
  "even:auto": "even:overflow-y-auto",
  "dark:auto": "dark:overflow-y-auto",
  "hidden": "overflow-y-hidden",
  "xs:hidden": "xs:overflow-y-hidden",
  "sm:hidden": "sm:overflow-y-hidden",
  "md:hidden": "md:overflow-y-hidden",
  "lg:hidden": "lg:overflow-y-hidden",
  "xl:hidden": "xl:overflow-y-hidden",
  "2xl:hidden": "2xl:overflow-y-hidden",
  "hover:hidden": "hover:overflow-y-hidden",
  "focus:hidden": "focus:overflow-y-hidden",
  "active:hidden": "active:overflow-y-hidden",
  "disabled:hidden": "disabled:overflow-y-hidden",
  "group-hover:hidden": "group-hover:overflow-y-hidden",
  "group:hidden": "group:overflow-y-hidden",
  "first:hidden": "first:overflow-y-hidden",
  "last:hidden": "last:overflow-y-hidden",
  "odd:hidden": "odd:overflow-y-hidden",
  "even:hidden": "even:overflow-y-hidden",
  "dark:hidden": "dark:overflow-y-hidden",
  "clip": "overflow-y-clip",
  "xs:clip": "xs:overflow-y-clip",
  "sm:clip": "sm:overflow-y-clip",
  "md:clip": "md:overflow-y-clip",
  "lg:clip": "lg:overflow-y-clip",
  "xl:clip": "xl:overflow-y-clip",
  "2xl:clip": "2xl:overflow-y-clip",
  "hover:clip": "hover:overflow-y-clip",
  "focus:clip": "focus:overflow-y-clip",
  "active:clip": "active:overflow-y-clip",
  "disabled:clip": "disabled:overflow-y-clip",
  "group-hover:clip": "group-hover:overflow-y-clip",
  "group:clip": "group:overflow-y-clip",
  "first:clip": "first:overflow-y-clip",
  "last:clip": "last:overflow-y-clip",
  "odd:clip": "odd:overflow-y-clip",
  "even:clip": "even:overflow-y-clip",
  "dark:clip": "dark:overflow-y-clip",
  "visible": "overflow-y-visible",
  "xs:visible": "xs:overflow-y-visible",
  "sm:visible": "sm:overflow-y-visible",
  "md:visible": "md:overflow-y-visible",
  "lg:visible": "lg:overflow-y-visible",
  "xl:visible": "xl:overflow-y-visible",
  "2xl:visible": "2xl:overflow-y-visible",
  "hover:visible": "hover:overflow-y-visible",
  "focus:visible": "focus:overflow-y-visible",
  "active:visible": "active:overflow-y-visible",
  "disabled:visible": "disabled:overflow-y-visible",
  "group-hover:visible": "group-hover:overflow-y-visible",
  "group:visible": "group:overflow-y-visible",
  "first:visible": "first:overflow-y-visible",
  "last:visible": "last:overflow-y-visible",
  "odd:visible": "odd:overflow-y-visible",
  "even:visible": "even:overflow-y-visible",
  "dark:visible": "dark:overflow-y-visible",
  "scroll": "overflow-y-scroll",
  "xs:scroll": "xs:overflow-y-scroll",
  "sm:scroll": "sm:overflow-y-scroll",
  "md:scroll": "md:overflow-y-scroll",
  "lg:scroll": "lg:overflow-y-scroll",
  "xl:scroll": "xl:overflow-y-scroll",
  "2xl:scroll": "2xl:overflow-y-scroll",
  "hover:scroll": "hover:overflow-y-scroll",
  "focus:scroll": "focus:overflow-y-scroll",
  "active:scroll": "active:overflow-y-scroll",
  "disabled:scroll": "disabled:overflow-y-scroll",
  "group-hover:scroll": "group-hover:overflow-y-scroll",
  "group:scroll": "group:overflow-y-scroll",
  "first:scroll": "first:overflow-y-scroll",
  "last:scroll": "last:overflow-y-scroll",
  "odd:scroll": "odd:overflow-y-scroll",
  "even:scroll": "even:overflow-y-scroll",
  "dark:scroll": "dark:overflow-y-scroll",
} as const;