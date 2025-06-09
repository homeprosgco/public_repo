// import { Typography, TypographySize } from "../../interface";

export const DEFAULT_TYPOGRAPHY = {
  heading_font: 'Inter',
  body_font: 'Inter',
  base_font_size: '16px',
  font: {
    primary: 'Inter',
    secondary: 'Inter',
    accent: 'Inter',
  },
  font_urls: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  ],
  display: baseSize(),
  headline: baseSize(),
  title: baseSize(),
  body: baseSize(),
  label: baseSize(),
};

function baseSize() {
  return {
    large: { size: '2rem', weight: '600', lineHeight: '1.25' },
    medium: { size: '1.5rem', weight: '500', lineHeight: '1.4' },
    small: { size: '1.125rem', weight: '400', lineHeight: '1.5' },
  };
}
