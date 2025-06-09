import { TAILWIND_CLASS_MAP } from "./types/tailwind_class_map_lookup";
import { TailwindMapKeys, TailwindMapValues } from "./types";

/**
 * Utility function to generate a Tailwind CSS class string from a responsive object or single value.
 *
 * @template R - The valid responsive key type (e.g., "base", "sm", "md", etc.).
 * @template V - The valid value type (string or number).
 * @param key - A responsive object (e.g., `{ base: 4, md: 6 }`) or a single value (`4`, `"md:4"`).
 * @param mapType - The name of the map in `TAILWIND_CLASS_MAP` to use for lookup.
 * @returns A Tailwind CSS class string.
 *
 * @example
 * console.log(generateTailwindClass(4, "COL_END_CLASS_MAP"));
 * // Output: "col-end-4"
 *
 * const responsiveMap = { base: 4, md: 6, xl: "auto" };
 * console.log(generateTailwindClass(responsiveMap, "COL_END_CLASS_MAP"));
 * // Output: "col-end-4 md:col-end-6 xl:col-end-auto"
 */
export function generateTailwindClass<
    R extends string,
    M extends TailwindMapKeys,
    V extends TailwindMapValues<M> | number
>(
    key: Partial<Record<R, V>> | V,
    mapType: M
): string {
    
    const mapKey = `${mapType}_CLASS_MAP`; // Append "_CLASS_MAP"
    const classMap = TAILWIND_CLASS_MAP[mapKey];

    if (!classMap) {
        throw new Error(`Invalid map type: ${mapType}`);
    }

    if (typeof key === "string" || typeof key === "number") {
        return classMap[String(key) as keyof typeof classMap] ?? "";
    }

    return Object.entries(key)
        .map(([breakpoint, value]) => {
            const valueStr = String(value); // Convert number to string
            const lookupKey = breakpoint === "base" ? valueStr : `${breakpoint}:${valueStr}`;
            return classMap[lookupKey as keyof typeof classMap] ?? "";
        })
        .filter(Boolean)
        .join(" ");
}