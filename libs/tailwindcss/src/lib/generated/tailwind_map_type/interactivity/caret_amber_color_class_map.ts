import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type CaretAmberColorType = 
  | CaretAmberColorValue
  | Partial<Record<ResponsiveBreakpoint, CaretAmberColorValue>>;

export type CaretAmberColorValue = keyof typeof CARET_AMBER_COLOR_CLASS_MAP;

export const CARET_AMBER_COLOR_CLASS_MAP = {
  "50": "caret-amber-50",
  "xs:50": "xs:caret-amber-50",
  "sm:50": "sm:caret-amber-50",
  "md:50": "md:caret-amber-50",
  "lg:50": "lg:caret-amber-50",
  "xl:50": "xl:caret-amber-50",
  "2xl:50": "2xl:caret-amber-50",
  "hover:50": "hover:caret-amber-50",
  "focus:50": "focus:caret-amber-50",
  "active:50": "active:caret-amber-50",
  "disabled:50": "disabled:caret-amber-50",
  "group-hover:50": "group-hover:caret-amber-50",
  "group:50": "group:caret-amber-50",
  "first:50": "first:caret-amber-50",
  "last:50": "last:caret-amber-50",
  "odd:50": "odd:caret-amber-50",
  "even:50": "even:caret-amber-50",
  "dark:50": "dark:caret-amber-50",
  "100": "caret-amber-100",
  "xs:100": "xs:caret-amber-100",
  "sm:100": "sm:caret-amber-100",
  "md:100": "md:caret-amber-100",
  "lg:100": "lg:caret-amber-100",
  "xl:100": "xl:caret-amber-100",
  "2xl:100": "2xl:caret-amber-100",
  "hover:100": "hover:caret-amber-100",
  "focus:100": "focus:caret-amber-100",
  "active:100": "active:caret-amber-100",
  "disabled:100": "disabled:caret-amber-100",
  "group-hover:100": "group-hover:caret-amber-100",
  "group:100": "group:caret-amber-100",
  "first:100": "first:caret-amber-100",
  "last:100": "last:caret-amber-100",
  "odd:100": "odd:caret-amber-100",
  "even:100": "even:caret-amber-100",
  "dark:100": "dark:caret-amber-100",
  "200": "caret-amber-200",
  "xs:200": "xs:caret-amber-200",
  "sm:200": "sm:caret-amber-200",
  "md:200": "md:caret-amber-200",
  "lg:200": "lg:caret-amber-200",
  "xl:200": "xl:caret-amber-200",
  "2xl:200": "2xl:caret-amber-200",
  "hover:200": "hover:caret-amber-200",
  "focus:200": "focus:caret-amber-200",
  "active:200": "active:caret-amber-200",
  "disabled:200": "disabled:caret-amber-200",
  "group-hover:200": "group-hover:caret-amber-200",
  "group:200": "group:caret-amber-200",
  "first:200": "first:caret-amber-200",
  "last:200": "last:caret-amber-200",
  "odd:200": "odd:caret-amber-200",
  "even:200": "even:caret-amber-200",
  "dark:200": "dark:caret-amber-200",
  "300": "caret-amber-300",
  "xs:300": "xs:caret-amber-300",
  "sm:300": "sm:caret-amber-300",
  "md:300": "md:caret-amber-300",
  "lg:300": "lg:caret-amber-300",
  "xl:300": "xl:caret-amber-300",
  "2xl:300": "2xl:caret-amber-300",
  "hover:300": "hover:caret-amber-300",
  "focus:300": "focus:caret-amber-300",
  "active:300": "active:caret-amber-300",
  "disabled:300": "disabled:caret-amber-300",
  "group-hover:300": "group-hover:caret-amber-300",
  "group:300": "group:caret-amber-300",
  "first:300": "first:caret-amber-300",
  "last:300": "last:caret-amber-300",
  "odd:300": "odd:caret-amber-300",
  "even:300": "even:caret-amber-300",
  "dark:300": "dark:caret-amber-300",
  "400": "caret-amber-400",
  "xs:400": "xs:caret-amber-400",
  "sm:400": "sm:caret-amber-400",
  "md:400": "md:caret-amber-400",
  "lg:400": "lg:caret-amber-400",
  "xl:400": "xl:caret-amber-400",
  "2xl:400": "2xl:caret-amber-400",
  "hover:400": "hover:caret-amber-400",
  "focus:400": "focus:caret-amber-400",
  "active:400": "active:caret-amber-400",
  "disabled:400": "disabled:caret-amber-400",
  "group-hover:400": "group-hover:caret-amber-400",
  "group:400": "group:caret-amber-400",
  "first:400": "first:caret-amber-400",
  "last:400": "last:caret-amber-400",
  "odd:400": "odd:caret-amber-400",
  "even:400": "even:caret-amber-400",
  "dark:400": "dark:caret-amber-400",
  "500": "caret-amber-500",
  "xs:500": "xs:caret-amber-500",
  "sm:500": "sm:caret-amber-500",
  "md:500": "md:caret-amber-500",
  "lg:500": "lg:caret-amber-500",
  "xl:500": "xl:caret-amber-500",
  "2xl:500": "2xl:caret-amber-500",
  "hover:500": "hover:caret-amber-500",
  "focus:500": "focus:caret-amber-500",
  "active:500": "active:caret-amber-500",
  "disabled:500": "disabled:caret-amber-500",
  "group-hover:500": "group-hover:caret-amber-500",
  "group:500": "group:caret-amber-500",
  "first:500": "first:caret-amber-500",
  "last:500": "last:caret-amber-500",
  "odd:500": "odd:caret-amber-500",
  "even:500": "even:caret-amber-500",
  "dark:500": "dark:caret-amber-500",
  "600": "caret-amber-600",
  "xs:600": "xs:caret-amber-600",
  "sm:600": "sm:caret-amber-600",
  "md:600": "md:caret-amber-600",
  "lg:600": "lg:caret-amber-600",
  "xl:600": "xl:caret-amber-600",
  "2xl:600": "2xl:caret-amber-600",
  "hover:600": "hover:caret-amber-600",
  "focus:600": "focus:caret-amber-600",
  "active:600": "active:caret-amber-600",
  "disabled:600": "disabled:caret-amber-600",
  "group-hover:600": "group-hover:caret-amber-600",
  "group:600": "group:caret-amber-600",
  "first:600": "first:caret-amber-600",
  "last:600": "last:caret-amber-600",
  "odd:600": "odd:caret-amber-600",
  "even:600": "even:caret-amber-600",
  "dark:600": "dark:caret-amber-600",
  "700": "caret-amber-700",
  "xs:700": "xs:caret-amber-700",
  "sm:700": "sm:caret-amber-700",
  "md:700": "md:caret-amber-700",
  "lg:700": "lg:caret-amber-700",
  "xl:700": "xl:caret-amber-700",
  "2xl:700": "2xl:caret-amber-700",
  "hover:700": "hover:caret-amber-700",
  "focus:700": "focus:caret-amber-700",
  "active:700": "active:caret-amber-700",
  "disabled:700": "disabled:caret-amber-700",
  "group-hover:700": "group-hover:caret-amber-700",
  "group:700": "group:caret-amber-700",
  "first:700": "first:caret-amber-700",
  "last:700": "last:caret-amber-700",
  "odd:700": "odd:caret-amber-700",
  "even:700": "even:caret-amber-700",
  "dark:700": "dark:caret-amber-700",
  "800": "caret-amber-800",
  "xs:800": "xs:caret-amber-800",
  "sm:800": "sm:caret-amber-800",
  "md:800": "md:caret-amber-800",
  "lg:800": "lg:caret-amber-800",
  "xl:800": "xl:caret-amber-800",
  "2xl:800": "2xl:caret-amber-800",
  "hover:800": "hover:caret-amber-800",
  "focus:800": "focus:caret-amber-800",
  "active:800": "active:caret-amber-800",
  "disabled:800": "disabled:caret-amber-800",
  "group-hover:800": "group-hover:caret-amber-800",
  "group:800": "group:caret-amber-800",
  "first:800": "first:caret-amber-800",
  "last:800": "last:caret-amber-800",
  "odd:800": "odd:caret-amber-800",
  "even:800": "even:caret-amber-800",
  "dark:800": "dark:caret-amber-800",
  "900": "caret-amber-900",
  "xs:900": "xs:caret-amber-900",
  "sm:900": "sm:caret-amber-900",
  "md:900": "md:caret-amber-900",
  "lg:900": "lg:caret-amber-900",
  "xl:900": "xl:caret-amber-900",
  "2xl:900": "2xl:caret-amber-900",
  "hover:900": "hover:caret-amber-900",
  "focus:900": "focus:caret-amber-900",
  "active:900": "active:caret-amber-900",
  "disabled:900": "disabled:caret-amber-900",
  "group-hover:900": "group-hover:caret-amber-900",
  "group:900": "group:caret-amber-900",
  "first:900": "first:caret-amber-900",
  "last:900": "last:caret-amber-900",
  "odd:900": "odd:caret-amber-900",
  "even:900": "even:caret-amber-900",
  "dark:900": "dark:caret-amber-900",
  "950": "caret-amber-950",
  "xs:950": "xs:caret-amber-950",
  "sm:950": "sm:caret-amber-950",
  "md:950": "md:caret-amber-950",
  "lg:950": "lg:caret-amber-950",
  "xl:950": "xl:caret-amber-950",
  "2xl:950": "2xl:caret-amber-950",
  "hover:950": "hover:caret-amber-950",
  "focus:950": "focus:caret-amber-950",
  "active:950": "active:caret-amber-950",
  "disabled:950": "disabled:caret-amber-950",
  "group-hover:950": "group-hover:caret-amber-950",
  "group:950": "group:caret-amber-950",
  "first:950": "first:caret-amber-950",
  "last:950": "last:caret-amber-950",
  "odd:950": "odd:caret-amber-950",
  "even:950": "even:caret-amber-950",
  "dark:950": "dark:caret-amber-950",
} as const;