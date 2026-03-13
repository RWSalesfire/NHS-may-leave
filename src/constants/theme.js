// NHS Maternity Pay Calculator — Professional & Warm Theme
// Confident NHS-adjacent blue, blush/coral/sage accents, refined warmth

export const colors = {
  // Primary — Confident Blue (NHS-inspired, warmer)
  primary: '#2B6CB0',
  primaryLight: '#6BA3D6',
  primaryDark: '#1A4D80',
  primaryMuted: '#8BB8DC',

  // Accent — Warm Blush Coral
  accent: '#E8907A',
  accentLight: '#F2B5A6',
  accentSoft: '#FCEEE9',

  // Sage — Calm Green (also used as success)
  sage: '#7BAE8C',
  sageLight: '#A8CDB5',
  sageDark: '#5E9470',
  sageSoft: '#EEF6F1',

  // Warm Surfaces
  warmCream: '#FDF8F3',
  blush: '#FDE8E3',

  // Backgrounds
  background: '#FAFAF8',
  cardBackground: '#FFFFFF',
  inputBackground: '#FDF8F3',

  // Borders & Dividers
  border: '#E8E4DE',
  borderLight: '#F0ECE6',

  // Text
  text: '#1A2B3D',
  textPrimary: '#1A2B3D',
  textSecondary: '#5A6B7F',
  textMuted: '#8B95A3',

  // Status
  success: '#7BAE8C',
  warning: '#E8A838',
  error: '#D46B6B',

  // Semantic Surface Tokens
  primarySurface: '#EBF2F8',
  warningSurface: '#FDF3E0',
  successSurface: '#EDF6F0',
  highlightSurface: '#FFF9E6',
  warningCardBg: '#FEF7E8',
  feedbackCardBg: '#F4F6FC',
  legalDivider: '#E4DDD6',

  // Hero gradient
  heroGradientStart: '#EBF2F8',
  heroGradientEnd: '#FAFAF8',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
};

export const typography = {
  display: {
    fontSize: 44,
    fontWeight: '700',
    lineHeight: 52,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 36,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  small: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
};

export const fontFamily = {
  regular: 'Nunito_400Regular',
  medium: 'Nunito_500Medium',
  semiBold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
};

export const shadows = {
  sm: {
    shadowColor: '#1A2B3D',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  md: {
    shadowColor: '#1A2B3D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 2,
  },
  lg: {
    shadowColor: '#1A2B3D',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
  },
  primary: {
    shadowColor: '#2B6CB0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 5,
  },
};
