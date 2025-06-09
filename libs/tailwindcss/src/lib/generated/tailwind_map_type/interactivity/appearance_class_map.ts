import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type AppearanceType = 
  | AppearanceValue
  | Partial<Record<ResponsiveBreakpoint, AppearanceValue>>;

export type AppearanceValue = keyof typeof APPEARANCE_CLASS_MAP;

export const APPEARANCE_CLASS_MAP = {
  "none": "appearance-none",
  "xs:none": "xs:appearance-none",
  "sm:none": "sm:appearance-none",
  "md:none": "md:appearance-none",
  "lg:none": "lg:appearance-none",
  "xl:none": "xl:appearance-none",
  "2xl:none": "2xl:appearance-none",
  "hover:none": "hover:appearance-none",
  "focus:none": "focus:appearance-none",
  "active:none": "active:appearance-none",
  "disabled:none": "disabled:appearance-none",
  "group-hover:none": "group-hover:appearance-none",
  "group:none": "group:appearance-none",
  "first:none": "first:appearance-none",
  "last:none": "last:appearance-none",
  "odd:none": "odd:appearance-none",
  "even:none": "even:appearance-none",
  "dark:none": "dark:appearance-none",
  "auto": "appearance-auto",
  "xs:auto": "xs:appearance-auto",
  "sm:auto": "sm:appearance-auto",
  "md:auto": "md:appearance-auto",
  "lg:auto": "lg:appearance-auto",
  "xl:auto": "xl:appearance-auto",
  "2xl:auto": "2xl:appearance-auto",
  "hover:auto": "hover:appearance-auto",
  "focus:auto": "focus:appearance-auto",
  "active:auto": "active:appearance-auto",
  "disabled:auto": "disabled:appearance-auto",
  "group-hover:auto": "group-hover:appearance-auto",
  "group:auto": "group:appearance-auto",
  "first:auto": "first:appearance-auto",
  "last:auto": "last:appearance-auto",
  "odd:auto": "odd:appearance-auto",
  "even:auto": "even:appearance-auto",
  "dark:auto": "dark:appearance-auto",
} as const;