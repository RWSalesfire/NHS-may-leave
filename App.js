import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform, Text, ActivityIndicator } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { colors, fontFamily } from './src/constants/theme';
import useFonts from './src/hooks/useFonts';

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
import NotFoundPage from './src/pages/NotFoundPage';

function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingScreen />
      </SafeAreaView>
    );
  }

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
              <Route path="*" element={<NotFoundPage />} />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.textSecondary,
  },
});
