import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GridTemplateRowsType = 
  | GridTemplateRowsValue
  | Partial<Record<ResponsiveBreakpoint, GridTemplateRowsValue>>;

export type GridTemplateRowsValue = keyof typeof GRID_TEMPLATE_ROWS_CLASS_MAP;

export const GRID_TEMPLATE_ROWS_CLASS_MAP = {
  "none": "grid-rows-none",
  "xs:none": "xs:grid-rows-none",
  "sm:none": "sm:grid-rows-none",
  "md:none": "md:grid-rows-none",
  "lg:none": "lg:grid-rows-none",
  "xl:none": "xl:grid-rows-none",
  "2xl:none": "2xl:grid-rows-none",
  "hover:none": "hover:grid-rows-none",
  "focus:none": "focus:grid-rows-none",
  "active:none": "active:grid-rows-none",
  "disabled:none": "disabled:grid-rows-none",
  "group-hover:none": "group-hover:grid-rows-none",
  "group:none": "group:grid-rows-none",
  "first:none": "first:grid-rows-none",
  "last:none": "last:grid-rows-none",
  "odd:none": "odd:grid-rows-none",
  "even:none": "even:grid-rows-none",
  "dark:none": "dark:grid-rows-none",
  "subgrid": "grid-rows-subgrid",
  "xs:subgrid": "xs:grid-rows-subgrid",
  "sm:subgrid": "sm:grid-rows-subgrid",
  "md:subgrid": "md:grid-rows-subgrid",
  "lg:subgrid": "lg:grid-rows-subgrid",
  "xl:subgrid": "xl:grid-rows-subgrid",
  "2xl:subgrid": "2xl:grid-rows-subgrid",
  "hover:subgrid": "hover:grid-rows-subgrid",
  "focus:subgrid": "focus:grid-rows-subgrid",
  "active:subgrid": "active:grid-rows-subgrid",
  "disabled:subgrid": "disabled:grid-rows-subgrid",
  "group-hover:subgrid": "group-hover:grid-rows-subgrid",
  "group:subgrid": "group:grid-rows-subgrid",
  "first:subgrid": "first:grid-rows-subgrid",
  "last:subgrid": "last:grid-rows-subgrid",
  "odd:subgrid": "odd:grid-rows-subgrid",
  "even:subgrid": "even:grid-rows-subgrid",
  "dark:subgrid": "dark:grid-rows-subgrid",
} as const;