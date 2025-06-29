import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BackgroundStoneColorType = 
  | BackgroundStoneColorValue
  | Partial<Record<ResponsiveBreakpoint, BackgroundStoneColorValue>>;

export type BackgroundStoneColorValue = keyof typeof BACKGROUND_STONE_COLOR_CLASS_MAP;

export const BACKGROUND_STONE_COLOR_CLASS_MAP = {
  "50": "bg-stone-50",
  "xs:50": "xs:bg-stone-50",
  "sm:50": "sm:bg-stone-50",
  "md:50": "md:bg-stone-50",
  "lg:50": "lg:bg-stone-50",
  "xl:50": "xl:bg-stone-50",
  "2xl:50": "2xl:bg-stone-50",
  "hover:50": "hover:bg-stone-50",
  "focus:50": "focus:bg-stone-50",
  "active:50": "active:bg-stone-50",
  "disabled:50": "disabled:bg-stone-50",
  "group-hover:50": "group-hover:bg-stone-50",
  "group:50": "group:bg-stone-50",
  "first:50": "first:bg-stone-50",
  "last:50": "last:bg-stone-50",
  "odd:50": "odd:bg-stone-50",
  "even:50": "even:bg-stone-50",
  "dark:50": "dark:bg-stone-50",
  "100": "bg-stone-100",
  "xs:100": "xs:bg-stone-100",
  "sm:100": "sm:bg-stone-100",
  "md:100": "md:bg-stone-100",
  "lg:100": "lg:bg-stone-100",
  "xl:100": "xl:bg-stone-100",
  "2xl:100": "2xl:bg-stone-100",
  "hover:100": "hover:bg-stone-100",
  "focus:100": "focus:bg-stone-100",
  "active:100": "active:bg-stone-100",
  "disabled:100": "disabled:bg-stone-100",
  "group-hover:100": "group-hover:bg-stone-100",
  "group:100": "group:bg-stone-100",
  "first:100": "first:bg-stone-100",
  "last:100": "last:bg-stone-100",
  "odd:100": "odd:bg-stone-100",
  "even:100": "even:bg-stone-100",
  "dark:100": "dark:bg-stone-100",
  "200": "bg-stone-200",
  "xs:200": "xs:bg-stone-200",
  "sm:200": "sm:bg-stone-200",
  "md:200": "md:bg-stone-200",
  "lg:200": "lg:bg-stone-200",
  "xl:200": "xl:bg-stone-200",
  "2xl:200": "2xl:bg-stone-200",
  "hover:200": "hover:bg-stone-200",
  "focus:200": "focus:bg-stone-200",
  "active:200": "active:bg-stone-200",
  "disabled:200": "disabled:bg-stone-200",
  "group-hover:200": "group-hover:bg-stone-200",
  "group:200": "group:bg-stone-200",
  "first:200": "first:bg-stone-200",
  "last:200": "last:bg-stone-200",
  "odd:200": "odd:bg-stone-200",
  "even:200": "even:bg-stone-200",
  "dark:200": "dark:bg-stone-200",
  "300": "bg-stone-300",
  "xs:300": "xs:bg-stone-300",
  "sm:300": "sm:bg-stone-300",
  "md:300": "md:bg-stone-300",
  "lg:300": "lg:bg-stone-300",
  "xl:300": "xl:bg-stone-300",
  "2xl:300": "2xl:bg-stone-300",
  "hover:300": "hover:bg-stone-300",
  "focus:300": "focus:bg-stone-300",
  "active:300": "active:bg-stone-300",
  "disabled:300": "disabled:bg-stone-300",
  "group-hover:300": "group-hover:bg-stone-300",
  "group:300": "group:bg-stone-300",
  "first:300": "first:bg-stone-300",
  "last:300": "last:bg-stone-300",
  "odd:300": "odd:bg-stone-300",
  "even:300": "even:bg-stone-300",
  "dark:300": "dark:bg-stone-300",
  "400": "bg-stone-400",
  "xs:400": "xs:bg-stone-400",
  "sm:400": "sm:bg-stone-400",
  "md:400": "md:bg-stone-400",
  "lg:400": "lg:bg-stone-400",
  "xl:400": "xl:bg-stone-400",
  "2xl:400": "2xl:bg-stone-400",
  "hover:400": "hover:bg-stone-400",
  "focus:400": "focus:bg-stone-400",
  "active:400": "active:bg-stone-400",
  "disabled:400": "disabled:bg-stone-400",
  "group-hover:400": "group-hover:bg-stone-400",
  "group:400": "group:bg-stone-400",
  "first:400": "first:bg-stone-400",
  "last:400": "last:bg-stone-400",
  "odd:400": "odd:bg-stone-400",
  "even:400": "even:bg-stone-400",
  "dark:400": "dark:bg-stone-400",
  "500": "bg-stone-500",
  "xs:500": "xs:bg-stone-500",
  "sm:500": "sm:bg-stone-500",
  "md:500": "md:bg-stone-500",
  "lg:500": "lg:bg-stone-500",
  "xl:500": "xl:bg-stone-500",
  "2xl:500": "2xl:bg-stone-500",
  "hover:500": "hover:bg-stone-500",
  "focus:500": "focus:bg-stone-500",
  "active:500": "active:bg-stone-500",
  "disabled:500": "disabled:bg-stone-500",
  "group-hover:500": "group-hover:bg-stone-500",
  "group:500": "group:bg-stone-500",
  "first:500": "first:bg-stone-500",
  "last:500": "last:bg-stone-500",
  "odd:500": "odd:bg-stone-500",
  "even:500": "even:bg-stone-500",
  "dark:500": "dark:bg-stone-500",
  "600": "bg-stone-600",
  "xs:600": "xs:bg-stone-600",
  "sm:600": "sm:bg-stone-600",
  "md:600": "md:bg-stone-600",
  "lg:600": "lg:bg-stone-600",
  "xl:600": "xl:bg-stone-600",
  "2xl:600": "2xl:bg-stone-600",
  "hover:600": "hover:bg-stone-600",
  "focus:600": "focus:bg-stone-600",
  "active:600": "active:bg-stone-600",
  "disabled:600": "disabled:bg-stone-600",
  "group-hover:600": "group-hover:bg-stone-600",
  "group:600": "group:bg-stone-600",
  "first:600": "first:bg-stone-600",
  "last:600": "last:bg-stone-600",
  "odd:600": "odd:bg-stone-600",
  "even:600": "even:bg-stone-600",
  "dark:600": "dark:bg-stone-600",
  "700": "bg-stone-700",
  "xs:700": "xs:bg-stone-700",
  "sm:700": "sm:bg-stone-700",
  "md:700": "md:bg-stone-700",
  "lg:700": "lg:bg-stone-700",
  "xl:700": "xl:bg-stone-700",
  "2xl:700": "2xl:bg-stone-700",
  "hover:700": "hover:bg-stone-700",
  "focus:700": "focus:bg-stone-700",
  "active:700": "active:bg-stone-700",
  "disabled:700": "disabled:bg-stone-700",
  "group-hover:700": "group-hover:bg-stone-700",
  "group:700": "group:bg-stone-700",
  "first:700": "first:bg-stone-700",
  "last:700": "last:bg-stone-700",
  "odd:700": "odd:bg-stone-700",
  "even:700": "even:bg-stone-700",
  "dark:700": "dark:bg-stone-700",
  "800": "bg-stone-800",
  "xs:800": "xs:bg-stone-800",
  "sm:800": "sm:bg-stone-800",
  "md:800": "md:bg-stone-800",
  "lg:800": "lg:bg-stone-800",
  "xl:800": "xl:bg-stone-800",
  "2xl:800": "2xl:bg-stone-800",
  "hover:800": "hover:bg-stone-800",
  "focus:800": "focus:bg-stone-800",
  "active:800": "active:bg-stone-800",
  "disabled:800": "disabled:bg-stone-800",
  "group-hover:800": "group-hover:bg-stone-800",
  "group:800": "group:bg-stone-800",
  "first:800": "first:bg-stone-800",
  "last:800": "last:bg-stone-800",
  "odd:800": "odd:bg-stone-800",
  "even:800": "even:bg-stone-800",
  "dark:800": "dark:bg-stone-800",
  "900": "bg-stone-900",
  "xs:900": "xs:bg-stone-900",
  "sm:900": "sm:bg-stone-900",
  "md:900": "md:bg-stone-900",
  "lg:900": "lg:bg-stone-900",
  "xl:900": "xl:bg-stone-900",
  "2xl:900": "2xl:bg-stone-900",
  "hover:900": "hover:bg-stone-900",
  "focus:900": "focus:bg-stone-900",
  "active:900": "active:bg-stone-900",
  "disabled:900": "disabled:bg-stone-900",
  "group-hover:900": "group-hover:bg-stone-900",
  "group:900": "group:bg-stone-900",
  "first:900": "first:bg-stone-900",
  "last:900": "last:bg-stone-900",
  "odd:900": "odd:bg-stone-900",
  "even:900": "even:bg-stone-900",
  "dark:900": "dark:bg-stone-900",
  "950": "bg-stone-950",
  "xs:950": "xs:bg-stone-950",
  "sm:950": "sm:bg-stone-950",
  "md:950": "md:bg-stone-950",
  "lg:950": "lg:bg-stone-950",
  "xl:950": "xl:bg-stone-950",
  "2xl:950": "2xl:bg-stone-950",
  "hover:950": "hover:bg-stone-950",
  "focus:950": "focus:bg-stone-950",
  "active:950": "active:bg-stone-950",
  "disabled:950": "disabled:bg-stone-950",
  "group-hover:950": "group-hover:bg-stone-950",
  "group:950": "group:bg-stone-950",
  "first:950": "first:bg-stone-950",
  "last:950": "last:bg-stone-950",
  "odd:950": "odd:bg-stone-950",
  "even:950": "even:bg-stone-950",
  "dark:950": "dark:bg-stone-950",
} as const;