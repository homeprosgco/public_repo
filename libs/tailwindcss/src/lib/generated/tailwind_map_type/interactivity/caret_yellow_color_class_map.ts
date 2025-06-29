import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type CaretYellowColorType = 
  | CaretYellowColorValue
  | Partial<Record<ResponsiveBreakpoint, CaretYellowColorValue>>;

export type CaretYellowColorValue = keyof typeof CARET_YELLOW_COLOR_CLASS_MAP;

export const CARET_YELLOW_COLOR_CLASS_MAP = {
  "50": "caret-yellow-50",
  "xs:50": "xs:caret-yellow-50",
  "sm:50": "sm:caret-yellow-50",
  "md:50": "md:caret-yellow-50",
  "lg:50": "lg:caret-yellow-50",
  "xl:50": "xl:caret-yellow-50",
  "2xl:50": "2xl:caret-yellow-50",
  "hover:50": "hover:caret-yellow-50",
  "focus:50": "focus:caret-yellow-50",
  "active:50": "active:caret-yellow-50",
  "disabled:50": "disabled:caret-yellow-50",
  "group-hover:50": "group-hover:caret-yellow-50",
  "group:50": "group:caret-yellow-50",
  "first:50": "first:caret-yellow-50",
  "last:50": "last:caret-yellow-50",
  "odd:50": "odd:caret-yellow-50",
  "even:50": "even:caret-yellow-50",
  "dark:50": "dark:caret-yellow-50",
  "100": "caret-yellow-100",
  "xs:100": "xs:caret-yellow-100",
  "sm:100": "sm:caret-yellow-100",
  "md:100": "md:caret-yellow-100",
  "lg:100": "lg:caret-yellow-100",
  "xl:100": "xl:caret-yellow-100",
  "2xl:100": "2xl:caret-yellow-100",
  "hover:100": "hover:caret-yellow-100",
  "focus:100": "focus:caret-yellow-100",
  "active:100": "active:caret-yellow-100",
  "disabled:100": "disabled:caret-yellow-100",
  "group-hover:100": "group-hover:caret-yellow-100",
  "group:100": "group:caret-yellow-100",
  "first:100": "first:caret-yellow-100",
  "last:100": "last:caret-yellow-100",
  "odd:100": "odd:caret-yellow-100",
  "even:100": "even:caret-yellow-100",
  "dark:100": "dark:caret-yellow-100",
  "200": "caret-yellow-200",
  "xs:200": "xs:caret-yellow-200",
  "sm:200": "sm:caret-yellow-200",
  "md:200": "md:caret-yellow-200",
  "lg:200": "lg:caret-yellow-200",
  "xl:200": "xl:caret-yellow-200",
  "2xl:200": "2xl:caret-yellow-200",
  "hover:200": "hover:caret-yellow-200",
  "focus:200": "focus:caret-yellow-200",
  "active:200": "active:caret-yellow-200",
  "disabled:200": "disabled:caret-yellow-200",
  "group-hover:200": "group-hover:caret-yellow-200",
  "group:200": "group:caret-yellow-200",
  "first:200": "first:caret-yellow-200",
  "last:200": "last:caret-yellow-200",
  "odd:200": "odd:caret-yellow-200",
  "even:200": "even:caret-yellow-200",
  "dark:200": "dark:caret-yellow-200",
  "300": "caret-yellow-300",
  "xs:300": "xs:caret-yellow-300",
  "sm:300": "sm:caret-yellow-300",
  "md:300": "md:caret-yellow-300",
  "lg:300": "lg:caret-yellow-300",
  "xl:300": "xl:caret-yellow-300",
  "2xl:300": "2xl:caret-yellow-300",
  "hover:300": "hover:caret-yellow-300",
  "focus:300": "focus:caret-yellow-300",
  "active:300": "active:caret-yellow-300",
  "disabled:300": "disabled:caret-yellow-300",
  "group-hover:300": "group-hover:caret-yellow-300",
  "group:300": "group:caret-yellow-300",
  "first:300": "first:caret-yellow-300",
  "last:300": "last:caret-yellow-300",
  "odd:300": "odd:caret-yellow-300",
  "even:300": "even:caret-yellow-300",
  "dark:300": "dark:caret-yellow-300",
  "400": "caret-yellow-400",
  "xs:400": "xs:caret-yellow-400",
  "sm:400": "sm:caret-yellow-400",
  "md:400": "md:caret-yellow-400",
  "lg:400": "lg:caret-yellow-400",
  "xl:400": "xl:caret-yellow-400",
  "2xl:400": "2xl:caret-yellow-400",
  "hover:400": "hover:caret-yellow-400",
  "focus:400": "focus:caret-yellow-400",
  "active:400": "active:caret-yellow-400",
  "disabled:400": "disabled:caret-yellow-400",
  "group-hover:400": "group-hover:caret-yellow-400",
  "group:400": "group:caret-yellow-400",
  "first:400": "first:caret-yellow-400",
  "last:400": "last:caret-yellow-400",
  "odd:400": "odd:caret-yellow-400",
  "even:400": "even:caret-yellow-400",
  "dark:400": "dark:caret-yellow-400",
  "500": "caret-yellow-500",
  "xs:500": "xs:caret-yellow-500",
  "sm:500": "sm:caret-yellow-500",
  "md:500": "md:caret-yellow-500",
  "lg:500": "lg:caret-yellow-500",
  "xl:500": "xl:caret-yellow-500",
  "2xl:500": "2xl:caret-yellow-500",
  "hover:500": "hover:caret-yellow-500",
  "focus:500": "focus:caret-yellow-500",
  "active:500": "active:caret-yellow-500",
  "disabled:500": "disabled:caret-yellow-500",
  "group-hover:500": "group-hover:caret-yellow-500",
  "group:500": "group:caret-yellow-500",
  "first:500": "first:caret-yellow-500",
  "last:500": "last:caret-yellow-500",
  "odd:500": "odd:caret-yellow-500",
  "even:500": "even:caret-yellow-500",
  "dark:500": "dark:caret-yellow-500",
  "600": "caret-yellow-600",
  "xs:600": "xs:caret-yellow-600",
  "sm:600": "sm:caret-yellow-600",
  "md:600": "md:caret-yellow-600",
  "lg:600": "lg:caret-yellow-600",
  "xl:600": "xl:caret-yellow-600",
  "2xl:600": "2xl:caret-yellow-600",
  "hover:600": "hover:caret-yellow-600",
  "focus:600": "focus:caret-yellow-600",
  "active:600": "active:caret-yellow-600",
  "disabled:600": "disabled:caret-yellow-600",
  "group-hover:600": "group-hover:caret-yellow-600",
  "group:600": "group:caret-yellow-600",
  "first:600": "first:caret-yellow-600",
  "last:600": "last:caret-yellow-600",
  "odd:600": "odd:caret-yellow-600",
  "even:600": "even:caret-yellow-600",
  "dark:600": "dark:caret-yellow-600",
  "700": "caret-yellow-700",
  "xs:700": "xs:caret-yellow-700",
  "sm:700": "sm:caret-yellow-700",
  "md:700": "md:caret-yellow-700",
  "lg:700": "lg:caret-yellow-700",
  "xl:700": "xl:caret-yellow-700",
  "2xl:700": "2xl:caret-yellow-700",
  "hover:700": "hover:caret-yellow-700",
  "focus:700": "focus:caret-yellow-700",
  "active:700": "active:caret-yellow-700",
  "disabled:700": "disabled:caret-yellow-700",
  "group-hover:700": "group-hover:caret-yellow-700",
  "group:700": "group:caret-yellow-700",
  "first:700": "first:caret-yellow-700",
  "last:700": "last:caret-yellow-700",
  "odd:700": "odd:caret-yellow-700",
  "even:700": "even:caret-yellow-700",
  "dark:700": "dark:caret-yellow-700",
  "800": "caret-yellow-800",
  "xs:800": "xs:caret-yellow-800",
  "sm:800": "sm:caret-yellow-800",
  "md:800": "md:caret-yellow-800",
  "lg:800": "lg:caret-yellow-800",
  "xl:800": "xl:caret-yellow-800",
  "2xl:800": "2xl:caret-yellow-800",
  "hover:800": "hover:caret-yellow-800",
  "focus:800": "focus:caret-yellow-800",
  "active:800": "active:caret-yellow-800",
  "disabled:800": "disabled:caret-yellow-800",
  "group-hover:800": "group-hover:caret-yellow-800",
  "group:800": "group:caret-yellow-800",
  "first:800": "first:caret-yellow-800",
  "last:800": "last:caret-yellow-800",
  "odd:800": "odd:caret-yellow-800",
  "even:800": "even:caret-yellow-800",
  "dark:800": "dark:caret-yellow-800",
  "900": "caret-yellow-900",
  "xs:900": "xs:caret-yellow-900",
  "sm:900": "sm:caret-yellow-900",
  "md:900": "md:caret-yellow-900",
  "lg:900": "lg:caret-yellow-900",
  "xl:900": "xl:caret-yellow-900",
  "2xl:900": "2xl:caret-yellow-900",
  "hover:900": "hover:caret-yellow-900",
  "focus:900": "focus:caret-yellow-900",
  "active:900": "active:caret-yellow-900",
  "disabled:900": "disabled:caret-yellow-900",
  "group-hover:900": "group-hover:caret-yellow-900",
  "group:900": "group:caret-yellow-900",
  "first:900": "first:caret-yellow-900",
  "last:900": "last:caret-yellow-900",
  "odd:900": "odd:caret-yellow-900",
  "even:900": "even:caret-yellow-900",
  "dark:900": "dark:caret-yellow-900",
  "950": "caret-yellow-950",
  "xs:950": "xs:caret-yellow-950",
  "sm:950": "sm:caret-yellow-950",
  "md:950": "md:caret-yellow-950",
  "lg:950": "lg:caret-yellow-950",
  "xl:950": "xl:caret-yellow-950",
  "2xl:950": "2xl:caret-yellow-950",
  "hover:950": "hover:caret-yellow-950",
  "focus:950": "focus:caret-yellow-950",
  "active:950": "active:caret-yellow-950",
  "disabled:950": "disabled:caret-yellow-950",
  "group-hover:950": "group-hover:caret-yellow-950",
  "group:950": "group:caret-yellow-950",
  "first:950": "first:caret-yellow-950",
  "last:950": "last:caret-yellow-950",
  "odd:950": "odd:caret-yellow-950",
  "even:950": "even:caret-yellow-950",
  "dark:950": "dark:caret-yellow-950",
} as const;