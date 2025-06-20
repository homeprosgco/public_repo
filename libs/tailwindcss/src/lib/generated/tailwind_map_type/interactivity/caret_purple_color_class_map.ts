import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type CaretPurpleColorType = 
  | CaretPurpleColorValue
  | Partial<Record<ResponsiveBreakpoint, CaretPurpleColorValue>>;

export type CaretPurpleColorValue = keyof typeof CARET_PURPLE_COLOR_CLASS_MAP;

export const CARET_PURPLE_COLOR_CLASS_MAP = {
  "50": "caret-purple-50",
  "xs:50": "xs:caret-purple-50",
  "sm:50": "sm:caret-purple-50",
  "md:50": "md:caret-purple-50",
  "lg:50": "lg:caret-purple-50",
  "xl:50": "xl:caret-purple-50",
  "2xl:50": "2xl:caret-purple-50",
  "hover:50": "hover:caret-purple-50",
  "focus:50": "focus:caret-purple-50",
  "active:50": "active:caret-purple-50",
  "disabled:50": "disabled:caret-purple-50",
  "group-hover:50": "group-hover:caret-purple-50",
  "group:50": "group:caret-purple-50",
  "first:50": "first:caret-purple-50",
  "last:50": "last:caret-purple-50",
  "odd:50": "odd:caret-purple-50",
  "even:50": "even:caret-purple-50",
  "dark:50": "dark:caret-purple-50",
  "100": "caret-purple-100",
  "xs:100": "xs:caret-purple-100",
  "sm:100": "sm:caret-purple-100",
  "md:100": "md:caret-purple-100",
  "lg:100": "lg:caret-purple-100",
  "xl:100": "xl:caret-purple-100",
  "2xl:100": "2xl:caret-purple-100",
  "hover:100": "hover:caret-purple-100",
  "focus:100": "focus:caret-purple-100",
  "active:100": "active:caret-purple-100",
  "disabled:100": "disabled:caret-purple-100",
  "group-hover:100": "group-hover:caret-purple-100",
  "group:100": "group:caret-purple-100",
  "first:100": "first:caret-purple-100",
  "last:100": "last:caret-purple-100",
  "odd:100": "odd:caret-purple-100",
  "even:100": "even:caret-purple-100",
  "dark:100": "dark:caret-purple-100",
  "200": "caret-purple-200",
  "xs:200": "xs:caret-purple-200",
  "sm:200": "sm:caret-purple-200",
  "md:200": "md:caret-purple-200",
  "lg:200": "lg:caret-purple-200",
  "xl:200": "xl:caret-purple-200",
  "2xl:200": "2xl:caret-purple-200",
  "hover:200": "hover:caret-purple-200",
  "focus:200": "focus:caret-purple-200",
  "active:200": "active:caret-purple-200",
  "disabled:200": "disabled:caret-purple-200",
  "group-hover:200": "group-hover:caret-purple-200",
  "group:200": "group:caret-purple-200",
  "first:200": "first:caret-purple-200",
  "last:200": "last:caret-purple-200",
  "odd:200": "odd:caret-purple-200",
  "even:200": "even:caret-purple-200",
  "dark:200": "dark:caret-purple-200",
  "300": "caret-purple-300",
  "xs:300": "xs:caret-purple-300",
  "sm:300": "sm:caret-purple-300",
  "md:300": "md:caret-purple-300",
  "lg:300": "lg:caret-purple-300",
  "xl:300": "xl:caret-purple-300",
  "2xl:300": "2xl:caret-purple-300",
  "hover:300": "hover:caret-purple-300",
  "focus:300": "focus:caret-purple-300",
  "active:300": "active:caret-purple-300",
  "disabled:300": "disabled:caret-purple-300",
  "group-hover:300": "group-hover:caret-purple-300",
  "group:300": "group:caret-purple-300",
  "first:300": "first:caret-purple-300",
  "last:300": "last:caret-purple-300",
  "odd:300": "odd:caret-purple-300",
  "even:300": "even:caret-purple-300",
  "dark:300": "dark:caret-purple-300",
  "400": "caret-purple-400",
  "xs:400": "xs:caret-purple-400",
  "sm:400": "sm:caret-purple-400",
  "md:400": "md:caret-purple-400",
  "lg:400": "lg:caret-purple-400",
  "xl:400": "xl:caret-purple-400",
  "2xl:400": "2xl:caret-purple-400",
  "hover:400": "hover:caret-purple-400",
  "focus:400": "focus:caret-purple-400",
  "active:400": "active:caret-purple-400",
  "disabled:400": "disabled:caret-purple-400",
  "group-hover:400": "group-hover:caret-purple-400",
  "group:400": "group:caret-purple-400",
  "first:400": "first:caret-purple-400",
  "last:400": "last:caret-purple-400",
  "odd:400": "odd:caret-purple-400",
  "even:400": "even:caret-purple-400",
  "dark:400": "dark:caret-purple-400",
  "500": "caret-purple-500",
  "xs:500": "xs:caret-purple-500",
  "sm:500": "sm:caret-purple-500",
  "md:500": "md:caret-purple-500",
  "lg:500": "lg:caret-purple-500",
  "xl:500": "xl:caret-purple-500",
  "2xl:500": "2xl:caret-purple-500",
  "hover:500": "hover:caret-purple-500",
  "focus:500": "focus:caret-purple-500",
  "active:500": "active:caret-purple-500",
  "disabled:500": "disabled:caret-purple-500",
  "group-hover:500": "group-hover:caret-purple-500",
  "group:500": "group:caret-purple-500",
  "first:500": "first:caret-purple-500",
  "last:500": "last:caret-purple-500",
  "odd:500": "odd:caret-purple-500",
  "even:500": "even:caret-purple-500",
  "dark:500": "dark:caret-purple-500",
  "600": "caret-purple-600",
  "xs:600": "xs:caret-purple-600",
  "sm:600": "sm:caret-purple-600",
  "md:600": "md:caret-purple-600",
  "lg:600": "lg:caret-purple-600",
  "xl:600": "xl:caret-purple-600",
  "2xl:600": "2xl:caret-purple-600",
  "hover:600": "hover:caret-purple-600",
  "focus:600": "focus:caret-purple-600",
  "active:600": "active:caret-purple-600",
  "disabled:600": "disabled:caret-purple-600",
  "group-hover:600": "group-hover:caret-purple-600",
  "group:600": "group:caret-purple-600",
  "first:600": "first:caret-purple-600",
  "last:600": "last:caret-purple-600",
  "odd:600": "odd:caret-purple-600",
  "even:600": "even:caret-purple-600",
  "dark:600": "dark:caret-purple-600",
  "700": "caret-purple-700",
  "xs:700": "xs:caret-purple-700",
  "sm:700": "sm:caret-purple-700",
  "md:700": "md:caret-purple-700",
  "lg:700": "lg:caret-purple-700",
  "xl:700": "xl:caret-purple-700",
  "2xl:700": "2xl:caret-purple-700",
  "hover:700": "hover:caret-purple-700",
  "focus:700": "focus:caret-purple-700",
  "active:700": "active:caret-purple-700",
  "disabled:700": "disabled:caret-purple-700",
  "group-hover:700": "group-hover:caret-purple-700",
  "group:700": "group:caret-purple-700",
  "first:700": "first:caret-purple-700",
  "last:700": "last:caret-purple-700",
  "odd:700": "odd:caret-purple-700",
  "even:700": "even:caret-purple-700",
  "dark:700": "dark:caret-purple-700",
  "800": "caret-purple-800",
  "xs:800": "xs:caret-purple-800",
  "sm:800": "sm:caret-purple-800",
  "md:800": "md:caret-purple-800",
  "lg:800": "lg:caret-purple-800",
  "xl:800": "xl:caret-purple-800",
  "2xl:800": "2xl:caret-purple-800",
  "hover:800": "hover:caret-purple-800",
  "focus:800": "focus:caret-purple-800",
  "active:800": "active:caret-purple-800",
  "disabled:800": "disabled:caret-purple-800",
  "group-hover:800": "group-hover:caret-purple-800",
  "group:800": "group:caret-purple-800",
  "first:800": "first:caret-purple-800",
  "last:800": "last:caret-purple-800",
  "odd:800": "odd:caret-purple-800",
  "even:800": "even:caret-purple-800",
  "dark:800": "dark:caret-purple-800",
  "900": "caret-purple-900",
  "xs:900": "xs:caret-purple-900",
  "sm:900": "sm:caret-purple-900",
  "md:900": "md:caret-purple-900",
  "lg:900": "lg:caret-purple-900",
  "xl:900": "xl:caret-purple-900",
  "2xl:900": "2xl:caret-purple-900",
  "hover:900": "hover:caret-purple-900",
  "focus:900": "focus:caret-purple-900",
  "active:900": "active:caret-purple-900",
  "disabled:900": "disabled:caret-purple-900",
  "group-hover:900": "group-hover:caret-purple-900",
  "group:900": "group:caret-purple-900",
  "first:900": "first:caret-purple-900",
  "last:900": "last:caret-purple-900",
  "odd:900": "odd:caret-purple-900",
  "even:900": "even:caret-purple-900",
  "dark:900": "dark:caret-purple-900",
  "950": "caret-purple-950",
  "xs:950": "xs:caret-purple-950",
  "sm:950": "sm:caret-purple-950",
  "md:950": "md:caret-purple-950",
  "lg:950": "lg:caret-purple-950",
  "xl:950": "xl:caret-purple-950",
  "2xl:950": "2xl:caret-purple-950",
  "hover:950": "hover:caret-purple-950",
  "focus:950": "focus:caret-purple-950",
  "active:950": "active:caret-purple-950",
  "disabled:950": "disabled:caret-purple-950",
  "group-hover:950": "group-hover:caret-purple-950",
  "group:950": "group:caret-purple-950",
  "first:950": "first:caret-purple-950",
  "last:950": "last:caret-purple-950",
  "odd:950": "odd:caret-purple-950",
  "even:950": "even:caret-purple-950",
  "dark:950": "dark:caret-purple-950",
} as const;