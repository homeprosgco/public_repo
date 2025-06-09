import { join } from 'path';
import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import sharedTailwindConfig from '../../../libs/tailwind-preset/tailwind.config';

export const presets = [sharedTailwindConfig];
export const content = [
  join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
  ...createGlobPatternsForDependencies(__dirname),
];
