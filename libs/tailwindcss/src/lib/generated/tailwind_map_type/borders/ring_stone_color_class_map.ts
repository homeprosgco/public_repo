import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type RingStoneColorType = 
  | RingStoneColorValue
  | Partial<Record<ResponsiveBreakpoint, RingStoneColorValue>>;

export type RingStoneColorValue = keyof typeof RING_STONE_COLOR_CLASS_MAP;

export const RING_STONE_COLOR_CLASS_MAP = {
  "50": "ring-stone-50",
  "xs:50": "xs:ring-stone-50",
  "sm:50": "sm:ring-stone-50",
  "md:50": "md:ring-stone-50",
  "lg:50": "lg:ring-stone-50",
  "xl:50": "xl:ring-stone-50",
  "2xl:50": "2xl:ring-stone-50",
  "hover:50": "hover:ring-stone-50",
  "focus:50": "focus:ring-stone-50",
  "active:50": "active:ring-stone-50",
  "disabled:50": "disabled:ring-stone-50",
  "group-hover:50": "group-hover:ring-stone-50",
  "group:50": "group:ring-stone-50",
  "first:50": "first:ring-stone-50",
  "last:50": "last:ring-stone-50",
  "odd:50": "odd:ring-stone-50",
  "even:50": "even:ring-stone-50",
  "dark:50": "dark:ring-stone-50",
  "100": "ring-stone-100",
  "xs:100": "xs:ring-stone-100",
  "sm:100": "sm:ring-stone-100",
  "md:100": "md:ring-stone-100",
  "lg:100": "lg:ring-stone-100",
  "xl:100": "xl:ring-stone-100",
  "2xl:100": "2xl:ring-stone-100",
  "hover:100": "hover:ring-stone-100",
  "focus:100": "focus:ring-stone-100",
  "active:100": "active:ring-stone-100",
  "disabled:100": "disabled:ring-stone-100",
  "group-hover:100": "group-hover:ring-stone-100",
  "group:100": "group:ring-stone-100",
  "first:100": "first:ring-stone-100",
  "last:100": "last:ring-stone-100",
  "odd:100": "odd:ring-stone-100",
  "even:100": "even:ring-stone-100",
  "dark:100": "dark:ring-stone-100",
  "200": "ring-stone-200",
  "xs:200": "xs:ring-stone-200",
  "sm:200": "sm:ring-stone-200",
  "md:200": "md:ring-stone-200",
  "lg:200": "lg:ring-stone-200",
  "xl:200": "xl:ring-stone-200",
  "2xl:200": "2xl:ring-stone-200",
  "hover:200": "hover:ring-stone-200",
  "focus:200": "focus:ring-stone-200",
  "active:200": "active:ring-stone-200",
  "disabled:200": "disabled:ring-stone-200",
  "group-hover:200": "group-hover:ring-stone-200",
  "group:200": "group:ring-stone-200",
  "first:200": "first:ring-stone-200",
  "last:200": "last:ring-stone-200",
  "odd:200": "odd:ring-stone-200",
  "even:200": "even:ring-stone-200",
  "dark:200": "dark:ring-stone-200",
  "300": "ring-stone-300",
  "xs:300": "xs:ring-stone-300",
  "sm:300": "sm:ring-stone-300",
  "md:300": "md:ring-stone-300",
  "lg:300": "lg:ring-stone-300",
  "xl:300": "xl:ring-stone-300",
  "2xl:300": "2xl:ring-stone-300",
  "hover:300": "hover:ring-stone-300",
  "focus:300": "focus:ring-stone-300",
  "active:300": "active:ring-stone-300",
  "disabled:300": "disabled:ring-stone-300",
  "group-hover:300": "group-hover:ring-stone-300",
  "group:300": "group:ring-stone-300",
  "first:300": "first:ring-stone-300",
  "last:300": "last:ring-stone-300",
  "odd:300": "odd:ring-stone-300",
  "even:300": "even:ring-stone-300",
  "dark:300": "dark:ring-stone-300",
  "400": "ring-stone-400",
  "xs:400": "xs:ring-stone-400",
  "sm:400": "sm:ring-stone-400",
  "md:400": "md:ring-stone-400",
  "lg:400": "lg:ring-stone-400",
  "xl:400": "xl:ring-stone-400",
  "2xl:400": "2xl:ring-stone-400",
  "hover:400": "hover:ring-stone-400",
  "focus:400": "focus:ring-stone-400",
  "active:400": "active:ring-stone-400",
  "disabled:400": "disabled:ring-stone-400",
  "group-hover:400": "group-hover:ring-stone-400",
  "group:400": "group:ring-stone-400",
  "first:400": "first:ring-stone-400",
  "last:400": "last:ring-stone-400",
  "odd:400": "odd:ring-stone-400",
  "even:400": "even:ring-stone-400",
  "dark:400": "dark:ring-stone-400",
  "500": "ring-stone-500",
  "xs:500": "xs:ring-stone-500",
  "sm:500": "sm:ring-stone-500",
  "md:500": "md:ring-stone-500",
  "lg:500": "lg:ring-stone-500",
  "xl:500": "xl:ring-stone-500",
  "2xl:500": "2xl:ring-stone-500",
  "hover:500": "hover:ring-stone-500",
  "focus:500": "focus:ring-stone-500",
  "active:500": "active:ring-stone-500",
  "disabled:500": "disabled:ring-stone-500",
  "group-hover:500": "group-hover:ring-stone-500",
  "group:500": "group:ring-stone-500",
  "first:500": "first:ring-stone-500",
  "last:500": "last:ring-stone-500",
  "odd:500": "odd:ring-stone-500",
  "even:500": "even:ring-stone-500",
  "dark:500": "dark:ring-stone-500",
  "600": "ring-stone-600",
  "xs:600": "xs:ring-stone-600",
  "sm:600": "sm:ring-stone-600",
  "md:600": "md:ring-stone-600",
  "lg:600": "lg:ring-stone-600",
  "xl:600": "xl:ring-stone-600",
  "2xl:600": "2xl:ring-stone-600",
  "hover:600": "hover:ring-stone-600",
  "focus:600": "focus:ring-stone-600",
  "active:600": "active:ring-stone-600",
  "disabled:600": "disabled:ring-stone-600",
  "group-hover:600": "group-hover:ring-stone-600",
  "group:600": "group:ring-stone-600",
  "first:600": "first:ring-stone-600",
  "last:600": "last:ring-stone-600",
  "odd:600": "odd:ring-stone-600",
  "even:600": "even:ring-stone-600",
  "dark:600": "dark:ring-stone-600",
  "700": "ring-stone-700",
  "xs:700": "xs:ring-stone-700",
  "sm:700": "sm:ring-stone-700",
  "md:700": "md:ring-stone-700",
  "lg:700": "lg:ring-stone-700",
  "xl:700": "xl:ring-stone-700",
  "2xl:700": "2xl:ring-stone-700",
  "hover:700": "hover:ring-stone-700",
  "focus:700": "focus:ring-stone-700",
  "active:700": "active:ring-stone-700",
  "disabled:700": "disabled:ring-stone-700",
  "group-hover:700": "group-hover:ring-stone-700",
  "group:700": "group:ring-stone-700",
  "first:700": "first:ring-stone-700",
  "last:700": "last:ring-stone-700",
  "odd:700": "odd:ring-stone-700",
  "even:700": "even:ring-stone-700",
  "dark:700": "dark:ring-stone-700",
  "800": "ring-stone-800",
  "xs:800": "xs:ring-stone-800",
  "sm:800": "sm:ring-stone-800",
  "md:800": "md:ring-stone-800",
  "lg:800": "lg:ring-stone-800",
  "xl:800": "xl:ring-stone-800",
  "2xl:800": "2xl:ring-stone-800",
  "hover:800": "hover:ring-stone-800",
  "focus:800": "focus:ring-stone-800",
  "active:800": "active:ring-stone-800",
  "disabled:800": "disabled:ring-stone-800",
  "group-hover:800": "group-hover:ring-stone-800",
  "group:800": "group:ring-stone-800",
  "first:800": "first:ring-stone-800",
  "last:800": "last:ring-stone-800",
  "odd:800": "odd:ring-stone-800",
  "even:800": "even:ring-stone-800",
  "dark:800": "dark:ring-stone-800",
  "900": "ring-stone-900",
  "xs:900": "xs:ring-stone-900",
  "sm:900": "sm:ring-stone-900",
  "md:900": "md:ring-stone-900",
  "lg:900": "lg:ring-stone-900",
  "xl:900": "xl:ring-stone-900",
  "2xl:900": "2xl:ring-stone-900",
  "hover:900": "hover:ring-stone-900",
  "focus:900": "focus:ring-stone-900",
  "active:900": "active:ring-stone-900",
  "disabled:900": "disabled:ring-stone-900",
  "group-hover:900": "group-hover:ring-stone-900",
  "group:900": "group:ring-stone-900",
  "first:900": "first:ring-stone-900",
  "last:900": "last:ring-stone-900",
  "odd:900": "odd:ring-stone-900",
  "even:900": "even:ring-stone-900",
  "dark:900": "dark:ring-stone-900",
  "950": "ring-stone-950",
  "xs:950": "xs:ring-stone-950",
  "sm:950": "sm:ring-stone-950",
  "md:950": "md:ring-stone-950",
  "lg:950": "lg:ring-stone-950",
  "xl:950": "xl:ring-stone-950",
  "2xl:950": "2xl:ring-stone-950",
  "hover:950": "hover:ring-stone-950",
  "focus:950": "focus:ring-stone-950",
  "active:950": "active:ring-stone-950",
  "disabled:950": "disabled:ring-stone-950",
  "group-hover:950": "group-hover:ring-stone-950",
  "group:950": "group:ring-stone-950",
  "first:950": "first:ring-stone-950",
  "last:950": "last:ring-stone-950",
  "odd:950": "odd:ring-stone-950",
  "even:950": "even:ring-stone-950",
  "dark:950": "dark:ring-stone-950",
} as const;