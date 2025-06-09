import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GridTemplateColumnsType = 
  | GridTemplateColumnsValue
  | Partial<Record<ResponsiveBreakpoint, GridTemplateColumnsValue>>;

export type GridTemplateColumnsValue = keyof typeof GRID_TEMPLATE_COLUMNS_CLASS_MAP;

export const GRID_TEMPLATE_COLUMNS_CLASS_MAP = {
  "none": "grid-cols-none",
  "xs:none": "xs:grid-cols-none",
  "sm:none": "sm:grid-cols-none",
  "md:none": "md:grid-cols-none",
  "lg:none": "lg:grid-cols-none",
  "xl:none": "xl:grid-cols-none",
  "2xl:none": "2xl:grid-cols-none",
  "hover:none": "hover:grid-cols-none",
  "focus:none": "focus:grid-cols-none",
  "active:none": "active:grid-cols-none",
  "disabled:none": "disabled:grid-cols-none",
  "group-hover:none": "group-hover:grid-cols-none",
  "group:none": "group:grid-cols-none",
  "first:none": "first:grid-cols-none",
  "last:none": "last:grid-cols-none",
  "odd:none": "odd:grid-cols-none",
  "even:none": "even:grid-cols-none",
  "dark:none": "dark:grid-cols-none",
  "subgrid": "grid-cols-subgrid",
  "xs:subgrid": "xs:grid-cols-subgrid",
  "sm:subgrid": "sm:grid-cols-subgrid",
  "md:subgrid": "md:grid-cols-subgrid",
  "lg:subgrid": "lg:grid-cols-subgrid",
  "xl:subgrid": "xl:grid-cols-subgrid",
  "2xl:subgrid": "2xl:grid-cols-subgrid",
  "hover:subgrid": "hover:grid-cols-subgrid",
  "focus:subgrid": "focus:grid-cols-subgrid",
  "active:subgrid": "active:grid-cols-subgrid",
  "disabled:subgrid": "disabled:grid-cols-subgrid",
  "group-hover:subgrid": "group-hover:grid-cols-subgrid",
  "group:subgrid": "group:grid-cols-subgrid",
  "first:subgrid": "first:grid-cols-subgrid",
  "last:subgrid": "last:grid-cols-subgrid",
  "odd:subgrid": "odd:grid-cols-subgrid",
  "even:subgrid": "even:grid-cols-subgrid",
  "dark:subgrid": "dark:grid-cols-subgrid",
} as const;