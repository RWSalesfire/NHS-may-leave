import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Link, useLocation } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children, onPress }) => {
    const active = isActive(to);
    const hovered = hoveredPath === to;

    return (
      <Link
        to={to}
        onClick={() => {
          if (onPress) onPress();
        }}
        onMouseEnter={() => setHoveredPath(to)}
        onMouseLeave={() => setHoveredPath(null)}
        style={{
          textDecoration: 'none',
          padding: `${spacing.sm}px ${spacing.md}px`,
          color: active ? colors.primary : hovered ? colors.primaryDark : colors.text,
          fontWeight: active ? '700' : '500',
          fontFamily: active ? fontFamily.bold : fontFamily.medium,
          borderBottom: active ? `2px solid ${colors.primary}` : '2px solid transparent',
          transition: 'color 0.2s ease, border-color 0.2s ease',
          fontSize: isMobile ? 16 : 14,
          display: 'block',
          ...(isMobile ? { paddingVertical: 12 } : {}),
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <View style={[styles.header, shadows.md]}>
      <View style={styles.headerContent}>
        {/* Logo/Brand */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>NHS Maternity Pay</Text>
            <Text style={styles.logoSubtext}>Calculator</Text>
          </View>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <View style={styles.desktopNav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/guide">How It Works</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/blog">Resources</NavLink>
            <NavLink to="/for-trusts">For NHS Trusts</NavLink>
            <Link
              to="/calculator"
              style={{ textDecoration: 'none', marginLeft: spacing.sm }}
            >
              <View style={styles.ctaNav}>
                <Text style={styles.ctaNavText}>Calculate Now</Text>
              </View>
            </Link>
          </View>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <TouchableOpacity
            style={styles.mobileMenuButton}
            onPress={() => setMenuOpen(!menuOpen)}
          >
            <Text style={styles.menuIcon}>{menuOpen ? '\u2715' : '\u2630'}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Mobile Menu Dropdown */}
      {menuOpen && isMobile && (
        <View style={styles.mobileMenu}>
          <NavLink to="/" onPress={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/calculator" onPress={() => setMenuOpen(false)}>Calculator</NavLink>
          <NavLink to="/guide" onPress={() => setMenuOpen(false)}>How It Works</NavLink>
          <NavLink to="/faq" onPress={() => setMenuOpen(false)}>FAQ</NavLink>
          <NavLink to="/blog" onPress={() => setMenuOpen(false)}>Resources</NavLink>
          <NavLink to="/for-trusts" onPress={() => setMenuOpen(false)}>For NHS Trusts</NavLink>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'column',
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.primary,
  },
  logoSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
    fontFamily: fontFamily.medium,
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctaNav: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
  },
  ctaNavText: {
    color: colors.cardBackground,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  mobileMenuButton: {
    padding: spacing.sm,
  },
  menuIcon: {
    fontSize: 24,
    color: colors.text,
  },
  mobileMenu: {
    backgroundColor: colors.cardBackground,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
