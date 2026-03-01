import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Link, useLocation } from 'react-router-dom';
import { colors, spacing } from '../constants/theme';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children, onPress }) => {
    const active = isActive(to);

    if (Platform.OS === 'web') {
      return (
        <Link
          to={to}
          onClick={onPress}
          style={{
            textDecoration: 'none',
            padding: `${spacing.sm}px ${spacing.md}px`,
            color: active ? colors.primary : colors.text,
            fontWeight: active ? '600' : '500',
            borderBottom: active ? `2px solid ${colors.primary}` : 'none',
          }}
        >
          {children}
        </Link>
      );
    }

    return (
      <TouchableOpacity onPress={onPress} style={styles.navItem}>
        <Text style={[styles.navText, active && styles.navTextActive]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {/* Logo/Brand */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>NHS Maternity Pay</Text>
            <Text style={styles.logoSubtext}>Calculator</Text>
          </View>
        </Link>

        {/* Desktop Navigation */}
        <View style={styles.desktopNav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/guide">How It Works</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/blog">Resources</NavLink>
          <NavLink to="/for-trusts">For NHS Trusts</NavLink>
        </View>

        {/* Mobile Menu Button */}
        <TouchableOpacity
          style={styles.mobileMenuButton}
          onPress={toggleMenu}
        >
          <Text style={styles.menuIcon}>{menuOpen ? '✕' : '☰'}</Text>
        </TouchableOpacity>
      </View>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    color: colors.primary,
  },
  logoSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  desktopNav: {
    flexDirection: 'row',
    gap: spacing.sm,
    display: Platform.OS === 'web' ? 'flex' : 'none',
  },
  navItem: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  navText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  navTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  mobileMenuButton: {
    display: Platform.OS === 'web' ? 'none' : 'flex',
    padding: spacing.sm,
  },
  menuIcon: {
    fontSize: 24,
    color: colors.text,
  },
  mobileMenu: {
    backgroundColor: colors.background,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
