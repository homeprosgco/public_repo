import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type RingZincColorType = 
  | RingZincColorValue
  | Partial<Record<ResponsiveBreakpoint, RingZincColorValue>>;

export type RingZincColorValue = keyof typeof RING_ZINC_COLOR_CLASS_MAP;

export const RING_ZINC_COLOR_CLASS_MAP = {
  "50": "ring-zinc-50",
  "xs:50": "xs:ring-zinc-50",
  "sm:50": "sm:ring-zinc-50",
  "md:50": "md:ring-zinc-50",
  "lg:50": "lg:ring-zinc-50",
  "xl:50": "xl:ring-zinc-50",
  "2xl:50": "2xl:ring-zinc-50",
  "hover:50": "hover:ring-zinc-50",
  "focus:50": "focus:ring-zinc-50",
  "active:50": "active:ring-zinc-50",
  "disabled:50": "disabled:ring-zinc-50",
  "group-hover:50": "group-hover:ring-zinc-50",
  "group:50": "group:ring-zinc-50",
  "first:50": "first:ring-zinc-50",
  "last:50": "last:ring-zinc-50",
  "odd:50": "odd:ring-zinc-50",
  "even:50": "even:ring-zinc-50",
  "dark:50": "dark:ring-zinc-50",
  "100": "ring-zinc-100",
  "xs:100": "xs:ring-zinc-100",
  "sm:100": "sm:ring-zinc-100",
  "md:100": "md:ring-zinc-100",
  "lg:100": "lg:ring-zinc-100",
  "xl:100": "xl:ring-zinc-100",
  "2xl:100": "2xl:ring-zinc-100",
  "hover:100": "hover:ring-zinc-100",
  "focus:100": "focus:ring-zinc-100",
  "active:100": "active:ring-zinc-100",
  "disabled:100": "disabled:ring-zinc-100",
  "group-hover:100": "group-hover:ring-zinc-100",
  "group:100": "group:ring-zinc-100",
  "first:100": "first:ring-zinc-100",
  "last:100": "last:ring-zinc-100",
  "odd:100": "odd:ring-zinc-100",
  "even:100": "even:ring-zinc-100",
  "dark:100": "dark:ring-zinc-100",
  "200": "ring-zinc-200",
  "xs:200": "xs:ring-zinc-200",
  "sm:200": "sm:ring-zinc-200",
  "md:200": "md:ring-zinc-200",
  "lg:200": "lg:ring-zinc-200",
  "xl:200": "xl:ring-zinc-200",
  "2xl:200": "2xl:ring-zinc-200",
  "hover:200": "hover:ring-zinc-200",
  "focus:200": "focus:ring-zinc-200",
  "active:200": "active:ring-zinc-200",
  "disabled:200": "disabled:ring-zinc-200",
  "group-hover:200": "group-hover:ring-zinc-200",
  "group:200": "group:ring-zinc-200",
  "first:200": "first:ring-zinc-200",
  "last:200": "last:ring-zinc-200",
  "odd:200": "odd:ring-zinc-200",
  "even:200": "even:ring-zinc-200",
  "dark:200": "dark:ring-zinc-200",
  "300": "ring-zinc-300",
  "xs:300": "xs:ring-zinc-300",
  "sm:300": "sm:ring-zinc-300",
  "md:300": "md:ring-zinc-300",
  "lg:300": "lg:ring-zinc-300",
  "xl:300": "xl:ring-zinc-300",
  "2xl:300": "2xl:ring-zinc-300",
  "hover:300": "hover:ring-zinc-300",
  "focus:300": "focus:ring-zinc-300",
  "active:300": "active:ring-zinc-300",
  "disabled:300": "disabled:ring-zinc-300",
  "group-hover:300": "group-hover:ring-zinc-300",
  "group:300": "group:ring-zinc-300",
  "first:300": "first:ring-zinc-300",
  "last:300": "last:ring-zinc-300",
  "odd:300": "odd:ring-zinc-300",
  "even:300": "even:ring-zinc-300",
  "dark:300": "dark:ring-zinc-300",
  "400": "ring-zinc-400",
  "xs:400": "xs:ring-zinc-400",
  "sm:400": "sm:ring-zinc-400",
  "md:400": "md:ring-zinc-400",
  "lg:400": "lg:ring-zinc-400",
  "xl:400": "xl:ring-zinc-400",
  "2xl:400": "2xl:ring-zinc-400",
  "hover:400": "hover:ring-zinc-400",
  "focus:400": "focus:ring-zinc-400",
  "active:400": "active:ring-zinc-400",
  "disabled:400": "disabled:ring-zinc-400",
  "group-hover:400": "group-hover:ring-zinc-400",
  "group:400": "group:ring-zinc-400",
  "first:400": "first:ring-zinc-400",
  "last:400": "last:ring-zinc-400",
  "odd:400": "odd:ring-zinc-400",
  "even:400": "even:ring-zinc-400",
  "dark:400": "dark:ring-zinc-400",
  "500": "ring-zinc-500",
  "xs:500": "xs:ring-zinc-500",
  "sm:500": "sm:ring-zinc-500",
  "md:500": "md:ring-zinc-500",
  "lg:500": "lg:ring-zinc-500",
  "xl:500": "xl:ring-zinc-500",
  "2xl:500": "2xl:ring-zinc-500",
  "hover:500": "hover:ring-zinc-500",
  "focus:500": "focus:ring-zinc-500",
  "active:500": "active:ring-zinc-500",
  "disabled:500": "disabled:ring-zinc-500",
  "group-hover:500": "group-hover:ring-zinc-500",
  "group:500": "group:ring-zinc-500",
  "first:500": "first:ring-zinc-500",
  "last:500": "last:ring-zinc-500",
  "odd:500": "odd:ring-zinc-500",
  "even:500": "even:ring-zinc-500",
  "dark:500": "dark:ring-zinc-500",
  "600": "ring-zinc-600",
  "xs:600": "xs:ring-zinc-600",
  "sm:600": "sm:ring-zinc-600",
  "md:600": "md:ring-zinc-600",
  "lg:600": "lg:ring-zinc-600",
  "xl:600": "xl:ring-zinc-600",
  "2xl:600": "2xl:ring-zinc-600",
  "hover:600": "hover:ring-zinc-600",
  "focus:600": "focus:ring-zinc-600",
  "active:600": "active:ring-zinc-600",
  "disabled:600": "disabled:ring-zinc-600",
  "group-hover:600": "group-hover:ring-zinc-600",
  "group:600": "group:ring-zinc-600",
  "first:600": "first:ring-zinc-600",
  "last:600": "last:ring-zinc-600",
  "odd:600": "odd:ring-zinc-600",
  "even:600": "even:ring-zinc-600",
  "dark:600": "dark:ring-zinc-600",
  "700": "ring-zinc-700",
  "xs:700": "xs:ring-zinc-700",
  "sm:700": "sm:ring-zinc-700",
  "md:700": "md:ring-zinc-700",
  "lg:700": "lg:ring-zinc-700",
  "xl:700": "xl:ring-zinc-700",
  "2xl:700": "2xl:ring-zinc-700",
  "hover:700": "hover:ring-zinc-700",
  "focus:700": "focus:ring-zinc-700",
  "active:700": "active:ring-zinc-700",
  "disabled:700": "disabled:ring-zinc-700",
  "group-hover:700": "group-hover:ring-zinc-700",
  "group:700": "group:ring-zinc-700",
  "first:700": "first:ring-zinc-700",
  "last:700": "last:ring-zinc-700",
  "odd:700": "odd:ring-zinc-700",
  "even:700": "even:ring-zinc-700",
  "dark:700": "dark:ring-zinc-700",
  "800": "ring-zinc-800",
  "xs:800": "xs:ring-zinc-800",
  "sm:800": "sm:ring-zinc-800",
  "md:800": "md:ring-zinc-800",
  "lg:800": "lg:ring-zinc-800",
  "xl:800": "xl:ring-zinc-800",
  "2xl:800": "2xl:ring-zinc-800",
  "hover:800": "hover:ring-zinc-800",
  "focus:800": "focus:ring-zinc-800",
  "active:800": "active:ring-zinc-800",
  "disabled:800": "disabled:ring-zinc-800",
  "group-hover:800": "group-hover:ring-zinc-800",
  "group:800": "group:ring-zinc-800",
  "first:800": "first:ring-zinc-800",
  "last:800": "last:ring-zinc-800",
  "odd:800": "odd:ring-zinc-800",
  "even:800": "even:ring-zinc-800",
  "dark:800": "dark:ring-zinc-800",
  "900": "ring-zinc-900",
  "xs:900": "xs:ring-zinc-900",
  "sm:900": "sm:ring-zinc-900",
  "md:900": "md:ring-zinc-900",
  "lg:900": "lg:ring-zinc-900",
  "xl:900": "xl:ring-zinc-900",
  "2xl:900": "2xl:ring-zinc-900",
  "hover:900": "hover:ring-zinc-900",
  "focus:900": "focus:ring-zinc-900",
  "active:900": "active:ring-zinc-900",
  "disabled:900": "disabled:ring-zinc-900",
  "group-hover:900": "group-hover:ring-zinc-900",
  "group:900": "group:ring-zinc-900",
  "first:900": "first:ring-zinc-900",
  "last:900": "last:ring-zinc-900",
  "odd:900": "odd:ring-zinc-900",
  "even:900": "even:ring-zinc-900",
  "dark:900": "dark:ring-zinc-900",
  "950": "ring-zinc-950",
  "xs:950": "xs:ring-zinc-950",
  "sm:950": "sm:ring-zinc-950",
  "md:950": "md:ring-zinc-950",
  "lg:950": "lg:ring-zinc-950",
  "xl:950": "xl:ring-zinc-950",
  "2xl:950": "2xl:ring-zinc-950",
  "hover:950": "hover:ring-zinc-950",
  "focus:950": "focus:ring-zinc-950",
  "active:950": "active:ring-zinc-950",
  "disabled:950": "disabled:ring-zinc-950",
  "group-hover:950": "group-hover:ring-zinc-950",
  "group:950": "group:ring-zinc-950",
  "first:950": "first:ring-zinc-950",
  "last:950": "last:ring-zinc-950",
  "odd:950": "odd:ring-zinc-950",
  "even:950": "even:ring-zinc-950",
  "dark:950": "dark:ring-zinc-950",
} as const;