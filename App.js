import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { colors, spacing } from './src/constants/theme';
import CalculatorInput from './src/components/CalculatorInput';
import ResultsDisplay from './src/components/ResultsDisplay';
import { calculateNetMaternityPay } from './src/utils/maternityCalculations';

export default function App() {
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = ({ annualSalary, pensionPercentage, maternityWeeks, paymentType }) => {
    const calculatedResults = calculateNetMaternityPay(
      annualSalary,
      pensionPercentage,
      maternityWeeks,
      paymentType
    );
    setResults(calculatedResults);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setResults(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {!showResults ? (
          <CalculatorInput onCalculate={handleCalculate} />
        ) : (
          <View style={styles.resultsContainer}>
            <ResultsDisplay results={results} />
            <View style={styles.resetButtonContainer}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={handleReset}
                activeOpacity={0.8}
              >
                <Text style={styles.resetButtonText}>Calculate Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  resultsContainer: {
    flex: 1,
  },
  resetButtonContainer: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
    backgroundColor: colors.background,
  },
  resetButton: {
    backgroundColor: colors.primaryDark,
    borderRadius: 12,
    padding: spacing.md,
    alignItems: 'center',
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  resetButtonText: {
    fontSize: 18,
    color: colors.cardBackground,
    fontWeight: '600',
  },
});
