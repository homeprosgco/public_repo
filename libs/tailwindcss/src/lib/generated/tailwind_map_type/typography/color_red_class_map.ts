import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ColorRedType = 
  | ColorRedValue
  | Partial<Record<ResponsiveBreakpoint, ColorRedValue>>;

export type ColorRedValue = keyof typeof COLOR_RED_CLASS_MAP;

export const COLOR_RED_CLASS_MAP = {
  "50": "text-red-50",
  "xs:50": "xs:text-red-50",
  "sm:50": "sm:text-red-50",
  "md:50": "md:text-red-50",
  "lg:50": "lg:text-red-50",
  "xl:50": "xl:text-red-50",
  "2xl:50": "2xl:text-red-50",
  "hover:50": "hover:text-red-50",
  "focus:50": "focus:text-red-50",
  "active:50": "active:text-red-50",
  "disabled:50": "disabled:text-red-50",
  "group-hover:50": "group-hover:text-red-50",
  "group:50": "group:text-red-50",
  "first:50": "first:text-red-50",
  "last:50": "last:text-red-50",
  "odd:50": "odd:text-red-50",
  "even:50": "even:text-red-50",
  "dark:50": "dark:text-red-50",
  "100": "text-red-100",
  "xs:100": "xs:text-red-100",
  "sm:100": "sm:text-red-100",
  "md:100": "md:text-red-100",
  "lg:100": "lg:text-red-100",
  "xl:100": "xl:text-red-100",
  "2xl:100": "2xl:text-red-100",
  "hover:100": "hover:text-red-100",
  "focus:100": "focus:text-red-100",
  "active:100": "active:text-red-100",
  "disabled:100": "disabled:text-red-100",
  "group-hover:100": "group-hover:text-red-100",
  "group:100": "group:text-red-100",
  "first:100": "first:text-red-100",
  "last:100": "last:text-red-100",
  "odd:100": "odd:text-red-100",
  "even:100": "even:text-red-100",
  "dark:100": "dark:text-red-100",
  "200": "text-red-200",
  "xs:200": "xs:text-red-200",
  "sm:200": "sm:text-red-200",
  "md:200": "md:text-red-200",
  "lg:200": "lg:text-red-200",
  "xl:200": "xl:text-red-200",
  "2xl:200": "2xl:text-red-200",
  "hover:200": "hover:text-red-200",
  "focus:200": "focus:text-red-200",
  "active:200": "active:text-red-200",
  "disabled:200": "disabled:text-red-200",
  "group-hover:200": "group-hover:text-red-200",
  "group:200": "group:text-red-200",
  "first:200": "first:text-red-200",
  "last:200": "last:text-red-200",
  "odd:200": "odd:text-red-200",
  "even:200": "even:text-red-200",
  "dark:200": "dark:text-red-200",
  "300": "text-red-300",
  "xs:300": "xs:text-red-300",
  "sm:300": "sm:text-red-300",
  "md:300": "md:text-red-300",
  "lg:300": "lg:text-red-300",
  "xl:300": "xl:text-red-300",
  "2xl:300": "2xl:text-red-300",
  "hover:300": "hover:text-red-300",
  "focus:300": "focus:text-red-300",
  "active:300": "active:text-red-300",
  "disabled:300": "disabled:text-red-300",
  "group-hover:300": "group-hover:text-red-300",
  "group:300": "group:text-red-300",
  "first:300": "first:text-red-300",
  "last:300": "last:text-red-300",
  "odd:300": "odd:text-red-300",
  "even:300": "even:text-red-300",
  "dark:300": "dark:text-red-300",
  "400": "text-red-400",
  "xs:400": "xs:text-red-400",
  "sm:400": "sm:text-red-400",
  "md:400": "md:text-red-400",
  "lg:400": "lg:text-red-400",
  "xl:400": "xl:text-red-400",
  "2xl:400": "2xl:text-red-400",
  "hover:400": "hover:text-red-400",
  "focus:400": "focus:text-red-400",
  "active:400": "active:text-red-400",
  "disabled:400": "disabled:text-red-400",
  "group-hover:400": "group-hover:text-red-400",
  "group:400": "group:text-red-400",
  "first:400": "first:text-red-400",
  "last:400": "last:text-red-400",
  "odd:400": "odd:text-red-400",
  "even:400": "even:text-red-400",
  "dark:400": "dark:text-red-400",
  "500": "text-red-500",
  "xs:500": "xs:text-red-500",
  "sm:500": "sm:text-red-500",
  "md:500": "md:text-red-500",
  "lg:500": "lg:text-red-500",
  "xl:500": "xl:text-red-500",
  "2xl:500": "2xl:text-red-500",
  "hover:500": "hover:text-red-500",
  "focus:500": "focus:text-red-500",
  "active:500": "active:text-red-500",
  "disabled:500": "disabled:text-red-500",
  "group-hover:500": "group-hover:text-red-500",
  "group:500": "group:text-red-500",
  "first:500": "first:text-red-500",
  "last:500": "last:text-red-500",
  "odd:500": "odd:text-red-500",
  "even:500": "even:text-red-500",
  "dark:500": "dark:text-red-500",
  "600": "text-red-600",
  "xs:600": "xs:text-red-600",
  "sm:600": "sm:text-red-600",
  "md:600": "md:text-red-600",
  "lg:600": "lg:text-red-600",
  "xl:600": "xl:text-red-600",
  "2xl:600": "2xl:text-red-600",
  "hover:600": "hover:text-red-600",
  "focus:600": "focus:text-red-600",
  "active:600": "active:text-red-600",
  "disabled:600": "disabled:text-red-600",
  "group-hover:600": "group-hover:text-red-600",
  "group:600": "group:text-red-600",
  "first:600": "first:text-red-600",
  "last:600": "last:text-red-600",
  "odd:600": "odd:text-red-600",
  "even:600": "even:text-red-600",
  "dark:600": "dark:text-red-600",
  "700": "text-red-700",
  "xs:700": "xs:text-red-700",
  "sm:700": "sm:text-red-700",
  "md:700": "md:text-red-700",
  "lg:700": "lg:text-red-700",
  "xl:700": "xl:text-red-700",
  "2xl:700": "2xl:text-red-700",
  "hover:700": "hover:text-red-700",
  "focus:700": "focus:text-red-700",
  "active:700": "active:text-red-700",
  "disabled:700": "disabled:text-red-700",
  "group-hover:700": "group-hover:text-red-700",
  "group:700": "group:text-red-700",
  "first:700": "first:text-red-700",
  "last:700": "last:text-red-700",
  "odd:700": "odd:text-red-700",
  "even:700": "even:text-red-700",
  "dark:700": "dark:text-red-700",
  "800": "text-red-800",
  "xs:800": "xs:text-red-800",
  "sm:800": "sm:text-red-800",
  "md:800": "md:text-red-800",
  "lg:800": "lg:text-red-800",
  "xl:800": "xl:text-red-800",
  "2xl:800": "2xl:text-red-800",
  "hover:800": "hover:text-red-800",
  "focus:800": "focus:text-red-800",
  "active:800": "active:text-red-800",
  "disabled:800": "disabled:text-red-800",
  "group-hover:800": "group-hover:text-red-800",
  "group:800": "group:text-red-800",
  "first:800": "first:text-red-800",
  "last:800": "last:text-red-800",
  "odd:800": "odd:text-red-800",
  "even:800": "even:text-red-800",
  "dark:800": "dark:text-red-800",
  "900": "text-red-900",
  "xs:900": "xs:text-red-900",
  "sm:900": "sm:text-red-900",
  "md:900": "md:text-red-900",
  "lg:900": "lg:text-red-900",
  "xl:900": "xl:text-red-900",
  "2xl:900": "2xl:text-red-900",
  "hover:900": "hover:text-red-900",
  "focus:900": "focus:text-red-900",
  "active:900": "active:text-red-900",
  "disabled:900": "disabled:text-red-900",
  "group-hover:900": "group-hover:text-red-900",
  "group:900": "group:text-red-900",
  "first:900": "first:text-red-900",
  "last:900": "last:text-red-900",
  "odd:900": "odd:text-red-900",
  "even:900": "even:text-red-900",
  "dark:900": "dark:text-red-900",
  "950": "text-red-950",
  "xs:950": "xs:text-red-950",
  "sm:950": "sm:text-red-950",
  "md:950": "md:text-red-950",
  "lg:950": "lg:text-red-950",
  "xl:950": "xl:text-red-950",
  "2xl:950": "2xl:text-red-950",
  "hover:950": "hover:text-red-950",
  "focus:950": "focus:text-red-950",
  "active:950": "active:text-red-950",
  "disabled:950": "disabled:text-red-950",
  "group-hover:950": "group-hover:text-red-950",
  "group:950": "group:text-red-950",
  "first:950": "first:text-red-950",
  "last:950": "last:text-red-950",
  "odd:950": "odd:text-red-950",
  "even:950": "even:text-red-950",
  "dark:950": "dark:text-red-950",
} as const;