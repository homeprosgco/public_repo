const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const sharedTailwindConfig = require('../../../libs/tailwind-preset/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
