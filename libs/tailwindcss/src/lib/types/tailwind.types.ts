import { TAILWIND_CLASS_MAP } from "./tailwind_class_map_lookup";

/** 
 * Type to infer keys from TAILWIND_CLASS_MAP
 */
export type TailwindMapKeys = keyof typeof TAILWIND_CLASS_MAP;

/**
 * Infers the valid values for a given Tailwind class map.
 */
export type TailwindMapValues<T extends TailwindMapKeys> = keyof (typeof TAILWIND_CLASS_MAP)[T];

export type TailwindClassMap = {
    [key: string]: Record<string, string>;
};
