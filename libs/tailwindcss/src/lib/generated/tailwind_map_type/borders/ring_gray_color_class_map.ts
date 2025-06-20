import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type RingGrayColorType = 
  | RingGrayColorValue
  | Partial<Record<ResponsiveBreakpoint, RingGrayColorValue>>;

export type RingGrayColorValue = keyof typeof RING_GRAY_COLOR_CLASS_MAP;

export const RING_GRAY_COLOR_CLASS_MAP = {
  "50": "ring-gray-50",
  "xs:50": "xs:ring-gray-50",
  "sm:50": "sm:ring-gray-50",
  "md:50": "md:ring-gray-50",
  "lg:50": "lg:ring-gray-50",
  "xl:50": "xl:ring-gray-50",
  "2xl:50": "2xl:ring-gray-50",
  "hover:50": "hover:ring-gray-50",
  "focus:50": "focus:ring-gray-50",
  "active:50": "active:ring-gray-50",
  "disabled:50": "disabled:ring-gray-50",
  "group-hover:50": "group-hover:ring-gray-50",
  "group:50": "group:ring-gray-50",
  "first:50": "first:ring-gray-50",
  "last:50": "last:ring-gray-50",
  "odd:50": "odd:ring-gray-50",
  "even:50": "even:ring-gray-50",
  "dark:50": "dark:ring-gray-50",
  "100": "ring-gray-100",
  "xs:100": "xs:ring-gray-100",
  "sm:100": "sm:ring-gray-100",
  "md:100": "md:ring-gray-100",
  "lg:100": "lg:ring-gray-100",
  "xl:100": "xl:ring-gray-100",
  "2xl:100": "2xl:ring-gray-100",
  "hover:100": "hover:ring-gray-100",
  "focus:100": "focus:ring-gray-100",
  "active:100": "active:ring-gray-100",
  "disabled:100": "disabled:ring-gray-100",
  "group-hover:100": "group-hover:ring-gray-100",
  "group:100": "group:ring-gray-100",
  "first:100": "first:ring-gray-100",
  "last:100": "last:ring-gray-100",
  "odd:100": "odd:ring-gray-100",
  "even:100": "even:ring-gray-100",
  "dark:100": "dark:ring-gray-100",
  "200": "ring-gray-200",
  "xs:200": "xs:ring-gray-200",
  "sm:200": "sm:ring-gray-200",
  "md:200": "md:ring-gray-200",
  "lg:200": "lg:ring-gray-200",
  "xl:200": "xl:ring-gray-200",
  "2xl:200": "2xl:ring-gray-200",
  "hover:200": "hover:ring-gray-200",
  "focus:200": "focus:ring-gray-200",
  "active:200": "active:ring-gray-200",
  "disabled:200": "disabled:ring-gray-200",
  "group-hover:200": "group-hover:ring-gray-200",
  "group:200": "group:ring-gray-200",
  "first:200": "first:ring-gray-200",
  "last:200": "last:ring-gray-200",
  "odd:200": "odd:ring-gray-200",
  "even:200": "even:ring-gray-200",
  "dark:200": "dark:ring-gray-200",
  "300": "ring-gray-300",
  "xs:300": "xs:ring-gray-300",
  "sm:300": "sm:ring-gray-300",
  "md:300": "md:ring-gray-300",
  "lg:300": "lg:ring-gray-300",
  "xl:300": "xl:ring-gray-300",
  "2xl:300": "2xl:ring-gray-300",
  "hover:300": "hover:ring-gray-300",
  "focus:300": "focus:ring-gray-300",
  "active:300": "active:ring-gray-300",
  "disabled:300": "disabled:ring-gray-300",
  "group-hover:300": "group-hover:ring-gray-300",
  "group:300": "group:ring-gray-300",
  "first:300": "first:ring-gray-300",
  "last:300": "last:ring-gray-300",
  "odd:300": "odd:ring-gray-300",
  "even:300": "even:ring-gray-300",
  "dark:300": "dark:ring-gray-300",
  "400": "ring-gray-400",
  "xs:400": "xs:ring-gray-400",
  "sm:400": "sm:ring-gray-400",
  "md:400": "md:ring-gray-400",
  "lg:400": "lg:ring-gray-400",
  "xl:400": "xl:ring-gray-400",
  "2xl:400": "2xl:ring-gray-400",
  "hover:400": "hover:ring-gray-400",
  "focus:400": "focus:ring-gray-400",
  "active:400": "active:ring-gray-400",
  "disabled:400": "disabled:ring-gray-400",
  "group-hover:400": "group-hover:ring-gray-400",
  "group:400": "group:ring-gray-400",
  "first:400": "first:ring-gray-400",
  "last:400": "last:ring-gray-400",
  "odd:400": "odd:ring-gray-400",
  "even:400": "even:ring-gray-400",
  "dark:400": "dark:ring-gray-400",
  "500": "ring-gray-500",
  "xs:500": "xs:ring-gray-500",
  "sm:500": "sm:ring-gray-500",
  "md:500": "md:ring-gray-500",
  "lg:500": "lg:ring-gray-500",
  "xl:500": "xl:ring-gray-500",
  "2xl:500": "2xl:ring-gray-500",
  "hover:500": "hover:ring-gray-500",
  "focus:500": "focus:ring-gray-500",
  "active:500": "active:ring-gray-500",
  "disabled:500": "disabled:ring-gray-500",
  "group-hover:500": "group-hover:ring-gray-500",
  "group:500": "group:ring-gray-500",
  "first:500": "first:ring-gray-500",
  "last:500": "last:ring-gray-500",
  "odd:500": "odd:ring-gray-500",
  "even:500": "even:ring-gray-500",
  "dark:500": "dark:ring-gray-500",
  "600": "ring-gray-600",
  "xs:600": "xs:ring-gray-600",
  "sm:600": "sm:ring-gray-600",
  "md:600": "md:ring-gray-600",
  "lg:600": "lg:ring-gray-600",
  "xl:600": "xl:ring-gray-600",
  "2xl:600": "2xl:ring-gray-600",
  "hover:600": "hover:ring-gray-600",
  "focus:600": "focus:ring-gray-600",
  "active:600": "active:ring-gray-600",
  "disabled:600": "disabled:ring-gray-600",
  "group-hover:600": "group-hover:ring-gray-600",
  "group:600": "group:ring-gray-600",
  "first:600": "first:ring-gray-600",
  "last:600": "last:ring-gray-600",
  "odd:600": "odd:ring-gray-600",
  "even:600": "even:ring-gray-600",
  "dark:600": "dark:ring-gray-600",
  "700": "ring-gray-700",
  "xs:700": "xs:ring-gray-700",
  "sm:700": "sm:ring-gray-700",
  "md:700": "md:ring-gray-700",
  "lg:700": "lg:ring-gray-700",
  "xl:700": "xl:ring-gray-700",
  "2xl:700": "2xl:ring-gray-700",
  "hover:700": "hover:ring-gray-700",
  "focus:700": "focus:ring-gray-700",
  "active:700": "active:ring-gray-700",
  "disabled:700": "disabled:ring-gray-700",
  "group-hover:700": "group-hover:ring-gray-700",
  "group:700": "group:ring-gray-700",
  "first:700": "first:ring-gray-700",
  "last:700": "last:ring-gray-700",
  "odd:700": "odd:ring-gray-700",
  "even:700": "even:ring-gray-700",
  "dark:700": "dark:ring-gray-700",
  "800": "ring-gray-800",
  "xs:800": "xs:ring-gray-800",
  "sm:800": "sm:ring-gray-800",
  "md:800": "md:ring-gray-800",
  "lg:800": "lg:ring-gray-800",
  "xl:800": "xl:ring-gray-800",
  "2xl:800": "2xl:ring-gray-800",
  "hover:800": "hover:ring-gray-800",
  "focus:800": "focus:ring-gray-800",
  "active:800": "active:ring-gray-800",
  "disabled:800": "disabled:ring-gray-800",
  "group-hover:800": "group-hover:ring-gray-800",
  "group:800": "group:ring-gray-800",
  "first:800": "first:ring-gray-800",
  "last:800": "last:ring-gray-800",
  "odd:800": "odd:ring-gray-800",
  "even:800": "even:ring-gray-800",
  "dark:800": "dark:ring-gray-800",
  "900": "ring-gray-900",
  "xs:900": "xs:ring-gray-900",
  "sm:900": "sm:ring-gray-900",
  "md:900": "md:ring-gray-900",
  "lg:900": "lg:ring-gray-900",
  "xl:900": "xl:ring-gray-900",
  "2xl:900": "2xl:ring-gray-900",
  "hover:900": "hover:ring-gray-900",
  "focus:900": "focus:ring-gray-900",
  "active:900": "active:ring-gray-900",
  "disabled:900": "disabled:ring-gray-900",
  "group-hover:900": "group-hover:ring-gray-900",
  "group:900": "group:ring-gray-900",
  "first:900": "first:ring-gray-900",
  "last:900": "last:ring-gray-900",
  "odd:900": "odd:ring-gray-900",
  "even:900": "even:ring-gray-900",
  "dark:900": "dark:ring-gray-900",
  "950": "ring-gray-950",
  "xs:950": "xs:ring-gray-950",
  "sm:950": "sm:ring-gray-950",
  "md:950": "md:ring-gray-950",
  "lg:950": "lg:ring-gray-950",
  "xl:950": "xl:ring-gray-950",
  "2xl:950": "2xl:ring-gray-950",
  "hover:950": "hover:ring-gray-950",
  "focus:950": "focus:ring-gray-950",
  "active:950": "active:ring-gray-950",
  "disabled:950": "disabled:ring-gray-950",
  "group-hover:950": "group-hover:ring-gray-950",
  "group:950": "group:ring-gray-950",
  "first:950": "first:ring-gray-950",
  "last:950": "last:ring-gray-950",
  "odd:950": "odd:ring-gray-950",
  "even:950": "even:ring-gray-950",
  "dark:950": "dark:ring-gray-950",
} as const;