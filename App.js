import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView, Platform, Text, ActivityIndicator } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { colors, fontFamily } from './src/constants/theme';
import useFonts from './src/hooks/useFonts';
import { Main } from './src/components/SemanticWeb';

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

// Band Pages
import BandPage2 from './src/pages/bands/BandPage2';
import BandPage3 from './src/pages/bands/BandPage3';
import BandPage4 from './src/pages/bands/BandPage4';
import BandPage5 from './src/pages/bands/BandPage5';
import BandPage6 from './src/pages/bands/BandPage6';
import BandPage7 from './src/pages/bands/BandPage7';
import BandPage8 from './src/pages/bands/BandPage8';

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
          <ScrollView style={styles.mainContent} contentContainerStyle={styles.mainContentInner}>
            <Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/guide" element={<GuidePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/nhs-maternity-pay-band-2" element={<BandPage2 />} />
              <Route path="/nhs-maternity-pay-band-3" element={<BandPage3 />} />
              <Route path="/nhs-maternity-pay-band-4" element={<BandPage4 />} />
              <Route path="/nhs-maternity-pay-band-5" element={<BandPage5 />} />
              <Route path="/nhs-maternity-pay-band-6" element={<BandPage6 />} />
              <Route path="/nhs-maternity-pay-band-7" element={<BandPage7 />} />
              <Route path="/nhs-maternity-pay-band-8" element={<BandPage8 />} />
              <Route path="/for-trusts" element={<ForTrustsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Main>
            <Footer />
          </ScrollView>
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
  mainContentInner: {
    flexGrow: 1,
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
