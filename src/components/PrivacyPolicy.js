import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function PrivacyPolicy({ onClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={true}>
        <Text style={styles.lastUpdated}>Last Updated: March 1, 2026</Text>

        <Text style={styles.heading}>1. Introduction</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy explains how the NHS Maternity Pay Calculator (the "Service") collects, uses, and protects your information. We are committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </Text>

        <View style={styles.highlight}>
          <Text style={styles.highlightText}>
            <Text style={styles.bold}>Key Point:</Text> We do NOT collect, store, or process any personal information about you or your maternity pay calculations. The Service operates entirely in your web browser (client-side), meaning your salary, FTE, and other inputs <Text style={styles.bold}>never leave your device</Text>.
          </Text>
        </View>

        <Text style={styles.heading}>2. Information We Do NOT Collect</Text>

        <Text style={styles.subheading}>2.1 No Personal Data</Text>
        <Text style={styles.paragraph}>
          We <Text style={styles.bold}>do NOT</Text> collect:{'\n'}
          • Your name, email address, or contact details{'\n'}
          • Your NHS Trust, pay band, or salary{'\n'}
          • Your maternity pay calculations or results{'\n'}
          • Your FTE percentage, holiday accrual, or KIT days{'\n'}
          • Any personally identifiable information (PII)
        </Text>

        <Text style={styles.subheading}>2.2 How the Calculator Works</Text>
        <Text style={styles.paragraph}>
          All calculations are performed <Text style={styles.bold}>locally in your browser</Text> using JavaScript. Your inputs (salary, FTE, leave duration) are:{'\n'}
          • Processed entirely on your device{'\n'}
          • <Text style={styles.bold}>NOT sent to our servers</Text>{'\n'}
          • <Text style={styles.bold}>NOT stored in any database</Text>{'\n'}
          • <Text style={styles.bold}>NOT shared with third parties</Text>
        </Text>
        <Text style={styles.paragraph}>
          When you close the calculator, your data is <Text style={styles.bold}>permanently deleted</Text> from your browser (unless you save it locally using browser features like bookmarks).
        </Text>

        <Text style={styles.heading}>3. Information We DO Collect (Anonymous Analytics)</Text>

        <Text style={styles.subheading}>3.1 Google Analytics</Text>
        <Text style={styles.paragraph}>
          We use <Text style={styles.bold}>Google Analytics 4</Text> to understand how users interact with the Service. Google Analytics collects <Text style={styles.bold}>anonymous, aggregated data</Text> such as:{'\n'}
          • Number of visitors and page views{'\n'}
          • Device type (mobile, desktop, tablet){'\n'}
          • Browser type (Chrome, Safari, Firefox, etc.){'\n'}
          • Geographic location (country/region level only, e.g., "United Kingdom"){'\n'}
          • Time spent on the Service{'\n'}
          • Which features are used (e.g., "part-time calculator" vs. "full-time calculator")
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>What Google Analytics Does NOT Collect:</Text>{'\n'}
          • Your name, email, or NHS Trust{'\n'}
          • Your salary or maternity pay calculations{'\n'}
          • Your IP address (we enable <Text style={styles.bold}>IP anonymization</Text> in Google Analytics)
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Data Retention:</Text> Google Analytics data is retained for <Text style={styles.bold}>26 months</Text> and then automatically deleted.
        </Text>

        <Text style={styles.heading}>4. Advertising and Affiliate Links</Text>

        <Text style={styles.subheading}>4.1 Google AdSense</Text>
        <Text style={styles.paragraph}>
          We display advertisements via <Text style={styles.bold}>Google AdSense</Text>. Google may use cookies to show relevant ads based on your browsing history across the web (not your calculator inputs).
        </Text>

        <Text style={styles.subheading}>4.2 Affiliate Links</Text>
        <Text style={styles.paragraph}>
          The Service may include affiliate links to third-party products (e.g., insurance, savings accounts). If you click these links:{'\n'}
          • You will be directed to the third party's website{'\n'}
          • We may receive a commission if you make a purchase (at no extra cost to you){'\n'}
          • The third party's privacy policy applies once you leave our Service
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>We do NOT share your calculator inputs or personal data with affiliate partners.</Text>
        </Text>

        <Text style={styles.heading}>5. How We Use Collected Data</Text>
        <Text style={styles.paragraph}>
          We use anonymous analytics data to:{'\n'}
          • Understand how users interact with the Service (e.g., which features are popular){'\n'}
          • Improve the calculator's accuracy and user experience{'\n'}
          • Fix bugs and technical issues{'\n'}
          • Monitor for abusive or fraudulent usage
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>We do NOT:</Text>{'\n'}
          • Sell, rent, or share your data with third parties (except analytics/ad providers as disclosed above){'\n'}
          • Use data for marketing or profiling{'\n'}
          • Create individual user profiles or track you across websites
        </Text>

        <Text style={styles.heading}>6. Your Rights Under UK GDPR</Text>
        <Text style={styles.paragraph}>
          Even though we collect minimal data, you have the following rights:
        </Text>

        <Text style={styles.subheading}>6.1 Right to Access</Text>
        <Text style={styles.paragraph}>
          You can request a copy of any data we hold about you (likely to be minimal or none).
        </Text>

        <Text style={styles.subheading}>6.2 Right to Erasure ("Right to be Forgotten")</Text>
        <Text style={styles.paragraph}>
          You can request deletion of any data we hold (e.g., feedback submissions).
        </Text>

        <Text style={styles.subheading}>6.3 Right to Object</Text>
        <Text style={styles.paragraph}>
          You can object to analytics tracking by:{'\n'}
          • Disabling cookies in your browser{'\n'}
          • Using browser extensions like uBlock Origin or Privacy Badger{'\n'}
          • Opting out of Google Analytics
        </Text>

        <Text style={styles.subheading}>6.4 Right to Complain</Text>
        <Text style={styles.paragraph}>
          If you believe we are not complying with UK GDPR, you can lodge a complaint with the <Text style={styles.bold}>Information Commissioner's Office (ICO)</Text>:{'\n'}
          • Website: ico.org.uk/make-a-complaint/{'\n'}
          • Phone: 0303 123 1113
        </Text>

        <Text style={styles.heading}>7. Data Security</Text>

        <Text style={styles.subheading}>7.1 No Data Stored = Maximum Security</Text>
        <Text style={styles.paragraph}>
          Because we <Text style={styles.bold}>do not collect or store</Text> your maternity pay calculations, there is <Text style={styles.bold}>no risk of data breaches</Text> involving your personal financial information.
        </Text>

        <Text style={styles.subheading}>7.2 Website Security</Text>
        <Text style={styles.paragraph}>
          We use industry-standard security measures:{'\n'}
          • <Text style={styles.bold}>HTTPS encryption</Text> (all data transmitted between your browser and our servers is encrypted){'\n'}
          • Regular security updates and monitoring{'\n'}
          • Third-party services (Google Analytics, AdSense) are compliant with UK GDPR
        </Text>

        <Text style={styles.subheading}>7.3 Client-Side Processing</Text>
        <Text style={styles.paragraph}>
          Your calculations happen <Text style={styles.bold}>entirely in your browser</Text>. Even if our servers were compromised, attackers could <Text style={styles.bold}>not access your salary or pay calculations</Text> because we never receive them.
        </Text>

        <Text style={styles.heading}>8. Children's Privacy</Text>
        <Text style={styles.paragraph}>
          The Service is intended for NHS staff (ages 18+). We do not knowingly collect data from children under 18.
        </Text>

        <Text style={styles.heading}>9. Changes to This Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. Changes will be posted with a new "Last Updated" date. Continued use of the Service after changes constitutes acceptance of the updated policy.
        </Text>

        <Text style={styles.heading}>10. Contact Information</Text>
        <Text style={styles.paragraph}>
          If you have questions about this Privacy Policy or want to exercise your rights, please contact us:{'\n\n'}
          <Text style={styles.bold}>Email:</Text> Russell@russellwestgath.com
        </Text>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Summary (TL;DR)</Text>
          <Text style={styles.summaryText}>
            ✅ Your maternity pay calculations <Text style={styles.bold}>never leave your device</Text> (client-side only){'\n'}
            ✅ We do <Text style={styles.bold}>NOT</Text> collect your name, email, salary, or NHS Trust{'\n'}
            ✅ We use <Text style={styles.bold}>Google Analytics</Text> for anonymous usage statistics (you can opt out){'\n'}
            ✅ We display <Text style={styles.bold}>ads</Text> and <Text style={styles.bold}>affiliate links</Text> (no data sharing with partners){'\n'}
            ✅ You can <Text style={styles.bold}>disable cookies</Text> without affecting the calculator's functionality{'\n'}
            ✅ We comply with <Text style={styles.bold}>UK GDPR</Text> and the Data Protection Act 2018
          </Text>
        </View>

        <View style={styles.agreement}>
          <Text style={styles.agreementText}>
            By using the NHS Maternity Pay Calculator, you acknowledge that you have read and understood this Privacy Policy.
          </Text>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      <TouchableOpacity onPress={onClose} style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>Close</Text>
      </TouchableOpacity>
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
    borderBottomColor: '#E5E5E5',
    backgroundColor: colors.background,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
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
  },
  lastUpdated: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: spacing.md,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  subheading: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  paragraph: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  bold: {
    fontWeight: '700',
  },
  highlight: {
    marginVertical: spacing.md,
    padding: spacing.md,
    backgroundColor: '#FFF9E6',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FFB900',
  },
  highlightText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
  },
  summary: {
    marginTop: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  summaryText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
  },
  agreement: {
    marginTop: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  agreementText: {
    fontSize: 13,
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
    borderRadius: 12,
    alignItems: 'center',
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.cardBackground,
  },
});
