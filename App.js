import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { colors } from './src/constants/theme';

// Components
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import TermsOfService from './src/components/TermsOfService';
import PrivacyPolicy from './src/components/PrivacyPolicy';

// Pages
import HomePage from './src/pages/HomePage';
import CalculatorPage from './src/pages/CalculatorPage';
import GuidePage from './src/pages/GuidePage';
import FAQPage from './src/pages/FAQPage';
import BlogPage from './src/pages/BlogPage';
import ForTrustsPage from './src/pages/ForTrustsPage';
import AboutPage from './src/pages/AboutPage';
import ContactPage from './src/pages/ContactPage';

export default function App() {
  // For non-web platforms, show just the calculator
  if (Platform.OS !== 'web') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <CalculatorPage />
      </SafeAreaView>
    );
  }

  // For web platform, use full routing
  return (
    <Router>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.appContainer}>
          <Header />
          <View style={styles.mainContent}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/guide" element={<GuidePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/for-trusts" element={<ForTrustsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </View>
          <Footer />
        </View>
      </SafeAreaView>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  appContainer: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});
