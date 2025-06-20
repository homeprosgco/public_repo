import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ColorBlueType = 
  | ColorBlueValue
  | Partial<Record<ResponsiveBreakpoint, ColorBlueValue>>;

export type ColorBlueValue = keyof typeof COLOR_BLUE_CLASS_MAP;

export const COLOR_BLUE_CLASS_MAP = {
  "50": "text-blue-50",
  "xs:50": "xs:text-blue-50",
  "sm:50": "sm:text-blue-50",
  "md:50": "md:text-blue-50",
  "lg:50": "lg:text-blue-50",
  "xl:50": "xl:text-blue-50",
  "2xl:50": "2xl:text-blue-50",
  "hover:50": "hover:text-blue-50",
  "focus:50": "focus:text-blue-50",
  "active:50": "active:text-blue-50",
  "disabled:50": "disabled:text-blue-50",
  "group-hover:50": "group-hover:text-blue-50",
  "group:50": "group:text-blue-50",
  "first:50": "first:text-blue-50",
  "last:50": "last:text-blue-50",
  "odd:50": "odd:text-blue-50",
  "even:50": "even:text-blue-50",
  "dark:50": "dark:text-blue-50",
  "100": "text-blue-100",
  "xs:100": "xs:text-blue-100",
  "sm:100": "sm:text-blue-100",
  "md:100": "md:text-blue-100",
  "lg:100": "lg:text-blue-100",
  "xl:100": "xl:text-blue-100",
  "2xl:100": "2xl:text-blue-100",
  "hover:100": "hover:text-blue-100",
  "focus:100": "focus:text-blue-100",
  "active:100": "active:text-blue-100",
  "disabled:100": "disabled:text-blue-100",
  "group-hover:100": "group-hover:text-blue-100",
  "group:100": "group:text-blue-100",
  "first:100": "first:text-blue-100",
  "last:100": "last:text-blue-100",
  "odd:100": "odd:text-blue-100",
  "even:100": "even:text-blue-100",
  "dark:100": "dark:text-blue-100",
  "200": "text-blue-200",
  "xs:200": "xs:text-blue-200",
  "sm:200": "sm:text-blue-200",
  "md:200": "md:text-blue-200",
  "lg:200": "lg:text-blue-200",
  "xl:200": "xl:text-blue-200",
  "2xl:200": "2xl:text-blue-200",
  "hover:200": "hover:text-blue-200",
  "focus:200": "focus:text-blue-200",
  "active:200": "active:text-blue-200",
  "disabled:200": "disabled:text-blue-200",
  "group-hover:200": "group-hover:text-blue-200",
  "group:200": "group:text-blue-200",
  "first:200": "first:text-blue-200",
  "last:200": "last:text-blue-200",
  "odd:200": "odd:text-blue-200",
  "even:200": "even:text-blue-200",
  "dark:200": "dark:text-blue-200",
  "300": "text-blue-300",
  "xs:300": "xs:text-blue-300",
  "sm:300": "sm:text-blue-300",
  "md:300": "md:text-blue-300",
  "lg:300": "lg:text-blue-300",
  "xl:300": "xl:text-blue-300",
  "2xl:300": "2xl:text-blue-300",
  "hover:300": "hover:text-blue-300",
  "focus:300": "focus:text-blue-300",
  "active:300": "active:text-blue-300",
  "disabled:300": "disabled:text-blue-300",
  "group-hover:300": "group-hover:text-blue-300",
  "group:300": "group:text-blue-300",
  "first:300": "first:text-blue-300",
  "last:300": "last:text-blue-300",
  "odd:300": "odd:text-blue-300",
  "even:300": "even:text-blue-300",
  "dark:300": "dark:text-blue-300",
  "400": "text-blue-400",
  "xs:400": "xs:text-blue-400",
  "sm:400": "sm:text-blue-400",
  "md:400": "md:text-blue-400",
  "lg:400": "lg:text-blue-400",
  "xl:400": "xl:text-blue-400",
  "2xl:400": "2xl:text-blue-400",
  "hover:400": "hover:text-blue-400",
  "focus:400": "focus:text-blue-400",
  "active:400": "active:text-blue-400",
  "disabled:400": "disabled:text-blue-400",
  "group-hover:400": "group-hover:text-blue-400",
  "group:400": "group:text-blue-400",
  "first:400": "first:text-blue-400",
  "last:400": "last:text-blue-400",
  "odd:400": "odd:text-blue-400",
  "even:400": "even:text-blue-400",
  "dark:400": "dark:text-blue-400",
  "500": "text-blue-500",
  "xs:500": "xs:text-blue-500",
  "sm:500": "sm:text-blue-500",
  "md:500": "md:text-blue-500",
  "lg:500": "lg:text-blue-500",
  "xl:500": "xl:text-blue-500",
  "2xl:500": "2xl:text-blue-500",
  "hover:500": "hover:text-blue-500",
  "focus:500": "focus:text-blue-500",
  "active:500": "active:text-blue-500",
  "disabled:500": "disabled:text-blue-500",
  "group-hover:500": "group-hover:text-blue-500",
  "group:500": "group:text-blue-500",
  "first:500": "first:text-blue-500",
  "last:500": "last:text-blue-500",
  "odd:500": "odd:text-blue-500",
  "even:500": "even:text-blue-500",
  "dark:500": "dark:text-blue-500",
  "600": "text-blue-600",
  "xs:600": "xs:text-blue-600",
  "sm:600": "sm:text-blue-600",
  "md:600": "md:text-blue-600",
  "lg:600": "lg:text-blue-600",
  "xl:600": "xl:text-blue-600",
  "2xl:600": "2xl:text-blue-600",
  "hover:600": "hover:text-blue-600",
  "focus:600": "focus:text-blue-600",
  "active:600": "active:text-blue-600",
  "disabled:600": "disabled:text-blue-600",
  "group-hover:600": "group-hover:text-blue-600",
  "group:600": "group:text-blue-600",
  "first:600": "first:text-blue-600",
  "last:600": "last:text-blue-600",
  "odd:600": "odd:text-blue-600",
  "even:600": "even:text-blue-600",
  "dark:600": "dark:text-blue-600",
  "700": "text-blue-700",
  "xs:700": "xs:text-blue-700",
  "sm:700": "sm:text-blue-700",
  "md:700": "md:text-blue-700",
  "lg:700": "lg:text-blue-700",
  "xl:700": "xl:text-blue-700",
  "2xl:700": "2xl:text-blue-700",
  "hover:700": "hover:text-blue-700",
  "focus:700": "focus:text-blue-700",
  "active:700": "active:text-blue-700",
  "disabled:700": "disabled:text-blue-700",
  "group-hover:700": "group-hover:text-blue-700",
  "group:700": "group:text-blue-700",
  "first:700": "first:text-blue-700",
  "last:700": "last:text-blue-700",
  "odd:700": "odd:text-blue-700",
  "even:700": "even:text-blue-700",
  "dark:700": "dark:text-blue-700",
  "800": "text-blue-800",
  "xs:800": "xs:text-blue-800",
  "sm:800": "sm:text-blue-800",
  "md:800": "md:text-blue-800",
  "lg:800": "lg:text-blue-800",
  "xl:800": "xl:text-blue-800",
  "2xl:800": "2xl:text-blue-800",
  "hover:800": "hover:text-blue-800",
  "focus:800": "focus:text-blue-800",
  "active:800": "active:text-blue-800",
  "disabled:800": "disabled:text-blue-800",
  "group-hover:800": "group-hover:text-blue-800",
  "group:800": "group:text-blue-800",
  "first:800": "first:text-blue-800",
  "last:800": "last:text-blue-800",
  "odd:800": "odd:text-blue-800",
  "even:800": "even:text-blue-800",
  "dark:800": "dark:text-blue-800",
  "900": "text-blue-900",
  "xs:900": "xs:text-blue-900",
  "sm:900": "sm:text-blue-900",
  "md:900": "md:text-blue-900",
  "lg:900": "lg:text-blue-900",
  "xl:900": "xl:text-blue-900",
  "2xl:900": "2xl:text-blue-900",
  "hover:900": "hover:text-blue-900",
  "focus:900": "focus:text-blue-900",
  "active:900": "active:text-blue-900",
  "disabled:900": "disabled:text-blue-900",
  "group-hover:900": "group-hover:text-blue-900",
  "group:900": "group:text-blue-900",
  "first:900": "first:text-blue-900",
  "last:900": "last:text-blue-900",
  "odd:900": "odd:text-blue-900",
  "even:900": "even:text-blue-900",
  "dark:900": "dark:text-blue-900",
  "950": "text-blue-950",
  "xs:950": "xs:text-blue-950",
  "sm:950": "sm:text-blue-950",
  "md:950": "md:text-blue-950",
  "lg:950": "lg:text-blue-950",
  "xl:950": "xl:text-blue-950",
  "2xl:950": "2xl:text-blue-950",
  "hover:950": "hover:text-blue-950",
  "focus:950": "focus:text-blue-950",
  "active:950": "active:text-blue-950",
  "disabled:950": "disabled:text-blue-950",
  "group-hover:950": "group-hover:text-blue-950",
  "group:950": "group:text-blue-950",
  "first:950": "first:text-blue-950",
  "last:950": "last:text-blue-950",
  "odd:950": "odd:text-blue-950",
  "even:950": "even:text-blue-950",
  "dark:950": "dark:text-blue-950",
} as const;