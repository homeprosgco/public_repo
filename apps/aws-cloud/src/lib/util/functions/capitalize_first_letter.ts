/**
 * ✅ Capitalizes the first letter of a string while keeping the rest unchanged.
 * @param str The input string
 * @returns The formatted string with the first letter capitalized
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
