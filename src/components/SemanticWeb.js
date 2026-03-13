// Semantic HTML wrappers for web — render actual HTML elements instead of divs/spans.
// On native platforms, these fall back to View/Text.
//
// Strategy: wrap a real View/Text inside the semantic tag. The semantic tag uses
// display:contents so it's invisible to layout (no box model impact) while
// preserving its meaning for SEO crawlers and screen readers. The inner View/Text
// handles all layout exactly as React Native Web expects.
import React from 'react';
import { Platform, View, Text } from 'react-native';

const CONTENTS = { display: 'contents' };

function createSemanticView(tag) {
  if (Platform.OS !== 'web') return View;

  return React.forwardRef(function SemanticView({ style, children, ...props }, ref) {
    return React.createElement(
      tag,
      { style: CONTENTS },
      React.createElement(View, { ...props, ref, style }, children)
    );
  });
}

function createSemanticText(tag) {
  if (Platform.OS !== 'web') return Text;

  return React.forwardRef(function SemanticText({ style, children, ...props }, ref) {
    return React.createElement(
      tag,
      { style: CONTENTS },
      React.createElement(Text, { ...props, ref, style }, children)
    );
  });
}

export const Header = createSemanticView('header');
export const Nav = createSemanticView('nav');
export const Main = createSemanticView('main');
export const Section = createSemanticView('section');
export const Article = createSemanticView('article');
export const Aside = createSemanticView('aside');
export const FooterEl = createSemanticView('footer');

export const H1 = createSemanticText('h1');
export const H2 = createSemanticText('h2');
export const H3 = createSemanticText('h3');
export const P = createSemanticText('p');
