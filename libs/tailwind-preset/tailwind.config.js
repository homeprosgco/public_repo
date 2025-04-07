import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      screens: {
        'xs': '320px'
      },
      colors: {
        primary: 'var(--p-colors-primary)',
        onPrimary: 'var(--p-colors-on-primary)',
        primaryContainer: 'var(--p-colors-primary-container)',
        onPrimaryContainer: 'var(--p-colors-on-primary-container)',

        secondary: 'var(--p-colors-secondary)',
        onSecondary: 'var(--p-colors-on-secondary)',
        secondaryContainer: 'var(--p-colors-secondary-container)',
        onSecondaryContainer: 'var(--p-colors-on-secondary-container)',

        tertiary: 'var(--p-colors-tertiary)',
        onTertiary: 'var(--p-colors-on-tertiary)',
        tertiaryContainer: 'var(--p-colors-tertiary-container)',
        onTertiaryContainer: 'var(--p-colors-on-tertiary-container)',

        error: 'var(--p-colors-error)',
        onError: 'var(--p-colors-on-error)',
        errorContainer: 'var(--p-colors-error-container)',
        onErrorContainer: 'var(--p-colors-on-error-container)',

        primaryFixed: 'var(--p-colors-primary-fixed)',
        primaryFixedDim: 'var(--p-colors-primary-fixed-dim)',
        onPrimaryFixed: 'var(--p-colors-on-primary-fixed)',
        onPrimaryFixedVariant: 'var(--p-colors-on-primary-fixed-variant)',

        secondaryFixed: 'var(--p-colors-secondary-fixed)',
        secondaryFixedDim: 'var(--p-colors-secondary-fixed-dim)',
        onSecondaryFixed: 'var(--p-colors-on-secondary-fixed)',
        onSecondaryFixedVariant: 'var(--p-colors-on-secondary-fixed-variant)',

        tertiaryFixed: 'var(--p-colors-tertiary-fixed)',
        tertiaryFixedDim: 'var(--p-colors-tertiary-fixed-dim)',
        onTertiaryFixed: 'var(--p-colors-on-tertiary-fixed)',
        onTertiaryFixedVariant: 'var(--p-colors-on-tertiary-fixed-variant)',

        surface: 'var(--p-colors-surface)',
        surfaceDim: 'var(--p-colors-surface-dim)',
        surfaceBright: 'var(--p-colors-surface-bright)',
        surfaceContainerLowest: 'var(--p-colors-surface-container-lowest)',
        surfaceContainerLow: 'var(--p-colors-surface-container-low)',
        surfaceContainer: 'var(--p-colors-surface-container)',
        surfaceContainerHigh: 'var(--p-colors-surface-container-high)',
        surfaceContainerHighest: 'var(--p-colors-surface-container-highest)',

        onSurface: 'var(--p-colors-on-surface)',
        onSurfaceVariant: 'var(--p-colors-on-surface-variant)',

        outline: 'var(--p-colors-outline)',
        outlineVariant: 'var(--p-colors-outline-variant)',

        inverseSurface: 'var(--p-colors-inverse-surface)',
        inverseOnSurface: 'var(--p-colors-inverse-on-surface)',
        inversePrimary: 'var(--p-colors-inverse-primary)',

        scrim: 'var(--p-colors-scrim)',
        shadow: 'var(--p-colors-shadow)',
      },

      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Playfair Display', 'serif'],
        accent: ['Monoton', 'cursive'],
      },

      fontSize: {
        // Display
        'display-large': [
          'var(--p-typography-display-large-size)',
          {
            lineHeight: 'var(--p-typography-display-large-line-height)',
            fontWeight: 'var(--p-typography-display-large-weight)',
          },
        ],
        'display-medium': [
          'var(--p-typography-display-medium-size)',
          {
            lineHeight: 'var(--p-typography-display-medium-line-height)',
            fontWeight: 'var(--p-typography-display-medium-weight)',
          },
        ],
        'display-small': [
          'var(--p-typography-display-small-size)',
          {
            lineHeight: 'var(--p-typography-display-small-line-height)',
            fontWeight: 'var(--p-typography-display-small-weight)',
          },
        ],

        // Headline
        'headline-large': [
          'var(--p-typography-headline-large-size)',
          {
            lineHeight: 'var(--p-typography-headline-large-line-height)',
            fontWeight: 'var(--p-typography-headline-large-weight)',
          },
        ],
        'headline-medium': [
          'var(--p-typography-headline-medium-size)',
          {
            lineHeight: 'var(--p-typography-headline-medium-line-height)',
            fontWeight: 'var(--p-typography-headline-medium-weight)',
          },
        ],
        'headline-small': [
          'var(--p-typography-headline-small-size)',
          {
            lineHeight: 'var(--p-typography-headline-small-line-height)',
            fontWeight: 'var(--p-typography-headline-small-weight)',
          },
        ],

        // Title
        'title-large': [
          'var(--p-typography-title-large-size)',
          {
            lineHeight: 'var(--p-typography-title-large-line-height)',
            fontWeight: 'var(--p-typography-title-large-weight)',
          },
        ],
        'title-medium': [
          'var(--p-typography-title-medium-size)',
          {
            lineHeight: 'var(--p-typography-title-medium-line-height)',
            fontWeight: 'var(--p-typography-title-medium-weight)',
          },
        ],
        'title-small': [
          'var(--p-typography-title-small-size)',
          {
            lineHeight: 'var(--p-typography-title-small-line-height)',
            fontWeight: 'var(--p-typography-title-small-weight)',
          },
        ],

        // Body
        'body-large': [
          'var(--p-typography-body-large-size)',
          {
            lineHeight: 'var(--p-typography-body-large-line-height)',
            fontWeight: 'var(--p-typography-body-large-weight)',
          },
        ],
        'body-medium': [
          'var(--p-typography-body-medium-size)',
          {
            lineHeight: 'var(--p-typography-body-medium-line-height)',
            fontWeight: 'var(--p-typography-body-medium-weight)',
          },
        ],
        'body-small': [
          'var(--p-typography-body-small-size)',
          {
            lineHeight: 'var(--p-typography-body-small-line-height)',
            fontWeight: 'var(--p-typography-body-small-weight)',
          },
        ],

        // Label
        'label-large': [
          'var(--p-typography-label-large-size)',
          {
            lineHeight: 'var(--p-typography-label-large-line-height)',
            fontWeight: 'var(--p-typography-label-large-weight)',
          },
        ],
        'label-medium': [
          'var(--p-typography-label-medium-size)',
          {
            lineHeight: 'var(--p-typography-label-medium-line-height)',
            fontWeight: 'var(--p-typography-label-medium-weight)',
          },
        ],
        'label-small': [
          'var(--p-typography-label-small-size)',
          {
            lineHeight: 'var(--p-typography-label-small-line-height)',
            fontWeight: 'var(--p-typography-label-small-weight)',
          },
        ],
      },
    },
  },
  plugins: [
    PrimeUI,
  ],
};
