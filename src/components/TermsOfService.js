import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';

export default function TermsOfService({ onClose }) {
  const navigate = Platform.OS === 'web' ? useNavigate() : null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (navigate) {
      navigate(-1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Terms of Service</Text>
        {(onClose || navigate) && (
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>{'\u2715'}</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={true}>
        <Text style={styles.lastUpdated}>Last Updated: March 1, 2026</Text>

        <Text style={styles.heading}>1. Agreement to Terms</Text>
        <Text style={styles.paragraph}>
          By accessing or using the NHS Maternity Pay Calculator (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
        </Text>

        <Text style={styles.heading}>2. Description of Service</Text>
        <Text style={styles.paragraph}>
          The NHS Maternity Pay Calculator is a free online tool that provides <Text style={styles.bold}>estimates</Text> of maternity pay for NHS staff under the Agenda for Change pay framework. The Service calculates estimated net take-home pay after deductions including tax, National Insurance, and pension contributions.
        </Text>

        <Text style={styles.heading}>3. Important Disclaimers</Text>

        <Text style={styles.subheading}>3.1 No Financial Advice</Text>
        <Text style={styles.paragraph}>
          The Service provides <Text style={styles.bold}>informational estimates only</Text> and does not constitute financial, legal, or professional advice. You should not rely solely on the calculator's results when making financial decisions.
        </Text>

        <Text style={styles.subheading}>3.2 Estimates Only</Text>
        <Text style={styles.paragraph}>
          All calculations are <Text style={styles.bold}>estimates</Text> based on:{'\n'}
          {'\u2022'} Current UK tax rates and thresholds (2025/26 tax year){'\n'}
          {'\u2022'} NHS Agenda for Change maternity pay policies{'\n'}
          {'\u2022'} Standard assumptions about tax codes and deductions
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Actual pay may vary</Text> due to:{'\n'}
          {'\u2022'} Individual tax codes and circumstances{'\n'}
          {'\u2022'} Local Trust agreements or variations{'\n'}
          {'\u2022'} Changes in tax rates or NHS policies{'\n'}
          {'\u2022'} Second jobs, student loan deductions, or other individual factors{'\n'}
          {'\u2022'} Errors or omissions in the information you provide
        </Text>

        <Text style={styles.subheading}>3.3 Verify with Your Employer</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Always verify calculations with your NHS Trust HR or payroll department</Text> before making financial commitments (e.g., mortgages, loans, childcare arrangements). This tool is a planning aid, not a guarantee of actual pay.
        </Text>

        <Text style={styles.subheading}>3.4 Not Affiliated with NHS</Text>
        <Text style={styles.paragraph}>
          This Service is <Text style={styles.bold}>not affiliated with, endorsed by, or connected to</Text> the NHS, NHS England, NHS Trusts, or any government body. It is an independent third-party tool created to help NHS staff with financial planning.
        </Text>

        <Text style={styles.heading}>4. Use of the Service</Text>

        <Text style={styles.subheading}>4.1 Permitted Use</Text>
        <Text style={styles.paragraph}>
          You may use the Service for personal, non-commercial purposes to estimate your own maternity pay or to help others understand their maternity pay entitlements.
        </Text>

        <Text style={styles.subheading}>4.2 Prohibited Use</Text>
        <Text style={styles.paragraph}>
          You may NOT:{'\n'}
          {'\u2022'} Use the Service for commercial purposes without written permission{'\n'}
          {'\u2022'} Reverse engineer, decompile, or attempt to extract source code{'\n'}
          {'\u2022'} Use automated tools (bots, scrapers) to access the Service excessively{'\n'}
          {'\u2022'} Submit false, misleading, or malicious data to disrupt the Service{'\n'}
          {'\u2022'} Resell, redistribute, or white-label the Service without authorization{'\n'}
          {'\u2022'} Remove or alter any copyright, trademark, or proprietary notices
        </Text>

        <Text style={styles.heading}>5. Accuracy and Updates</Text>

        <Text style={styles.subheading}>5.1 No Guarantees</Text>
        <Text style={styles.paragraph}>
          We strive for accuracy but <Text style={styles.bold}>do not guarantee</Text> that:{'\n'}
          {'\u2022'} Calculations are error-free or complete{'\n'}
          {'\u2022'} The Service will be uninterrupted or bug-free{'\n'}
          {'\u2022'} Results reflect your specific tax or employment situation
        </Text>

        <Text style={styles.subheading}>5.2 Updates</Text>
        <Text style={styles.paragraph}>
          Tax rates, NHS pay scales, and maternity policies change regularly. We will make reasonable efforts to update the Service, but <Text style={styles.bold}>we are not responsible</Text> if calculations use outdated information.
        </Text>

        <Text style={styles.heading}>6. Limitation of Liability</Text>

        <Text style={styles.subheading}>6.1 No Warranties</Text>
        <Text style={styles.paragraph}>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </Text>

        <Text style={styles.subheading}>6.2 Limitation of Damages</Text>
        <Text style={styles.paragraph}>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:{'\n'}
          {'\u2022'} Any indirect, incidental, consequential, or punitive damages{'\n'}
          {'\u2022'} Loss of income, profits, or financial losses arising from use of the Service{'\n'}
          {'\u2022'} Errors or inaccuracies in calculations{'\n'}
          {'\u2022'} Decisions made based on the Service's results{'\n'}
          {'\u2022'} Downtime, service interruptions, or data loss
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED {'\u00A3'}100 (ONE HUNDRED POUNDS STERLING).</Text>
        </Text>

        <Text style={styles.subheading}>6.3 Your Responsibility</Text>
        <Text style={styles.paragraph}>
          You acknowledge that:{'\n'}
          {'\u2022'} You are solely responsible for verifying all calculations{'\n'}
          {'\u2022'} You use the Service at your own risk{'\n'}
          {'\u2022'} You will not hold us liable for any financial decisions made based on the Service
        </Text>

        <Text style={styles.heading}>7. Third-Party Services</Text>

        <Text style={styles.subheading}>7.1 Advertising and Affiliate Links</Text>
        <Text style={styles.paragraph}>
          The Service may display advertisements and affiliate links to third-party products or services (e.g., insurance, savings accounts). We are not responsible for:{'\n'}
          {'\u2022'} The accuracy, quality, or safety of third-party products{'\n'}
          {'\u2022'} Transactions between you and third-party providers{'\n'}
          {'\u2022'} Third-party privacy practices or terms of service
        </Text>

        <Text style={styles.heading}>8. Changes to the Service</Text>
        <Text style={styles.paragraph}>
          We reserve the right to:{'\n'}
          {'\u2022'} Modify, suspend, or discontinue the Service at any time without notice{'\n'}
          {'\u2022'} Update these Terms at any time (changes will be posted with a new "Last Updated" date){'\n'}
          {'\u2022'} Introduce paid features or change our pricing model
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Your continued use of the Service after changes constitutes acceptance of the updated Terms.</Text>
        </Text>

        <Text style={styles.heading}>9. Governing Law</Text>
        <Text style={styles.paragraph}>
          These Terms are governed by the laws of <Text style={styles.bold}>England and Wales</Text>. Any disputes will be resolved in the courts of England and Wales.
        </Text>

        <Text style={styles.heading}>10. Contact Information</Text>
        <Text style={styles.paragraph}>
          If you have questions about these Terms, please contact us at:{'\n\n'}
          <Text style={styles.bold}>Email:</Text> Russell@russellwestgath.com
        </Text>

        <View style={styles.agreement}>
          <Text style={styles.agreementText}>
            By using the NHS Maternity Pay Calculator, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </Text>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {onClose && (
        <TouchableOpacity onPress={onClose} style={[styles.bottomButton, shadows.primary]}>
          <Text style={styles.bottomButtonText}>Close</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cardBackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.background,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.text,
  },
  closeButton: {
    padding: spacing.xs,
  },
  closeButtonText: {
    fontSize: 24,
    color: colors.textSecondary,
    fontWeight: '300',
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  lastUpdated: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: spacing.md,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  subheading: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  bold: {
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  agreement: {
    marginTop: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.primarySurface,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  agreementText: {
    fontSize: 13,
    fontFamily: fontFamily.regular,
    color: colors.text,
    fontStyle: 'italic',
    lineHeight: 20,
  },
  bottomPadding: {
    height: spacing.xl,
  },
  bottomButton: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    margin: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.cardBackground,
  },
});
