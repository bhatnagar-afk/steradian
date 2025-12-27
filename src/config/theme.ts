// Color Palette
export const colors = {
  // Neutrals
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  // Brand colors
  primary: '#3b82f6', // blue
  secondary: '#6b7280', // gray
  accent: '#fbbf24', // amber/gold
  destructive: '#ef4444', // red
  // Semantic colors
  background: '#ffffff',
  foreground: '#171717',
  darkBackground: '#0a0a0a',
  darkForeground: '#ededed',
  muted: '#f3f4f6',
  mutedForeground: '#6b7280',
}

// Typography
export const fonts = {
  sans: 'Arial, Helvetica, sans-serif',
  serif: 'Georgia, serif',
  mono: 'Courier New, monospace',
}

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
}

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

// Theme variants (light/dark)
export const themes = {
  dark: {
    background: colors.gray[900],
    foreground: colors.white,
    text: colors.white,
    textMuted: colors.gray[300],
    cardBackground: colors.gray[800],
    border: colors.gray[700],
    hover: colors.gray[700],
  },
  light: {
    background: colors.white,
    foreground: colors.gray[900],
    text: colors.gray[900],
    textMuted: colors.gray[600],
    cardBackground: colors.gray[50],
    border: colors.gray[200],
    hover: colors.gray[100],
  },
}

// Spacing
export const spacing = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
}

// Border radius
export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  full: '9999px',
}

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
}

// Z-index
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  overlay: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  sheet: 9999,
}
