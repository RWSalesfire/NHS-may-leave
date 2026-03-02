import React, { useState, useRef, useCallback } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import CalculatorWizard from '../components/CalculatorWizard';
import CalculatingScreen from '../components/CalculatingScreen';
import ResultsDisplay from '../components/ResultsDisplay';
import { calculateNetMaternityPay } from '../utils/maternityCalculations';

export default function CalculatorPage() {
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const scrollRef = useRef(null);

  const handleCalculate = useCallback(({ annualSalary, pensionPercentage, maternityWeeks, paymentType, fte, annualHolidayDays, kitDays, additionalWeeklyEarnings }) => {
    // Compute results immediately but show calculating screen first
    const calculatedResults = calculateNetMaternityPay(
      annualSalary,
      pensionPercentage,
      maternityWeeks,
      paymentType,
      fte,
      annualHolidayDays,
      kitDays,
      additionalWeeklyEarnings || 0
    );
    setResults(calculatedResults);
    setIsCalculating(true);
    setShowResults(false);

    // Scroll to top for the calculating screen
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }
  }, []);

  const handleCalculatingComplete = useCallback(() => {
    setIsCalculating(false);
    setShowResults(true);

    // Scroll to top for results
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }
  }, []);

  const handleReset = useCallback(() => {
    setShowResults(false);
    setResults(null);
    setIsCalculating(false);

    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }
  }, []);

  return (
    <ScrollView ref={scrollRef} style={styles.container}>
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
            {isCalculating ? (
              <CalculatingScreen onComplete={handleCalculatingComplete} />
            ) : showResults ? (
              <>
                <ResultsDisplay results={results} />
                <View style={styles.resetButtonContainer}>
                  <TouchableOpacity
                    style={[styles.resetButton, shadows.primary]}
                    onPress={handleReset}
                    activeOpacity={0.8}
                    data-print-hide="true"
                  >
                    <Text style={styles.resetButtonText}>Calculate Again</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <CalculatorWizard onCalculate={handleCalculate} />
            )}
          </View>

          {/* Educational Sidebar/Bottom Section */}
          {!showResults && !isCalculating && (
            <View style={[styles.infoSection, shadows.md]}>
              <Text style={styles.infoTitle}>How NHS Maternity Pay Works</Text>
              <Text style={styles.infoText}>
                NHS staff receive occupational maternity pay which is more generous than statutory maternity pay (SMP).
              </Text>
              <Text style={styles.infoText}>
                {'\u2022'} First 8 weeks: Full pay (minus SMP)
              </Text>
              <Text style={styles.infoText}>
                {'\u2022'} Next 18 weeks: Half pay (plus SMP, capped at full pay)
              </Text>
              <Text style={styles.infoText}>
                {'\u2022'} Next 13 weeks: SMP only
              </Text>
              <Text style={styles.infoText}>
                {'\u2022'} Remaining weeks: Unpaid (up to 52 weeks total)
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
    fontFamily: fontFamily.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 600,
  },
  mainContent: {
    flex: 1,
  },
  resetButtonContainer: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  resetButton: {
    backgroundColor: colors.primaryDark,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 18,
    fontFamily: fontFamily.semiBold,
    color: colors.cardBackground,
    fontWeight: '600',
  },
  infoSection: {
    marginTop: spacing.xl,
    padding: spacing.lg,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  infoText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: spacing.xs,
  },
});
