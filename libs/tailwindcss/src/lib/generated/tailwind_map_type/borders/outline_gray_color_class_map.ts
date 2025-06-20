import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type OutlineGrayColorType = 
  | OutlineGrayColorValue
  | Partial<Record<ResponsiveBreakpoint, OutlineGrayColorValue>>;

export type OutlineGrayColorValue = keyof typeof OUTLINE_GRAY_COLOR_CLASS_MAP;

export const OUTLINE_GRAY_COLOR_CLASS_MAP = {
  "50": "outline-gray-50",
  "xs:50": "xs:outline-gray-50",
  "sm:50": "sm:outline-gray-50",
  "md:50": "md:outline-gray-50",
  "lg:50": "lg:outline-gray-50",
  "xl:50": "xl:outline-gray-50",
  "2xl:50": "2xl:outline-gray-50",
  "hover:50": "hover:outline-gray-50",
  "focus:50": "focus:outline-gray-50",
  "active:50": "active:outline-gray-50",
  "disabled:50": "disabled:outline-gray-50",
  "group-hover:50": "group-hover:outline-gray-50",
  "group:50": "group:outline-gray-50",
  "first:50": "first:outline-gray-50",
  "last:50": "last:outline-gray-50",
  "odd:50": "odd:outline-gray-50",
  "even:50": "even:outline-gray-50",
  "dark:50": "dark:outline-gray-50",
  "100": "outline-gray-100",
  "xs:100": "xs:outline-gray-100",
  "sm:100": "sm:outline-gray-100",
  "md:100": "md:outline-gray-100",
  "lg:100": "lg:outline-gray-100",
  "xl:100": "xl:outline-gray-100",
  "2xl:100": "2xl:outline-gray-100",
  "hover:100": "hover:outline-gray-100",
  "focus:100": "focus:outline-gray-100",
  "active:100": "active:outline-gray-100",
  "disabled:100": "disabled:outline-gray-100",
  "group-hover:100": "group-hover:outline-gray-100",
  "group:100": "group:outline-gray-100",
  "first:100": "first:outline-gray-100",
  "last:100": "last:outline-gray-100",
  "odd:100": "odd:outline-gray-100",
  "even:100": "even:outline-gray-100",
  "dark:100": "dark:outline-gray-100",
  "200": "outline-gray-200",
  "xs:200": "xs:outline-gray-200",
  "sm:200": "sm:outline-gray-200",
  "md:200": "md:outline-gray-200",
  "lg:200": "lg:outline-gray-200",
  "xl:200": "xl:outline-gray-200",
  "2xl:200": "2xl:outline-gray-200",
  "hover:200": "hover:outline-gray-200",
  "focus:200": "focus:outline-gray-200",
  "active:200": "active:outline-gray-200",
  "disabled:200": "disabled:outline-gray-200",
  "group-hover:200": "group-hover:outline-gray-200",
  "group:200": "group:outline-gray-200",
  "first:200": "first:outline-gray-200",
  "last:200": "last:outline-gray-200",
  "odd:200": "odd:outline-gray-200",
  "even:200": "even:outline-gray-200",
  "dark:200": "dark:outline-gray-200",
  "300": "outline-gray-300",
  "xs:300": "xs:outline-gray-300",
  "sm:300": "sm:outline-gray-300",
  "md:300": "md:outline-gray-300",
  "lg:300": "lg:outline-gray-300",
  "xl:300": "xl:outline-gray-300",
  "2xl:300": "2xl:outline-gray-300",
  "hover:300": "hover:outline-gray-300",
  "focus:300": "focus:outline-gray-300",
  "active:300": "active:outline-gray-300",
  "disabled:300": "disabled:outline-gray-300",
  "group-hover:300": "group-hover:outline-gray-300",
  "group:300": "group:outline-gray-300",
  "first:300": "first:outline-gray-300",
  "last:300": "last:outline-gray-300",
  "odd:300": "odd:outline-gray-300",
  "even:300": "even:outline-gray-300",
  "dark:300": "dark:outline-gray-300",
  "400": "outline-gray-400",
  "xs:400": "xs:outline-gray-400",
  "sm:400": "sm:outline-gray-400",
  "md:400": "md:outline-gray-400",
  "lg:400": "lg:outline-gray-400",
  "xl:400": "xl:outline-gray-400",
  "2xl:400": "2xl:outline-gray-400",
  "hover:400": "hover:outline-gray-400",
  "focus:400": "focus:outline-gray-400",
  "active:400": "active:outline-gray-400",
  "disabled:400": "disabled:outline-gray-400",
  "group-hover:400": "group-hover:outline-gray-400",
  "group:400": "group:outline-gray-400",
  "first:400": "first:outline-gray-400",
  "last:400": "last:outline-gray-400",
  "odd:400": "odd:outline-gray-400",
  "even:400": "even:outline-gray-400",
  "dark:400": "dark:outline-gray-400",
  "500": "outline-gray-500",
  "xs:500": "xs:outline-gray-500",
  "sm:500": "sm:outline-gray-500",
  "md:500": "md:outline-gray-500",
  "lg:500": "lg:outline-gray-500",
  "xl:500": "xl:outline-gray-500",
  "2xl:500": "2xl:outline-gray-500",
  "hover:500": "hover:outline-gray-500",
  "focus:500": "focus:outline-gray-500",
  "active:500": "active:outline-gray-500",
  "disabled:500": "disabled:outline-gray-500",
  "group-hover:500": "group-hover:outline-gray-500",
  "group:500": "group:outline-gray-500",
  "first:500": "first:outline-gray-500",
  "last:500": "last:outline-gray-500",
  "odd:500": "odd:outline-gray-500",
  "even:500": "even:outline-gray-500",
  "dark:500": "dark:outline-gray-500",
  "600": "outline-gray-600",
  "xs:600": "xs:outline-gray-600",
  "sm:600": "sm:outline-gray-600",
  "md:600": "md:outline-gray-600",
  "lg:600": "lg:outline-gray-600",
  "xl:600": "xl:outline-gray-600",
  "2xl:600": "2xl:outline-gray-600",
  "hover:600": "hover:outline-gray-600",
  "focus:600": "focus:outline-gray-600",
  "active:600": "active:outline-gray-600",
  "disabled:600": "disabled:outline-gray-600",
  "group-hover:600": "group-hover:outline-gray-600",
  "group:600": "group:outline-gray-600",
  "first:600": "first:outline-gray-600",
  "last:600": "last:outline-gray-600",
  "odd:600": "odd:outline-gray-600",
  "even:600": "even:outline-gray-600",
  "dark:600": "dark:outline-gray-600",
  "700": "outline-gray-700",
  "xs:700": "xs:outline-gray-700",
  "sm:700": "sm:outline-gray-700",
  "md:700": "md:outline-gray-700",
  "lg:700": "lg:outline-gray-700",
  "xl:700": "xl:outline-gray-700",
  "2xl:700": "2xl:outline-gray-700",
  "hover:700": "hover:outline-gray-700",
  "focus:700": "focus:outline-gray-700",
  "active:700": "active:outline-gray-700",
  "disabled:700": "disabled:outline-gray-700",
  "group-hover:700": "group-hover:outline-gray-700",
  "group:700": "group:outline-gray-700",
  "first:700": "first:outline-gray-700",
  "last:700": "last:outline-gray-700",
  "odd:700": "odd:outline-gray-700",
  "even:700": "even:outline-gray-700",
  "dark:700": "dark:outline-gray-700",
  "800": "outline-gray-800",
  "xs:800": "xs:outline-gray-800",
  "sm:800": "sm:outline-gray-800",
  "md:800": "md:outline-gray-800",
  "lg:800": "lg:outline-gray-800",
  "xl:800": "xl:outline-gray-800",
  "2xl:800": "2xl:outline-gray-800",
  "hover:800": "hover:outline-gray-800",
  "focus:800": "focus:outline-gray-800",
  "active:800": "active:outline-gray-800",
  "disabled:800": "disabled:outline-gray-800",
  "group-hover:800": "group-hover:outline-gray-800",
  "group:800": "group:outline-gray-800",
  "first:800": "first:outline-gray-800",
  "last:800": "last:outline-gray-800",
  "odd:800": "odd:outline-gray-800",
  "even:800": "even:outline-gray-800",
  "dark:800": "dark:outline-gray-800",
  "900": "outline-gray-900",
  "xs:900": "xs:outline-gray-900",
  "sm:900": "sm:outline-gray-900",
  "md:900": "md:outline-gray-900",
  "lg:900": "lg:outline-gray-900",
  "xl:900": "xl:outline-gray-900",
  "2xl:900": "2xl:outline-gray-900",
  "hover:900": "hover:outline-gray-900",
  "focus:900": "focus:outline-gray-900",
  "active:900": "active:outline-gray-900",
  "disabled:900": "disabled:outline-gray-900",
  "group-hover:900": "group-hover:outline-gray-900",
  "group:900": "group:outline-gray-900",
  "first:900": "first:outline-gray-900",
  "last:900": "last:outline-gray-900",
  "odd:900": "odd:outline-gray-900",
  "even:900": "even:outline-gray-900",
  "dark:900": "dark:outline-gray-900",
  "950": "outline-gray-950",
  "xs:950": "xs:outline-gray-950",
  "sm:950": "sm:outline-gray-950",
  "md:950": "md:outline-gray-950",
  "lg:950": "lg:outline-gray-950",
  "xl:950": "xl:outline-gray-950",
  "2xl:950": "2xl:outline-gray-950",
  "hover:950": "hover:outline-gray-950",
  "focus:950": "focus:outline-gray-950",
  "active:950": "active:outline-gray-950",
  "disabled:950": "disabled:outline-gray-950",
  "group-hover:950": "group-hover:outline-gray-950",
  "group:950": "group:outline-gray-950",
  "first:950": "first:outline-gray-950",
  "last:950": "last:outline-gray-950",
  "odd:950": "odd:outline-gray-950",
  "even:950": "even:outline-gray-950",
  "dark:950": "dark:outline-gray-950",
} as const;