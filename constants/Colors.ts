export const Colors = {
  light: {
    primary: '#3EB489',    // Mint green
    secondary: '#98E4C7',  // Lighter mint
    background: '#FFFFFF',
    text: '#2C3E50',      // Dark blue-gray
    secondaryText: '#7F8C8D',
    border: '#E8F6F1',    // Very light mint
    card: '#FFFFFF',
    success: '#2ECC71',
    error: '#E74C3C',
    accent: '#40826D',    // Darker mint for contrast
  },
  dark: {
    primary: '#3EB489',    // Keep mint green consistent
    secondary: '#2C8C6D',  // Darker mint for dark mode
    background: '#1A1A1A',
    text: '#FFFFFF',
    secondaryText: '#B2BEC3',
    border: '#2C3E50',
    card: '#2D2D2D',
    success: '#2ECC71',
    error: '#E74C3C',
    accent: '#98E4C7',    // Lighter mint for dark mode contrast
  },
} as const;

export type ThemeColors = typeof Colors.light;