import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function UnderstandingNHSMaternityPay({ post, styles, CATEGORY_COLORS }) {
  return (
    <View>
      <View style={[styles.categoryPill, { backgroundColor: (CATEGORY_COLORS[post.category] || colors.primary) + '20', marginBottom: spacing.md }]}>
        <Text style={[styles.blogCategory, { color: CATEGORY_COLORS[post.category] || colors.primary }]}>
          {post.category}
        </Text>
      </View>
      <H1 style={styles.articleTitle}>{post.title}</H1>
      <Text style={styles.articleDate}>{post.date}</Text>

      <Text style={styles.articleBody}>
        If you work for the NHS and you are expecting a baby, understanding exactly how your maternity pay works is one of the most important financial steps you can take. NHS maternity pay is more generous than most private-sector packages, but the structure can be confusing. This guide breaks down everything you need to know about Occupational Maternity Pay (OMP), Statutory Maternity Pay (SMP), eligibility rules, and how your pay is calculated week by week.
      </Text>

      <H2 style={styles.articleHeading}>Two Types of Maternity Pay: OMP and SMP</H2>
      <Text style={styles.articleBody}>
        NHS staff can receive two types of maternity pay, and understanding the difference is key to planning your finances.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Statutory Maternity Pay (SMP)</Text> is the legal minimum that all qualifying employees in the UK are entitled to, regardless of employer. For 2025/26, SMP pays 90% of your average weekly earnings for the first 6 weeks, then a flat rate of {'\u00A3'}187.18 per week (or 90% of AWE if lower) for the next 33 weeks. That is 39 weeks of pay in total.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Occupational Maternity Pay (OMP)</Text> is the NHS-specific top-up that makes NHS maternity pay significantly more generous. Under the NHS Terms and Conditions (Agenda for Change), OMP provides enhanced pay on top of SMP. However, you must meet additional eligibility criteria to qualify.
      </Text>

      <H2 style={styles.articleHeading}>Eligibility: Who Qualifies for What</H2>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>To qualify for SMP</Text>, you need:{'\n\n'}
        - 26 weeks of continuous service with your employer by the 15th week before your expected week of childbirth (the "qualifying week"){'\n'}
        - Average weekly earnings at or above the Lower Earnings Limit ({'\u00A3'}123 per week for 2025/26){'\n'}
        - To still be employed in the qualifying week{'\n'}
        - To have given proper notice (at least 15 weeks before EWC)
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>To qualify for OMP</Text>, you need:{'\n\n'}
        - 12 months of continuous NHS service by the 11th week before your expected week of childbirth{'\n'}
        - To intend to return to work for at least 3 months after maternity leave{'\n'}
        - To meet the standard SMP qualifying conditions
      </Text>
      <Text style={styles.articleBody}>
        The 12-month NHS service requirement is important to note. Continuous NHS service counts even if you have moved between Trusts, provided there was no break in service of more than 3 months. If you have recently changed Trusts, check with your HR department that your service has been recognised.
      </Text>

      <H2 style={styles.articleHeading}>The NHS Maternity Pay Structure: Week by Week</H2>
      <Text style={styles.articleBody}>
        If you qualify for full OMP, here is how your pay breaks down across your maternity leave:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Weeks 1-8: Full pay</Text>{'\n'}
        You receive your full normal salary. This includes your basic pay plus any regular allowances. Technically, this is made up of SMP plus an OMP top-up to bring you to 100%.{'\n\n'}
        <Text style={styles.articleBold}>Weeks 9-26: Half pay plus SMP</Text>{'\n'}
        You receive 50% of your salary plus the flat-rate SMP ({'\u00A3'}187.18/week). For many NHS staff, this combination means you receive roughly 70-80% of your normal take-home pay during this period, depending on your band.{'\n\n'}
        <Text style={styles.articleBold}>Weeks 27-39: SMP only</Text>{'\n'}
        You receive the flat-rate SMP of {'\u00A3'}187.18 per week. This is a significant drop in income and the period that requires the most financial planning.{'\n\n'}
        <Text style={styles.articleBold}>Weeks 40-52: Unpaid</Text>{'\n'}
        You are entitled to take up to 52 weeks of maternity leave in total, but the final 13 weeks are unpaid.
      </Text>

      <H2 style={styles.articleHeading}>How Average Weekly Earnings (AWE) Affects Your Pay</H2>
      <Text style={styles.articleBody}>
        Your maternity pay is calculated based on your <Text style={styles.articleBold}>Average Weekly Earnings (AWE)</Text> during a specific reference period. For monthly-paid NHS staff, this is typically the last two complete monthly payslips before the Saturday of the qualifying week.
      </Text>
      <Text style={styles.articleBody}>
        Your AWE includes all earnings subject to National Insurance contributions: base salary, overtime, bank shifts worked through your Trust, unsocial hours payments, on-call supplements, and any other regular payments. This is why some staff strategically increase their hours during the calculation window to boost their AWE.
      </Text>
      <Text style={styles.articleBody}>
        Importantly, if your AWE turns out to be higher than your standard weekly salary (for example, because you worked extra shifts), all percentage-based payments during maternity leave are calculated on the higher figure. This can make a substantial difference across 39 weeks.
      </Text>

      <H2 style={styles.articleHeading}>Worked Example: Band 5 Nurse</H2>
      <Text style={styles.articleBody}>
        Let us look at a Band 5 nurse earning {'\u00A3'}35,000 per year ({'\u00A3'}673 per week gross) with no additional shifts during the calculation period:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Weeks 1-8:</Text> {'\u00A3'}673/week (full pay) = {'\u00A3'}5,384{'\n'}
        <Text style={styles.articleBold}>Weeks 9-26:</Text> {'\u00A3'}336.50 + {'\u00A3'}187.18 = {'\u00A3'}523.68/week = {'\u00A3'}9,426{'\n'}
        <Text style={styles.articleBold}>Weeks 27-39:</Text> {'\u00A3'}187.18/week = {'\u00A3'}2,433{'\n\n'}
        <Text style={styles.articleBold}>Total gross maternity pay: approximately {'\u00A3'}17,243 over 39 weeks.</Text>
      </Text>
      <Text style={styles.articleBody}>
        Compare this to SMP only (no OMP): approximately {'\u00A3'}10,238 over 39 weeks. The OMP top-up is worth around {'\u00A3'}7,000 for a Band 5 earner. This is why it is so important to meet the OMP eligibility criteria.
      </Text>

      <H2 style={styles.articleHeading}>The 3-Month Return-to-Work Requirement</H2>
      <Text style={styles.articleBody}>
        One condition of receiving OMP that catches some people off guard is the requirement to return to NHS employment for at least 3 months after your maternity leave ends. If you do not return, or if you leave before completing 3 months, your Trust can ask you to repay the OMP element of your maternity pay (the top-up above SMP). You would keep the SMP portion, as that is a statutory entitlement.
      </Text>
      <Text style={styles.articleBody}>
        The 3-month return period can be served at any NHS employer, not just your current Trust. Part-time hours also count. If you are unsure about returning, factor this potential repayment into your financial planning.
      </Text>

      <H2 style={styles.articleHeading}>What About Tax and National Insurance?</H2>
      <Text style={styles.articleBody}>
        Maternity pay is taxable income and subject to National Insurance, just like your normal salary. However, because your earnings are lower during maternity leave, you will likely pay less tax overall. Your tax code remains the same, and PAYE adjusts automatically. If you have overpaid tax during the year (for example, from extra shifts earlier), you may receive a refund through your payroll.
      </Text>
      <Text style={styles.articleBody}>
        Pension contributions continue during paid maternity leave. Your contributions are based on your actual maternity pay, but your Trust continues to contribute based on your full-time equivalent salary. This means your pension is protected during maternity leave with no gap in service.
      </Text>

      <H2 style={styles.articleHeading}>Use Our Calculator to See Your Figures</H2>
      <Text style={styles.articleBody}>
        Every situation is different. Your band, step point, working pattern, and any additional earnings all affect your maternity pay. Use our free calculator to get a personalised week-by-week breakdown based on your specific circumstances.
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        For more detail on how bank shifts and overtime can boost your AWE, see our guide on{' '}
        <Link to="/blog/bank-shifts-maternity-pay" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>how bank shifts can boost your maternity pay</Text>
        </Link>
        . And if you have questions about your rights during maternity leave, our{' '}
        <Link to="/blog/nhs-maternity-leave-rights" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>maternity leave rights guide</Text>
        </Link>
        {' '}covers employment protections in detail.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This information is based on NHS Agenda for Change terms and conditions and is for general guidance. Individual Trusts may have local variations. Always confirm your entitlements with your Trust's HR or payroll department.
      </Text>
    </View>
  );
}
