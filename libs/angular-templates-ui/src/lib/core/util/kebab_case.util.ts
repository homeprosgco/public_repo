export function kebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // insert dash between camelCase
    .replace(/[\s_]+/g, '-')                // replace underscores or spaces
    .toLowerCase();
}