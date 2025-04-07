# Nx Angular Monorepo + Shared Tailwind CSS

🧠 A professional monorepo scaffold using Angular + Nx + shared Tailwind CSS configuration.

## Tech Stack

- Angular (Nx workspace)
- Tailwind CSS with a shared preset
- Nx Libraries for clean architecture
- VS Code in Docker DevContainer

## Why This Repo?

To showcase clean, scalable frontend architecture to potential employers & clients.

🎨 Shared Design Tokens with Tailwind CSS v4 & PrimeNG
This monorepo integrates Tailwind CSS v4+ and PrimeNG v19+ using a shared, tokenized theming system powered by CSS variables.

✅ Theme Architecture Overview
libs/tailwind-preset/theme.css: Defines all Tailwind @theme variables used throughout the app.

Uses CSS custom properties (variables) to ensure consistent values across both Tailwind and PrimeNG components.

PrimeNG provides core theme values via the tailwindcss-primeui plugin, accessible through --p-* variables.

Tailwind consumes these via @theme and generates utility classes like text-color-primary, bg-color-surface, etc.

🧱 How It Works
PrimeNG provides design tokens like:
--p-colors-primary, --p-typography-headline-medium-size, etc.

Tailwind consumes these tokens via @theme variables defined in theme.css:

css
Copy
Edit
@theme {
  --color-primary: var(--p-colors-primary);
  --text-headline-medium: var(--p-typography-headline-medium-size);
  --font-weight-body-large: var(--p-typography-body-large-weight);
}
These are automatically available in your Tailwind classes:

html
Copy
Edit
<h1 class="text-color-primary text-text-headline-medium font-[var(--font-weight-body-large)]">
  Unified typography and color system
</h1>