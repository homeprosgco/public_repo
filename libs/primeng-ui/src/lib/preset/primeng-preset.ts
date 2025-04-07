import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const ThemePreset = definePreset(Aura, {
  extend: {
    colors: {
      primary: '#6250A4',
      onPrimary: '#FFFFFF',
      primaryContainer: '#EADDFF',
      onPrimaryContainer: '#21005D',

      secondary: '#625B71',
      onSecondary: '#FFFFFF',
      secondaryContainer: '#E8DEF8',
      onSecondaryContainer: '#1D192B',

      tertiary: '#7D5260',
      onTertiary: '#FFFFFF',
      tertiaryContainer: '#FFD8E4',
      onTertiaryContainer: '#31111D',

      error: '#B3261E',
      onError: '#FFFFFF',
      errorContainer: '#F9DEDC',
      onErrorContainer: '#410E0B',

      primaryFixed: '#D0BCFF',
      primaryFixedDim: '#B69DF8',
      onPrimaryFixed: '#21005D',
      onPrimaryFixedVariant: '#4F378B',

      secondaryFixed: '#CCC2DC',
      secondaryFixedDim: '#B6A9C5',
      onSecondaryFixed: '#1D192B',
      onSecondaryFixedVariant: '#4A4458',

      tertiaryFixed: '#EFB8C8',
      tertiaryFixedDim: '#D29EA8',
      onTertiaryFixed: '#31111D',
      onTertiaryFixedVariant: '#633B48',

      surfaceDim: '#DED8E1',
      surface: '#FFFBFE',
      surfaceBright: '#F7F2FA',
      surfaceContainerLowest: '#FFFFFF',
      surfaceContainerLow: '#F3EDF7',
      surfaceContainer: '#ECE6F0',
      surfaceContainerHigh: '#E6E0E9',
      surfaceContainerHighest: '#E0DAE3',

      onSurface: '#1C1B1F',
      onSurfaceVariant: '#49454F',
      outline: '#79747E',
      outlineVariant: '#CAC4D0',

      inverseSurface: '#313033',
      inverseOnSurface: '#F4EFF4',
      inversePrimary: '#D0BCFF',

      scrim: '#000000',
      shadow: '#000000',
    },
    typography: {
      display: {
        large: { size: '8rem', weight: '100', lineHeight: '8.125rem' }, // 128px, 64px
        medium: { size: '6rem', weight: '400', lineHeight: '6.125rem' }, // 45px, 52px
        small: { size: '4.5rem', weight: '400', lineHeight: '4.75rem' }, // 36px, 44px
      },
      headline: {
        large: { size: '3.75rem', weight: '400', lineHeight: '3.875rem' }, // 32px, 40px
        medium: { size: '3rem', weight: '400', lineHeight: '3.125rem' }, // 28px, 36px
        small: { size: '2.25rem', weight: '400', lineHeight: '2.5rem' }, // 24px, 32px
      },
      title: {
        large: { size: '1.875rem', weight: '500', lineHeight: '2.25rem' }, // 22px, 28px
        medium: { size: '1.5rem', weight: '500', lineHeight: '2rem' }, // 16px, 24px
        small: { size: '1.25rem', weight: '500', lineHeight: '1.75rem' }, // 14px, 20px
      },
      body: {
        large: { size: '1.125rem', weight: '400', lineHeight: '1.75rem' }, // 16px, 24px
        medium: { size: '1rem', weight: '400', lineHeight: '1.5rem' }, // 14px, 20px
        small: { size: '0.875rem', weight: '400', lineHeight: '1.25rem' }, // 12px, 16px
      },
      label: {
        large: { size: '0.75rem', weight: '500', lineHeight: '1rem' }, // 14px, 20px
        medium: { size: '0.6875rem', weight: '500', lineHeight: '1rem' }, // 12px, 16px
        small: { size: '0.5rem', weight: '500', lineHeight: '0.6875rem' }, // 11px, 16px
      },
      font: {
        primary: "'Inter', sans-serif",
        secondary: "'Playfair Display', serif",
        accent: "'Monoton', cursive",
      },
    },
  },
});
