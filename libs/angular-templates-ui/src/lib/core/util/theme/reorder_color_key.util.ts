// Reorder keys like ['primary', 'onColor'] -> ['on', 'primary']
export function reorderColorKey(path: string[]): string[] {
  const clean = (s: string) => s.replace(/-?color$/i, '');

  if (path.length === 2 && path[1].toLowerCase().startsWith('on')) {
    return [clean(path[1]), clean(path[0])].filter(Boolean); // filter out any empty strings
  }

  return path.map(clean).filter(Boolean);
}