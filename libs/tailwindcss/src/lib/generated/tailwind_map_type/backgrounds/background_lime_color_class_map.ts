import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BackgroundLimeColorType = 
  | BackgroundLimeColorValue
  | Partial<Record<ResponsiveBreakpoint, BackgroundLimeColorValue>>;

export type BackgroundLimeColorValue = keyof typeof BACKGROUND_LIME_COLOR_CLASS_MAP;

export const BACKGROUND_LIME_COLOR_CLASS_MAP = {
  "50": "bg-lime-50",
  "xs:50": "xs:bg-lime-50",
  "sm:50": "sm:bg-lime-50",
  "md:50": "md:bg-lime-50",
  "lg:50": "lg:bg-lime-50",
  "xl:50": "xl:bg-lime-50",
  "2xl:50": "2xl:bg-lime-50",
  "hover:50": "hover:bg-lime-50",
  "focus:50": "focus:bg-lime-50",
  "active:50": "active:bg-lime-50",
  "disabled:50": "disabled:bg-lime-50",
  "group-hover:50": "group-hover:bg-lime-50",
  "group:50": "group:bg-lime-50",
  "first:50": "first:bg-lime-50",
  "last:50": "last:bg-lime-50",
  "odd:50": "odd:bg-lime-50",
  "even:50": "even:bg-lime-50",
  "dark:50": "dark:bg-lime-50",
  "100": "bg-lime-100",
  "xs:100": "xs:bg-lime-100",
  "sm:100": "sm:bg-lime-100",
  "md:100": "md:bg-lime-100",
  "lg:100": "lg:bg-lime-100",
  "xl:100": "xl:bg-lime-100",
  "2xl:100": "2xl:bg-lime-100",
  "hover:100": "hover:bg-lime-100",
  "focus:100": "focus:bg-lime-100",
  "active:100": "active:bg-lime-100",
  "disabled:100": "disabled:bg-lime-100",
  "group-hover:100": "group-hover:bg-lime-100",
  "group:100": "group:bg-lime-100",
  "first:100": "first:bg-lime-100",
  "last:100": "last:bg-lime-100",
  "odd:100": "odd:bg-lime-100",
  "even:100": "even:bg-lime-100",
  "dark:100": "dark:bg-lime-100",
  "200": "bg-lime-200",
  "xs:200": "xs:bg-lime-200",
  "sm:200": "sm:bg-lime-200",
  "md:200": "md:bg-lime-200",
  "lg:200": "lg:bg-lime-200",
  "xl:200": "xl:bg-lime-200",
  "2xl:200": "2xl:bg-lime-200",
  "hover:200": "hover:bg-lime-200",
  "focus:200": "focus:bg-lime-200",
  "active:200": "active:bg-lime-200",
  "disabled:200": "disabled:bg-lime-200",
  "group-hover:200": "group-hover:bg-lime-200",
  "group:200": "group:bg-lime-200",
  "first:200": "first:bg-lime-200",
  "last:200": "last:bg-lime-200",
  "odd:200": "odd:bg-lime-200",
  "even:200": "even:bg-lime-200",
  "dark:200": "dark:bg-lime-200",
  "300": "bg-lime-300",
  "xs:300": "xs:bg-lime-300",
  "sm:300": "sm:bg-lime-300",
  "md:300": "md:bg-lime-300",
  "lg:300": "lg:bg-lime-300",
  "xl:300": "xl:bg-lime-300",
  "2xl:300": "2xl:bg-lime-300",
  "hover:300": "hover:bg-lime-300",
  "focus:300": "focus:bg-lime-300",
  "active:300": "active:bg-lime-300",
  "disabled:300": "disabled:bg-lime-300",
  "group-hover:300": "group-hover:bg-lime-300",
  "group:300": "group:bg-lime-300",
  "first:300": "first:bg-lime-300",
  "last:300": "last:bg-lime-300",
  "odd:300": "odd:bg-lime-300",
  "even:300": "even:bg-lime-300",
  "dark:300": "dark:bg-lime-300",
  "400": "bg-lime-400",
  "xs:400": "xs:bg-lime-400",
  "sm:400": "sm:bg-lime-400",
  "md:400": "md:bg-lime-400",
  "lg:400": "lg:bg-lime-400",
  "xl:400": "xl:bg-lime-400",
  "2xl:400": "2xl:bg-lime-400",
  "hover:400": "hover:bg-lime-400",
  "focus:400": "focus:bg-lime-400",
  "active:400": "active:bg-lime-400",
  "disabled:400": "disabled:bg-lime-400",
  "group-hover:400": "group-hover:bg-lime-400",
  "group:400": "group:bg-lime-400",
  "first:400": "first:bg-lime-400",
  "last:400": "last:bg-lime-400",
  "odd:400": "odd:bg-lime-400",
  "even:400": "even:bg-lime-400",
  "dark:400": "dark:bg-lime-400",
  "500": "bg-lime-500",
  "xs:500": "xs:bg-lime-500",
  "sm:500": "sm:bg-lime-500",
  "md:500": "md:bg-lime-500",
  "lg:500": "lg:bg-lime-500",
  "xl:500": "xl:bg-lime-500",
  "2xl:500": "2xl:bg-lime-500",
  "hover:500": "hover:bg-lime-500",
  "focus:500": "focus:bg-lime-500",
  "active:500": "active:bg-lime-500",
  "disabled:500": "disabled:bg-lime-500",
  "group-hover:500": "group-hover:bg-lime-500",
  "group:500": "group:bg-lime-500",
  "first:500": "first:bg-lime-500",
  "last:500": "last:bg-lime-500",
  "odd:500": "odd:bg-lime-500",
  "even:500": "even:bg-lime-500",
  "dark:500": "dark:bg-lime-500",
  "600": "bg-lime-600",
  "xs:600": "xs:bg-lime-600",
  "sm:600": "sm:bg-lime-600",
  "md:600": "md:bg-lime-600",
  "lg:600": "lg:bg-lime-600",
  "xl:600": "xl:bg-lime-600",
  "2xl:600": "2xl:bg-lime-600",
  "hover:600": "hover:bg-lime-600",
  "focus:600": "focus:bg-lime-600",
  "active:600": "active:bg-lime-600",
  "disabled:600": "disabled:bg-lime-600",
  "group-hover:600": "group-hover:bg-lime-600",
  "group:600": "group:bg-lime-600",
  "first:600": "first:bg-lime-600",
  "last:600": "last:bg-lime-600",
  "odd:600": "odd:bg-lime-600",
  "even:600": "even:bg-lime-600",
  "dark:600": "dark:bg-lime-600",
  "700": "bg-lime-700",
  "xs:700": "xs:bg-lime-700",
  "sm:700": "sm:bg-lime-700",
  "md:700": "md:bg-lime-700",
  "lg:700": "lg:bg-lime-700",
  "xl:700": "xl:bg-lime-700",
  "2xl:700": "2xl:bg-lime-700",
  "hover:700": "hover:bg-lime-700",
  "focus:700": "focus:bg-lime-700",
  "active:700": "active:bg-lime-700",
  "disabled:700": "disabled:bg-lime-700",
  "group-hover:700": "group-hover:bg-lime-700",
  "group:700": "group:bg-lime-700",
  "first:700": "first:bg-lime-700",
  "last:700": "last:bg-lime-700",
  "odd:700": "odd:bg-lime-700",
  "even:700": "even:bg-lime-700",
  "dark:700": "dark:bg-lime-700",
  "800": "bg-lime-800",
  "xs:800": "xs:bg-lime-800",
  "sm:800": "sm:bg-lime-800",
  "md:800": "md:bg-lime-800",
  "lg:800": "lg:bg-lime-800",
  "xl:800": "xl:bg-lime-800",
  "2xl:800": "2xl:bg-lime-800",
  "hover:800": "hover:bg-lime-800",
  "focus:800": "focus:bg-lime-800",
  "active:800": "active:bg-lime-800",
  "disabled:800": "disabled:bg-lime-800",
  "group-hover:800": "group-hover:bg-lime-800",
  "group:800": "group:bg-lime-800",
  "first:800": "first:bg-lime-800",
  "last:800": "last:bg-lime-800",
  "odd:800": "odd:bg-lime-800",
  "even:800": "even:bg-lime-800",
  "dark:800": "dark:bg-lime-800",
  "900": "bg-lime-900",
  "xs:900": "xs:bg-lime-900",
  "sm:900": "sm:bg-lime-900",
  "md:900": "md:bg-lime-900",
  "lg:900": "lg:bg-lime-900",
  "xl:900": "xl:bg-lime-900",
  "2xl:900": "2xl:bg-lime-900",
  "hover:900": "hover:bg-lime-900",
  "focus:900": "focus:bg-lime-900",
  "active:900": "active:bg-lime-900",
  "disabled:900": "disabled:bg-lime-900",
  "group-hover:900": "group-hover:bg-lime-900",
  "group:900": "group:bg-lime-900",
  "first:900": "first:bg-lime-900",
  "last:900": "last:bg-lime-900",
  "odd:900": "odd:bg-lime-900",
  "even:900": "even:bg-lime-900",
  "dark:900": "dark:bg-lime-900",
  "950": "bg-lime-950",
  "xs:950": "xs:bg-lime-950",
  "sm:950": "sm:bg-lime-950",
  "md:950": "md:bg-lime-950",
  "lg:950": "lg:bg-lime-950",
  "xl:950": "xl:bg-lime-950",
  "2xl:950": "2xl:bg-lime-950",
  "hover:950": "hover:bg-lime-950",
  "focus:950": "focus:bg-lime-950",
  "active:950": "active:bg-lime-950",
  "disabled:950": "disabled:bg-lime-950",
  "group-hover:950": "group-hover:bg-lime-950",
  "group:950": "group:bg-lime-950",
  "first:950": "first:bg-lime-950",
  "last:950": "last:bg-lime-950",
  "odd:950": "odd:bg-lime-950",
  "even:950": "even:bg-lime-950",
  "dark:950": "dark:bg-lime-950",
} as const;