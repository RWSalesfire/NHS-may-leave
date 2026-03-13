// Semantic HTML wrappers for web — render actual HTML elements instead of divs/spans.
// On native platforms, these fall back to View/Text.
import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';

const RESET_HEADING = { margin: 0, padding: 0 };

function flattenStyle(style) {
  if (!style) return {};
  return StyleSheet.flatten(style);
}

// Flex-related style keys that require the element to be a flex container.
// When any of these are present, we inject display:flex so raw HTML elements
// behave the same as React Native Web's View.
const FLEX_KEYS = new Set([
  'flexDirection', 'justifyContent', 'alignItems', 'alignContent',
  'flexWrap', 'gap', 'rowGap', 'columnGap',
]);

function needsFlex(styleObj) {
  for (const key in styleObj) {
    if (FLEX_KEYS.has(key)) return true;
  }
  return false;
}

function createSemanticView(tag) {
  if (Platform.OS !== 'web') return View;

  return React.forwardRef(function SemanticView({ style, ...props }, ref) {
    const flat = flattenStyle(style);
    const merged = needsFlex(flat) ? { display: 'flex', boxSizing: 'border-box', ...flat } : { boxSizing: 'border-box', ...flat };
    return React.createElement(tag, { ...props, ref, style: merged });
  });
}

// React Native treats lineHeight as absolute pixels, but CSS treats unitless
// line-height as a multiplier of font-size. Convert to px string for raw elements.
function fixTextStyles(styleObj) {
  if (styleObj && typeof styleObj.lineHeight === 'number') {
    return { ...styleObj, lineHeight: styleObj.lineHeight + 'px' };
  }
  return styleObj;
}

function createSemanticText(tag, resetStyle) {
  if (Platform.OS !== 'web') return Text;

  return React.forwardRef(function SemanticText({ style, ...props }, ref) {
    const merged = resetStyle
      ? { ...resetStyle, ...flattenStyle(style) }
      : flattenStyle(style);
    return React.createElement(tag, { ...props, ref, style: fixTextStyles(merged) });
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
