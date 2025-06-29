import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type UserSelectType = 
  | UserSelectValue
  | Partial<Record<ResponsiveBreakpoint, UserSelectValue>>;

export type UserSelectValue = keyof typeof USER_SELECT_CLASS_MAP;

export const USER_SELECT_CLASS_MAP = {
  "none": "select-none",
  "xs:none": "xs:select-none",
  "sm:none": "sm:select-none",
  "md:none": "md:select-none",
  "lg:none": "lg:select-none",
  "xl:none": "xl:select-none",
  "2xl:none": "2xl:select-none",
  "hover:none": "hover:select-none",
  "focus:none": "focus:select-none",
  "active:none": "active:select-none",
  "disabled:none": "disabled:select-none",
  "group-hover:none": "group-hover:select-none",
  "group:none": "group:select-none",
  "first:none": "first:select-none",
  "last:none": "last:select-none",
  "odd:none": "odd:select-none",
  "even:none": "even:select-none",
  "dark:none": "dark:select-none",
  "text": "select-text",
  "xs:text": "xs:select-text",
  "sm:text": "sm:select-text",
  "md:text": "md:select-text",
  "lg:text": "lg:select-text",
  "xl:text": "xl:select-text",
  "2xl:text": "2xl:select-text",
  "hover:text": "hover:select-text",
  "focus:text": "focus:select-text",
  "active:text": "active:select-text",
  "disabled:text": "disabled:select-text",
  "group-hover:text": "group-hover:select-text",
  "group:text": "group:select-text",
  "first:text": "first:select-text",
  "last:text": "last:select-text",
  "odd:text": "odd:select-text",
  "even:text": "even:select-text",
  "dark:text": "dark:select-text",
  "all": "select-all",
  "xs:all": "xs:select-all",
  "sm:all": "sm:select-all",
  "md:all": "md:select-all",
  "lg:all": "lg:select-all",
  "xl:all": "xl:select-all",
  "2xl:all": "2xl:select-all",
  "hover:all": "hover:select-all",
  "focus:all": "focus:select-all",
  "active:all": "active:select-all",
  "disabled:all": "disabled:select-all",
  "group-hover:all": "group-hover:select-all",
  "group:all": "group:select-all",
  "first:all": "first:select-all",
  "last:all": "last:select-all",
  "odd:all": "odd:select-all",
  "even:all": "even:select-all",
  "dark:all": "dark:select-all",
  "auto": "select-auto",
  "xs:auto": "xs:select-auto",
  "sm:auto": "sm:select-auto",
  "md:auto": "md:select-auto",
  "lg:auto": "lg:select-auto",
  "xl:auto": "xl:select-auto",
  "2xl:auto": "2xl:select-auto",
  "hover:auto": "hover:select-auto",
  "focus:auto": "focus:select-auto",
  "active:auto": "active:select-auto",
  "disabled:auto": "disabled:select-auto",
  "group-hover:auto": "group-hover:select-auto",
  "group:auto": "group:select-auto",
  "first:auto": "first:select-auto",
  "last:auto": "last:select-auto",
  "odd:auto": "odd:select-auto",
  "even:auto": "even:select-auto",
  "dark:auto": "dark:select-auto",
} as const;