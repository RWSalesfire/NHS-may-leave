// Semantic HTML wrappers for web — render actual HTML elements instead of divs/spans.
// On native platforms, these fall back to View/Text.
import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';

const RESET_HEADING = { margin: 0, padding: 0 };

function flattenStyle(style) {
  if (!style) return {};
  return StyleSheet.flatten(style);
}

// React Native Web's View sets display:flex, flexDirection:column, and box-sizing
// by default. Raw HTML elements need these explicitly to behave the same way.
const VIEW_DEFAULTS = {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
};

function createSemanticView(tag) {
  if (Platform.OS !== 'web') return View;

  return React.forwardRef(function SemanticView({ style, ...props }, ref) {
    return React.createElement(tag, { ...props, ref, style: { ...VIEW_DEFAULTS, ...flattenStyle(style) } });
  });
}

function createSemanticText(tag, resetStyle) {
  if (Platform.OS !== 'web') return Text;

  return React.forwardRef(function SemanticText({ style, ...props }, ref) {
    const merged = resetStyle
      ? { ...resetStyle, ...flattenStyle(style) }
      : flattenStyle(style);
    return React.createElement(tag, { ...props, ref, style: merged });
  });
}

export const Header = createSemanticView('header');
export const Nav = createSemanticView('nav');
export const Main = createSemanticView('main');
export const Section = createSemanticView('section');
export const Article = createSemanticView('article');
export const Aside = createSemanticView('aside');
export const FooterEl = createSemanticView('footer');

export const H1 = createSemanticText('h1', RESET_HEADING);
export const H2 = createSemanticText('h2', RESET_HEADING);
export const H3 = createSemanticText('h3', RESET_HEADING);
export const P = createSemanticText('p', RESET_HEADING);
