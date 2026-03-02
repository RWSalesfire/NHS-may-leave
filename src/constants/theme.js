// NHS Maternity Pay Calculator — Warm & Reassuring Theme
// Soft blues, blush/coral/sage accents, rounded elements

export const colors = {
  // Primary — Soft Periwinkle Blue
  primary: '#5B8DB8',
  primaryLight: '#92B4D4',
  primaryDark: '#3D6F99',

  // Accent — Warm Blush Coral
  accent: '#E8907A',
  accentLight: '#F2B5A6',

  // Sage — Calm Green (also used as success)
  sage: '#7BAE8C',
  sageLight: '#A8CDB5',
  sageDark: '#5E9470',

  // Warm Surfaces
  warmCream: '#FDF8F3',
  blush: '#FDE8E3',

  // Backgrounds
  background: '#FDF8F3',
  cardBackground: '#FFFFFF',
  inputBackground: '#FDF8F3',

  // Borders & Dividers
  border: '#E4DDD6',

  // Text
  text: '#1E3048',
  textPrimary: '#1E3048',
  textSecondary: '#5A6B7F',

  // Status
  success: '#7BAE8C',
  warning: '#E8A838',
  error: '#D46B6B',

  // Semantic Surface Tokens (replaces color + hex opacity hacks)
  primarySurface: '#EBF2F8',
  warningSurface: '#FDF3E0',
  successSurface: '#EDF6F0',
  highlightSurface: '#FFF9E6',
  warningCardBg: '#FEF7E8',
  feedbackCardBg: '#F4F6FC',
  legalDivider: '#E4DDD6',
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
    shadowColor: '#1E3048',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },
  md: {
    shadowColor: '#1E3048',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  lg: {
    shadowColor: '#1E3048',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  primary: {
    shadowColor: '#5B8DB8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
};
