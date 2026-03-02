import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Animated } from 'react-native';
import { colors, spacing, borderRadius, typography, fontFamily, shadows } from '../constants/theme';
import { formatCurrency } from '../utils/maternityCalculations';
import { trackEvent } from '../utils/analytics';

export default function ResultsActions({ results, payStructure }) {
  const [showCopied, setShowCopied] = useState(false);
  const [copiedFade] = useState(new Animated.Value(0));

  const buildTextSummary = useCallback(() => {
    if (!results) return '';

    const { gross, deductions, net, paymentType, fte } = results;
    const type = paymentType === 'nhsEnhanced' ? 'NHS Enhanced' : 'Statutory SMP';

    let text = `NHS Maternity Pay Estimate\n`;
    text += `${'─'.repeat(30)}\n`;
    text += `Monthly Take-Home: ${formatCurrency(net.monthly)}\n`;
    text += `Total: ${formatCurrency(net.total)} | Weekly: ${formatCurrency(net.weekly)}\n`;
    text += `Over ${gross.breakdown.totalWeeks} weeks`;
    if (fte && fte < 1.0) text += ` (${Math.round(fte * 37.5 * 10) / 10}h/week)`;
    text += `\n\n`;
    text += `Payment Type: ${type}\n`;
    text += `Gross Pay: ${formatCurrency(gross.total)}\n`;

    if (paymentType === 'nhsEnhanced' && payStructure === 'spread') {
      text += `Pay Structure: Spread Equally\n`;
      text += `All ${gross.breakdown.totalWeeks} weeks: ${formatCurrency(gross.total / gross.breakdown.totalWeeks)}/week\n`;
    }

    text += `Deductions: ${formatCurrency(deductions.total)} `;
    text += `(Tax: ${formatCurrency(deductions.incomeTax)}, `;
    text += `NI: ${formatCurrency(deductions.nationalInsurance)}, `;
    text += `Pension: ${formatCurrency(deductions.pensionContributions)})\n`;

    if (results.additionalBenefits && results.additionalBenefits.total > 0) {
      text += `\nAdditional Benefits: ${formatCurrency(results.additionalBenefits.total)}\n`;
    }

    text += `\n⚠ This is an estimate only. Verify with your NHS Trust HR department.`;
    return text;
  }, [results, payStructure]);

  const handleCopyToClipboard = useCallback(async () => {
    if (Platform.OS !== 'web') return;

    const text = buildTextSummary();
    trackEvent('copy_results');
    try {
      await navigator.clipboard.writeText(text);
      setShowCopied(true);
      copiedFade.setValue(1);
      Animated.timing(copiedFade, {
        toValue: 0,
        duration: 1500,
        delay: 500,
        useNativeDriver: true,
      }).start(() => setShowCopied(false));
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setShowCopied(true);
      copiedFade.setValue(1);
      Animated.timing(copiedFade, {
        toValue: 0,
        duration: 1500,
        delay: 500,
        useNativeDriver: true,
      }).start(() => setShowCopied(false));
    }
  }, [buildTextSummary]);

  const handleDownloadSummary = useCallback(() => {
    if (Platform.OS !== 'web') return;
    trackEvent('download_results');

    // Add print-specific styles if not already present
    let printStyle = document.getElementById('maternity-print-styles');
    if (!printStyle) {
      printStyle = document.createElement('style');
      printStyle.id = 'maternity-print-styles';
      printStyle.textContent = `
        @media print {
          body * { visibility: hidden; }
          #results-printable, #results-printable * { visibility: visible; }
          #results-printable {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
          }
          nav, header, footer,
          [data-print-hide="true"] {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(printStyle);
    }
    window.print();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.downloadButton, shadows.sm]}
          onPress={handleDownloadSummary}
          activeOpacity={0.7}
        >
          <Text style={styles.downloadIcon}>{'\u2193'}</Text>
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.copyButton, shadows.sm]}
          onPress={handleCopyToClipboard}
          activeOpacity={0.7}
        >
          <Text style={styles.copyIcon}>{'\u2398'}</Text>
          <Text style={styles.copyButtonText}>Copy</Text>
        </TouchableOpacity>
      </View>

      {showCopied && (
        <Animated.View style={[styles.toast, { opacity: copiedFade }]}>
          <Text style={styles.toastText}>{'\u2713'} Copied to clipboard!</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
  },
  downloadButton: {
    backgroundColor: colors.cardBackground,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  downloadIcon: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  downloadButtonText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.primary,
  },
  copyButton: {
    backgroundColor: colors.primarySurface,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  copyIcon: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  copyButtonText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  toast: {
    marginTop: spacing.sm,
    backgroundColor: colors.sage,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  toastText: {
    ...typography.small,
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
