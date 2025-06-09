import { reorderColorKey } from './reorder_color_key.util';

type FlatVars = Record<string, string>;

export function flattenColors(obj: any, prefix = '--p-colors'): FlatVars {
  const flat: FlatVars = {};

  const recurse = (value: any, keyPath: string[] = []) => {
    for (const key in value) {
      const val = value[key];
      const path = [...keyPath, key];

      if (typeof val === 'string') {
        // Reorder: from ['primary', 'onColor'] to ['on', 'primary']
        const parts = reorderColorKey(path);
        const cssVar = `${prefix}-${parts.join('-')}`;
        flat[cssVar] = val;
      } else if (typeof val === 'object') {
        recurse(val, path);
      }
    }
  };

  recurse(obj);
  return flat;
}
