import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { colors, spacing } from '../constants/theme';
import CalculatorInput from '../components/CalculatorInput';
import ResultsDisplay from '../components/ResultsDisplay';
import { calculateNetMaternityPay } from '../utils/maternityCalculations';

export default function CalculatorPage() {
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = ({ annualSalary, pensionPercentage, maternityWeeks, paymentType, fte, annualHolidayDays, kitDays }) => {
    const calculatedResults = calculateNetMaternityPay(
      annualSalary,
      pensionPercentage,
      maternityWeeks,
      paymentType,
      fte,
      annualHolidayDays,
      kitDays
    );
    setResults(calculatedResults);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setResults(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.header}>
            <Text style={styles.title}>NHS Maternity Pay Calculator</Text>
            <Text style={styles.subtitle}>
              Calculate your maternity pay based on NHS Agenda for Change terms
            </Text>
          </View>

          <View style={styles.mainContent}>
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
          </View>

          {/* Educational Sidebar/Bottom Section */}
          {!showResults && (
            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>How NHS Maternity Pay Works</Text>
              <Text style={styles.infoText}>
                NHS staff receive occupational maternity pay which is more generous than statutory maternity pay (SMP).
              </Text>
              <Text style={styles.infoText}>
                • First 8 weeks: Full pay (minus SMP)
              </Text>
              <Text style={styles.infoText}>
                • Next 18 weeks: Half pay (plus SMP, capped at full pay)
              </Text>
              <Text style={styles.infoText}>
                • Next 13 weeks: SMP only
              </Text>
              <Text style={styles.infoText}>
                • Remaining weeks: Unpaid (up to 52 weeks total)
              </Text>
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    maxWidth: 1000,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl * 2,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 600,
  },
  mainContent: {
    flex: 1,
  },
  resultsContainer: {
    flex: 1,
  },
  resetButtonContainer: {
    paddingVertical: spacing.lg,
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
  infoSection: {
    marginTop: spacing.xl,
    padding: spacing.lg,
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.xs,
  },
});
