import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GradientFromPurpleType = 
  | GradientFromPurpleValue
  | Partial<Record<ResponsiveBreakpoint, GradientFromPurpleValue>>;

export type GradientFromPurpleValue = keyof typeof GRADIENT_FROM_PURPLE_CLASS_MAP;

export const GRADIENT_FROM_PURPLE_CLASS_MAP = {
  "50": "from-purple-50",
  "xs:50": "xs:from-purple-50",
  "sm:50": "sm:from-purple-50",
  "md:50": "md:from-purple-50",
  "lg:50": "lg:from-purple-50",
  "xl:50": "xl:from-purple-50",
  "2xl:50": "2xl:from-purple-50",
  "hover:50": "hover:from-purple-50",
  "focus:50": "focus:from-purple-50",
  "active:50": "active:from-purple-50",
  "disabled:50": "disabled:from-purple-50",
  "group-hover:50": "group-hover:from-purple-50",
  "group:50": "group:from-purple-50",
  "first:50": "first:from-purple-50",
  "last:50": "last:from-purple-50",
  "odd:50": "odd:from-purple-50",
  "even:50": "even:from-purple-50",
  "dark:50": "dark:from-purple-50",
  "100": "from-purple-100",
  "xs:100": "xs:from-purple-100",
  "sm:100": "sm:from-purple-100",
  "md:100": "md:from-purple-100",
  "lg:100": "lg:from-purple-100",
  "xl:100": "xl:from-purple-100",
  "2xl:100": "2xl:from-purple-100",
  "hover:100": "hover:from-purple-100",
  "focus:100": "focus:from-purple-100",
  "active:100": "active:from-purple-100",
  "disabled:100": "disabled:from-purple-100",
  "group-hover:100": "group-hover:from-purple-100",
  "group:100": "group:from-purple-100",
  "first:100": "first:from-purple-100",
  "last:100": "last:from-purple-100",
  "odd:100": "odd:from-purple-100",
  "even:100": "even:from-purple-100",
  "dark:100": "dark:from-purple-100",
  "200": "from-purple-200",
  "xs:200": "xs:from-purple-200",
  "sm:200": "sm:from-purple-200",
  "md:200": "md:from-purple-200",
  "lg:200": "lg:from-purple-200",
  "xl:200": "xl:from-purple-200",
  "2xl:200": "2xl:from-purple-200",
  "hover:200": "hover:from-purple-200",
  "focus:200": "focus:from-purple-200",
  "active:200": "active:from-purple-200",
  "disabled:200": "disabled:from-purple-200",
  "group-hover:200": "group-hover:from-purple-200",
  "group:200": "group:from-purple-200",
  "first:200": "first:from-purple-200",
  "last:200": "last:from-purple-200",
  "odd:200": "odd:from-purple-200",
  "even:200": "even:from-purple-200",
  "dark:200": "dark:from-purple-200",
  "300": "from-purple-300",
  "xs:300": "xs:from-purple-300",
  "sm:300": "sm:from-purple-300",
  "md:300": "md:from-purple-300",
  "lg:300": "lg:from-purple-300",
  "xl:300": "xl:from-purple-300",
  "2xl:300": "2xl:from-purple-300",
  "hover:300": "hover:from-purple-300",
  "focus:300": "focus:from-purple-300",
  "active:300": "active:from-purple-300",
  "disabled:300": "disabled:from-purple-300",
  "group-hover:300": "group-hover:from-purple-300",
  "group:300": "group:from-purple-300",
  "first:300": "first:from-purple-300",
  "last:300": "last:from-purple-300",
  "odd:300": "odd:from-purple-300",
  "even:300": "even:from-purple-300",
  "dark:300": "dark:from-purple-300",
  "400": "from-purple-400",
  "xs:400": "xs:from-purple-400",
  "sm:400": "sm:from-purple-400",
  "md:400": "md:from-purple-400",
  "lg:400": "lg:from-purple-400",
  "xl:400": "xl:from-purple-400",
  "2xl:400": "2xl:from-purple-400",
  "hover:400": "hover:from-purple-400",
  "focus:400": "focus:from-purple-400",
  "active:400": "active:from-purple-400",
  "disabled:400": "disabled:from-purple-400",
  "group-hover:400": "group-hover:from-purple-400",
  "group:400": "group:from-purple-400",
  "first:400": "first:from-purple-400",
  "last:400": "last:from-purple-400",
  "odd:400": "odd:from-purple-400",
  "even:400": "even:from-purple-400",
  "dark:400": "dark:from-purple-400",
  "500": "from-purple-500",
  "xs:500": "xs:from-purple-500",
  "sm:500": "sm:from-purple-500",
  "md:500": "md:from-purple-500",
  "lg:500": "lg:from-purple-500",
  "xl:500": "xl:from-purple-500",
  "2xl:500": "2xl:from-purple-500",
  "hover:500": "hover:from-purple-500",
  "focus:500": "focus:from-purple-500",
  "active:500": "active:from-purple-500",
  "disabled:500": "disabled:from-purple-500",
  "group-hover:500": "group-hover:from-purple-500",
  "group:500": "group:from-purple-500",
  "first:500": "first:from-purple-500",
  "last:500": "last:from-purple-500",
  "odd:500": "odd:from-purple-500",
  "even:500": "even:from-purple-500",
  "dark:500": "dark:from-purple-500",
  "600": "from-purple-600",
  "xs:600": "xs:from-purple-600",
  "sm:600": "sm:from-purple-600",
  "md:600": "md:from-purple-600",
  "lg:600": "lg:from-purple-600",
  "xl:600": "xl:from-purple-600",
  "2xl:600": "2xl:from-purple-600",
  "hover:600": "hover:from-purple-600",
  "focus:600": "focus:from-purple-600",
  "active:600": "active:from-purple-600",
  "disabled:600": "disabled:from-purple-600",
  "group-hover:600": "group-hover:from-purple-600",
  "group:600": "group:from-purple-600",
  "first:600": "first:from-purple-600",
  "last:600": "last:from-purple-600",
  "odd:600": "odd:from-purple-600",
  "even:600": "even:from-purple-600",
  "dark:600": "dark:from-purple-600",
  "700": "from-purple-700",
  "xs:700": "xs:from-purple-700",
  "sm:700": "sm:from-purple-700",
  "md:700": "md:from-purple-700",
  "lg:700": "lg:from-purple-700",
  "xl:700": "xl:from-purple-700",
  "2xl:700": "2xl:from-purple-700",
  "hover:700": "hover:from-purple-700",
  "focus:700": "focus:from-purple-700",
  "active:700": "active:from-purple-700",
  "disabled:700": "disabled:from-purple-700",
  "group-hover:700": "group-hover:from-purple-700",
  "group:700": "group:from-purple-700",
  "first:700": "first:from-purple-700",
  "last:700": "last:from-purple-700",
  "odd:700": "odd:from-purple-700",
  "even:700": "even:from-purple-700",
  "dark:700": "dark:from-purple-700",
  "800": "from-purple-800",
  "xs:800": "xs:from-purple-800",
  "sm:800": "sm:from-purple-800",
  "md:800": "md:from-purple-800",
  "lg:800": "lg:from-purple-800",
  "xl:800": "xl:from-purple-800",
  "2xl:800": "2xl:from-purple-800",
  "hover:800": "hover:from-purple-800",
  "focus:800": "focus:from-purple-800",
  "active:800": "active:from-purple-800",
  "disabled:800": "disabled:from-purple-800",
  "group-hover:800": "group-hover:from-purple-800",
  "group:800": "group:from-purple-800",
  "first:800": "first:from-purple-800",
  "last:800": "last:from-purple-800",
  "odd:800": "odd:from-purple-800",
  "even:800": "even:from-purple-800",
  "dark:800": "dark:from-purple-800",
  "900": "from-purple-900",
  "xs:900": "xs:from-purple-900",
  "sm:900": "sm:from-purple-900",
  "md:900": "md:from-purple-900",
  "lg:900": "lg:from-purple-900",
  "xl:900": "xl:from-purple-900",
  "2xl:900": "2xl:from-purple-900",
  "hover:900": "hover:from-purple-900",
  "focus:900": "focus:from-purple-900",
  "active:900": "active:from-purple-900",
  "disabled:900": "disabled:from-purple-900",
  "group-hover:900": "group-hover:from-purple-900",
  "group:900": "group:from-purple-900",
  "first:900": "first:from-purple-900",
  "last:900": "last:from-purple-900",
  "odd:900": "odd:from-purple-900",
  "even:900": "even:from-purple-900",
  "dark:900": "dark:from-purple-900",
  "950": "from-purple-950",
  "xs:950": "xs:from-purple-950",
  "sm:950": "sm:from-purple-950",
  "md:950": "md:from-purple-950",
  "lg:950": "lg:from-purple-950",
  "xl:950": "xl:from-purple-950",
  "2xl:950": "2xl:from-purple-950",
  "hover:950": "hover:from-purple-950",
  "focus:950": "focus:from-purple-950",
  "active:950": "active:from-purple-950",
  "disabled:950": "disabled:from-purple-950",
  "group-hover:950": "group-hover:from-purple-950",
  "group:950": "group:from-purple-950",
  "first:950": "first:from-purple-950",
  "last:950": "last:from-purple-950",
  "odd:950": "odd:from-purple-950",
  "even:950": "even:from-purple-950",
  "dark:950": "dark:from-purple-950",
} as const;