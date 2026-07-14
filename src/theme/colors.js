/**
 * Centralized theme color tokens.
 * These match the CSS custom properties configured in our Tailwind theme.
 * Use these constants when referencing color values programmatically (e.g., in GSAP canvas or inline styles).
 */
export const colors = {
  primary: {
    light: '#0f172a', // Slate 900
    dark: '#f8fafc',  // Slate 50
  },
  secondary: {
    light: '#0d9488', // Teal 600
    dark: '#2dd4bf',  // Teal 400
  },
  accent: {
    light: '#10b981', // Emerald 500
    dark: '#34d399',  // Emerald 400
  },
  success: {
    light: '#10b981', // Emerald 500
    dark: '#34d399',  // Emerald 400
  },
  warning: {
    light: '#f59e0b', // Amber 500
    dark: '#fbbf24',  // Amber 400
  },
  error: {
    light: '#ef4444', // Red 500
    dark: '#f87171',  // Red 400
  },
  neutral: {
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    }
  },
  background: {
    light: '#ffffff',
    dark: '#030712', // Gray 950
  },
  surface: {
    light: '#f8fafc',
    dark: '#0b0f19',
  },
  border: {
    light: '#e2e8f0',
    dark: '#1f2937',
  }
};
