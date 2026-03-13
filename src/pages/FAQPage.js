import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, fontFamily, shadows, borderRadius } from '../constants/theme';
import PageHeader from '../components/PageHeader';
import useReducedMotion from '../hooks/useReducedMotion';
import usePageMeta from '../hooks/usePageMeta';
import AdUnit from '../components/AdUnit';
import { Section } from '../components/SemanticWeb';

const FAQ_DATA = [
  {
    question: "Am I eligible for NHS maternity pay?",
    answer: "To qualify for NHS occupational maternity pay, you need at least 12 months of continuous NHS service at the beginning of the 11th week before your baby is due. You must also intend to return to work for at least 3 months after maternity leave. If you don't meet these criteria, you may still be eligible for Statutory Maternity Pay."
  },
  {
    question: "How much will I get paid during maternity leave?",
    answer: "NHS maternity pay is structured as follows: Full pay for 8 weeks, Half pay + SMP for 18 weeks (capped at full pay), SMP only for 13 weeks (\u00A3184.03/week for 2026/27), and unpaid for the remaining weeks up to 52 weeks total. Use our calculator to get your exact amount based on your salary and circumstances."
  },
  {
    question: "How is my maternity pay calculated?",
    answer: "Your maternity pay is based on your average weekly earnings during the 8 weeks before the 15th week before your due date. This includes your basic salary, regular overtime, shift allowances, and any other regular payments. Tax and National Insurance are deducted as usual."
  },
  {
    question: "What if I work part-time?",
    answer: "If you work part-time, your maternity pay will be calculated based on your part-time salary. You'll receive the same proportion of pay (full pay for 8 weeks, half pay for 18 weeks, etc.), but pro-rated to your working hours (FTE)."
  },
  {
    question: "Does overtime count towards my maternity pay?",
    answer: "Yes! Regular overtime payments are included in the calculation of your average weekly earnings. This means if you regularly work overtime, your maternity pay will be higher."
  },
  {
    question: "Can I boost my maternity pay by picking up extra shifts?",
    answer: "Yes! Your maternity pay is based on your average weekly earnings (AWE) during the last 2 monthly payslips before the qualifying week. Any extra earnings during this period — including overtime, bank shifts through your Trust, unsocial hours premiums, and on-call payments — will increase your AWE and therefore your maternity pay. However, shifts worked through NHS Professionals (NHSP) or external agencies may not count, as they're technically a different employer. Check with your Trust's payroll team to confirm which payments will be included. Use our calculator's 'Bank Shifts & Overtime' feature to see exactly how much extra shifts could boost your take-home pay."
  },
  {
    question: "What happens to my pension during maternity leave?",
    answer: "Your pension contributions are based on the maternity pay you actually receive. However, your employer's contributions continue to be based on your full salary during the period you receive occupational maternity pay (weeks 1-26)."
  },
  {
    question: "Can I work during maternity leave?",
    answer: "You can work up to 10 Keeping in Touch (KIT) days during your maternity leave without losing any maternity pay. You'll be paid your normal rate for these days, and they won't affect your maternity pay entitlement."
  },
  {
    question: "What happens to my annual leave?",
    answer: "You continue to accrue annual leave during your maternity leave. This can be added to the end of your maternity leave or taken when you return to work."
  },
  {
    question: "When should I notify my employer?",
    answer: "You should notify your employer at least 28 days before you intend to start maternity leave. You'll need to provide your MATB1 form (maternity certificate) from your midwife or doctor."
  },
  {
    question: "What if I'm on a fixed-term contract?",
    answer: "If you're on a fixed-term contract, you still have the same maternity rights as permanent staff, including the right to maternity pay if you meet the eligibility criteria. Your contract cannot be ended solely because of pregnancy or maternity leave."
  },
  {
    question: "Can I extend my maternity leave?",
    answer: "You're entitled to up to 52 weeks of maternity leave. You can choose to return earlier, but you must take at least 2 weeks of leave after giving birth (4 weeks if you work in a factory). You can change your return date by giving 8 weeks' notice."
  },
  {
    question: "What if I decide not to return to work?",
    answer: "If you don't return to work for at least 3 months after maternity leave, you may be required to repay the occupational maternity pay you received (the amount above Statutory Maternity Pay). However, SMP does not need to be repaid."
  },
  {
    question: "How does shared parental leave work?",
    answer: "You can share up to 50 weeks of leave and 37 weeks of pay with your partner if they're also eligible. This allows you to return to work earlier and have your partner take the remaining leave. You'll need to give at least 8 weeks' notice."
  },
  {
    question: "What if I have twins or multiple babies?",
    answer: "You receive the same maternity pay regardless of whether you have one baby or multiple babies. However, you may be entitled to start your maternity leave earlier if advised by your doctor."
  },
  {
    question: "Is maternity pay taxed?",
    answer: "Yes, maternity pay is subject to income tax and National Insurance contributions. However, because you're receiving less income, you may fall into a lower tax bracket and pay less tax overall. Our calculator shows your net (take-home) pay after tax."
  },
];

