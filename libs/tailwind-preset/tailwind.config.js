
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '320px'
      },
      width: {
        'md': '28rem',   // 448px
        'lg': '32rem',   // 512px
        'xl': '36rem',   // 576px
        '2xl': '42rem',  // 672px
        '3xl': '48rem',  // 768px
        '4xl': '56rem',  // 896px
        '5xl': '64rem',  // 1024px
        '6xl': '72rem',  // 1152px
        '7xl': '80rem',  // 1280px
      },
      height: {
        'md': '28rem',   // 448px
        'lg': '32rem',   // 512px
        'xl': '36rem',   // 576px
        '2xl': '42rem',  // 672px
        '3xl': '48rem',  // 768px
        '4xl': '56rem',  // 896px
        '5xl': '64rem',  // 1024px
        '6xl': '72rem',  // 1152px
        '7xl': '80rem',  // 1280px
      },
      zIndex: {
        '1': '1',
        '5': '5',
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
        '1000': '1000',
      },
      colors: {
        'primary': 'var(--p-colors-primary)',
        'on-primary': 'var(--p-colors-on-primary)',
        'primary-container': 'var(--p-colors-primary-container)',
        'on-primary-container': 'var(--p-colors-on-primary-container)',
      
        'secondary': 'var(--p-colors-secondary)',
        'on-secondary': 'var(--p-colors-on-secondary)',
        'secondary-container': 'var(--p-colors-secondary-container)',
        'on-secondary-container': 'var(--p-colors-on-secondary-container)',
      
        'tertiary': 'var(--p-colors-tertiary)',
        'on-tertiary': 'var(--p-colors-on-tertiary)',
        'tertiary-container': 'var(--p-colors-tertiary-container)',
        'on-tertiary-container': 'var(--p-colors-on-tertiary-container)',
      
        'error': 'var(--p-colors-error)',
        'on-error': 'var(--p-colors-on-error)',
        'error-container': 'var(--p-colors-error-container)',
        'on-error-container': 'var(--p-colors-on-error-container)',
      
        'primary-fixed': 'var(--p-colors-primary-fixed)',
        'primary-fixed-dim': 'var(--p-colors-primary-fixed-dim)',
        'on-primary-fixed': 'var(--p-colors-on-primary-fixed)',
        'on-primary-fixed-variant': 'var(--p-colors-on-primary-fixed-variant)',
      
        'secondary-fixed': 'var(--p-colors-secondary-fixed)',
        'secondary-fixed-dim': 'var(--p-colors-secondary-fixed-dim)',
        'on-secondary-fixed': 'var(--p-colors-on-secondary-fixed)',
        'on-secondary-fixed-variant': 'var(--p-colors-on-secondary-fixed-variant)',
      
        'tertiary-fixed': 'var(--p-colors-tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--p-colors-tertiary-fixed-dim)',
        'on-tertiary-fixed': 'var(--p-colors-on-tertiary-fixed)',
        'on-tertiary-fixed-variant': 'var(--p-colors-on-tertiary-fixed-variant)',
      
        'surface': 'var(--p-colors-surface)',
        'surface-dim': 'var(--p-colors-surface-dim)',
        'surface-bright': 'var(--p-colors-surface-bright)',
        'surface-container-lowest': 'var(--p-colors-surface-container-lowest)',
        'surface-container-low': 'var(--p-colors-surface-container-low)',
        'surface-container': 'var(--p-colors-surface-container)',
        'surface-container-high': 'var(--p-colors-surface-container-high)',
        'surface-container-highest': 'var(--p-colors-surface-container-highest)',
      
        'on-surface': 'var(--p-colors-on-surface)',
        'on-surface-variant': 'var(--p-colors-on-surface-variant)',
      
        'outline': 'var(--p-colors-outline)',
        'outline-variant': 'var(--p-colors-outline-variant)',
      
        'inverse-surface': 'var(--p-colors-inverse-surface)',
        'inverse-on-surface': 'var(--p-colors-inverse-on-surface)',
        'inverse-primary': 'var(--p-colors-inverse-primary)',
      
        'scrim': 'var(--p-colors-scrim)',
        'shadow': 'var(--p-colors-shadow)',
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
};