function FAQItem({ faq, index, isExpanded, onToggle }) {
  const prefersReducedMotion = useReducedMotion();
  const chevronRotation = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;

  useEffect(() => {
    if (prefersReducedMotion) {
      chevronRotation.setValue(isExpanded ? 1 : 0);
    } else {
      Animated.spring(chevronRotation, {
        toValue: isExpanded ? 1 : 0,
        useNativeDriver: true,
        tension: 60,
        friction: 10,
      }).start();
    }
  }, [isExpanded]);

  const rotateInterpolation = chevronRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <TouchableOpacity
      style={[styles.faqItem, isExpanded && styles.faqItemActive]}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View style={styles.faqQuestion}>
        <Text style={styles.faqQuestionText}>{faq.question}</Text>
        <Animated.Text
          style={[styles.faqChevron, { transform: [{ rotate: rotateInterpolation }] }]}
        >
          {'\u203A'}
        </Animated.Text>
      </View>
      {isExpanded && (
        <View style={styles.faqAnswer}>
          <Text style={styles.faqAnswerText}>{faq.answer}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function FAQPage() {
  usePageMeta({
    title: 'NHS Maternity Pay FAQ \u2014 Common Questions Answered',
    description: 'Answers to frequently asked questions about NHS maternity pay, eligibility, overtime, part-time pay, KIT days, annual leave, and more.',
  });
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Inject FAQPage schema for search engines and AI crawlers
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const existingScript = document.getElementById('faq-schema');
    if (existingScript) return;

    const script = document.createElement('script');
    script.id = 'faq-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about NHS maternity pay answered"
        />

        <View style={styles.faqList}>
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </View>

        <AdUnit slot="FAQ_INCONTENT_SLOT" format="auto" />

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Still Have Questions?</Text>
          <Text style={styles.ctaText}>
            Try our calculator to see your personalized results, or read our complete guide
          </Text>
          <View style={styles.ctaButtons}>
            <Link to="/calculator" style={{ textDecoration: 'none' }}>
              <View style={[styles.ctaButton, shadows.primary]}>
                <Text style={styles.ctaButtonText}>Use Calculator</Text>
              </View>
            </Link>
            <Link to="/guide" style={{ textDecoration: 'none' }}>
              <View style={[styles.ctaButton, styles.ctaButtonSecondary]}>
                <Text style={[styles.ctaButtonText, styles.ctaButtonTextSecondary]}>
                  Read Guide
                </Text>
              </View>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl * 2,
  },
  faqList: {
    gap: spacing.md,
  },
  faqItem: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    ...shadows.sm,
  },
  faqItemActive: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
  },
  faqQuestionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.text,
    marginRight: spacing.md,
  },
  faqChevron: {
    fontSize: 28,
    color: colors.primary,
    fontWeight: '300',
  },
  faqAnswer: {
    padding: spacing.lg,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  faqAnswerText: {
    fontSize: 15,
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    lineHeight: 22,
    paddingTop: spacing.md,
  },
  ctaSection: {
    backgroundColor: colors.primarySurface,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginTop: spacing.xl * 2,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  ctaText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: spacing.md,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
  },
  ctaButtonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  ctaButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.semiBold,
  },
  ctaButtonTextSecondary: {
    color: colors.primary,
  },
});
