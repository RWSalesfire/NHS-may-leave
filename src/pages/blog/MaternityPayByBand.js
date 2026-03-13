import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';

export default function MaternityPayByBand({ post, styles, CATEGORY_COLORS }) {
  return (
    <View>
      <View style={[styles.categoryPill, { backgroundColor: (CATEGORY_COLORS[post.category] || colors.primary) + '20', marginBottom: spacing.md }]}>
        <Text style={[styles.blogCategory, { color: CATEGORY_COLORS[post.category] || colors.primary }]}>
          {post.category}
        </Text>
      </View>
      <Text style={styles.articleTitle}>{post.title}</Text>
      <Text style={styles.articleDate}>{post.date}</Text>

      <Text style={styles.articleBody}>
        One of the most common questions NHS staff ask when planning for maternity leave is: "How much will I actually get?" The answer depends heavily on your pay band and step point. The difference between a Band 2 healthcare assistant and a Band 8a manager is substantial, and it affects every phase of maternity pay differently. This guide gives you real figures for each band so you can plan with confidence.
      </Text>

      <Text style={styles.articleHeading}>How NHS Pay Bands Work (Quick Recap)</Text>
      <Text style={styles.articleBody}>
        NHS Agenda for Change pay bands run from Band 1 (being phased out) to Band 9. Each band has multiple step points that you progress through with experience, typically moving up one step per year. The 2025/26 pay scales set the figures used throughout this article.
      </Text>
      <Text style={styles.articleBody}>
        Your maternity pay is based on your <Text style={styles.articleBold}>actual salary</Text> at the time your Average Weekly Earnings are calculated, not the midpoint of your band. If you have recently moved up a step point, your maternity pay will reflect your new, higher salary.
      </Text>

      <Text style={styles.articleHeading}>Band 2: Healthcare Assistant / Support Worker</Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Annual salary range:</Text> {'\u00A3'}23,615 - {'\u00A3'}25,674{'\n'}
        <Text style={styles.articleBold}>Example: Band 2, top of band ({'\u00A3'}25,674)</Text>
      </Text>
      <Text style={styles.articleBody}>
        Weekly gross: {'\u00A3'}494{'\n'}
        Monthly take-home (approx): {'\u00A3'}1,750{'\n\n'}
        <Text style={styles.articleBold}>Weeks 1-8 (full pay):</Text> {'\u00A3'}494/week = {'\u00A3'}3,952 total{'\n'}
        <Text style={styles.articleBold}>Weeks 9-26 (half pay + SMP):</Text> {'\u00A3'}247 + {'\u00A3'}187.18 = {'\u00A3'}434.18/week = {'\u00A3'}7,815 total{'\n'}
        <Text style={styles.articleBold}>Weeks 27-39 (SMP only):</Text> {'\u00A3'}187.18/week = {'\u00A3'}2,433 total{'\n\n'}
        <Text style={styles.articleBold}>Total gross maternity pay over 39 weeks: approximately {'\u00A3'}14,200</Text>
      </Text>
      <Text style={styles.articleBody}>
        For Band 2 staff, the half-pay-plus-SMP phase (months 3-6) actually provides close to 88% of normal gross pay, making it relatively manageable. The biggest challenge is the SMP-only phase from month 7, where income drops to around {'\u00A3'}750/month take-home.
      </Text>

      <Text style={styles.articleHeading}>Band 5: Registered Nurse / Midwife / AHP</Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Annual salary range:</Text> {'\u00A3'}29,970 - {'\u00A3'}36,483{'\n'}
        <Text style={styles.articleBold}>Example: Band 5, midpoint ({'\u00A3'}33,000)</Text>
      </Text>
      <Text style={styles.articleBody}>
        Weekly gross: {'\u00A3'}635{'\n'}
        Monthly take-home (approx): {'\u00A3'}2,180{'\n\n'}
        <Text style={styles.articleBold}>Weeks 1-8 (full pay):</Text> {'\u00A3'}635/week = {'\u00A3'}5,080 total{'\n'}
        <Text style={styles.articleBold}>Weeks 9-26 (half pay + SMP):</Text> {'\u00A3'}317.50 + {'\u00A3'}187.18 = {'\u00A3'}504.68/week = {'\u00A3'}9,084 total{'\n'}
        <Text style={styles.articleBold}>Weeks 27-39 (SMP only):</Text> {'\u00A3'}187.18/week = {'\u00A3'}2,433 total{'\n\n'}
        <Text style={styles.articleBold}>Total gross maternity pay over 39 weeks: approximately {'\u00A3'}16,597</Text>
      </Text>
      <Text style={styles.articleBody}>
        Band 5 is where many nurses and midwives sit during their first pregnancy. The half-pay-plus-SMP phase provides around 79% of normal gross pay. The transition to SMP-only at month 7 is a noticeable drop of nearly {'\u00A3'}1,400/month in take-home pay.
      </Text>

      <Text style={styles.articleHeading}>Band 6: Senior Nurse / Specialist / Team Leader</Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Annual salary range:</Text> {'\u00A3'}37,338 - {'\u00A3'}44,962{'\n'}
        <Text style={styles.articleBold}>Example: Band 6, midpoint ({'\u00A3'}41,000)</Text>
      </Text>
      <Text style={styles.articleBody}>
        Weekly gross: {'\u00A3'}788{'\n'}
        Monthly take-home (approx): {'\u00A3'}2,600{'\n\n'}
        <Text style={styles.articleBold}>Weeks 1-8 (full pay):</Text> {'\u00A3'}788/week = {'\u00A3'}6,304 total{'\n'}
        <Text style={styles.articleBold}>Weeks 9-26 (half pay + SMP):</Text> {'\u00A3'}394 + {'\u00A3'}187.18 = {'\u00A3'}581.18/week = {'\u00A3'}10,461 total{'\n'}
        <Text style={styles.articleBold}>Weeks 27-39 (SMP only):</Text> {'\u00A3'}187.18/week = {'\u00A3'}2,433 total{'\n\n'}
        <Text style={styles.articleBold}>Total gross maternity pay over 39 weeks: approximately {'\u00A3'}19,198</Text>
      </Text>
      <Text style={styles.articleBody}>
        At Band 6, the gap between your normal salary and SMP-only pay is more pronounced. The SMP-only period provides barely 24% of your normal gross pay. If you are at the top of Band 6, the shortfall during months 7-9 can be over {'\u00A3'}1,800/month.
      </Text>

      <Text style={styles.articleHeading}>Band 7: Advanced Practitioner / Ward Manager</Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Annual salary range:</Text> {'\u00A3'}46,148 - {'\u00A3'}52,809{'\n'}
        <Text style={styles.articleBold}>Example: Band 7, midpoint ({'\u00A3'}49,000)</Text>
      </Text>
      <Text style={styles.articleBody}>
        Weekly gross: {'\u00A3'}942{'\n'}
        Monthly take-home (approx): {'\u00A3'}3,000{'\n\n'}
        <Text style={styles.articleBold}>Weeks 1-8 (full pay):</Text> {'\u00A3'}942/week = {'\u00A3'}7,536 total{'\n'}
        <Text style={styles.articleBold}>Weeks 9-26 (half pay + SMP):</Text> {'\u00A3'}471 + {'\u00A3'}187.18 = {'\u00A3'}658.18/week = {'\u00A3'}11,847 total{'\n'}
        <Text style={styles.articleBold}>Weeks 27-39 (SMP only):</Text> {'\u00A3'}187.18/week = {'\u00A3'}2,433 total{'\n\n'}
        <Text style={styles.articleBold}>Total gross maternity pay over 39 weeks: approximately {'\u00A3'}21,816</Text>
      </Text>

      <Text style={styles.articleHeading}>Band 8a: Principal / Service Manager</Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Annual salary range:</Text> {'\u00A3'}53,755 - {'\u00A3'}60,504{'\n'}
        <Text style={styles.articleBold}>Example: Band 8a, midpoint ({'\u00A3'}57,000)</Text>
      </Text>
      <Text style={styles.articleBody}>
        Weekly gross: {'\u00A3'}1,096{'\n'}
        Monthly take-home (approx): {'\u00A3'}3,380{'\n\n'}
        <Text style={styles.articleBold}>Weeks 1-8 (full pay):</Text> {'\u00A3'}1,096/week = {'\u00A3'}8,768 total{'\n'}
        <Text style={styles.articleBold}>Weeks 9-26 (half pay + SMP):</Text> {'\u00A3'}548 + {'\u00A3'}187.18 = {'\u00A3'}735.18/week = {'\u00A3'}13,233 total{'\n'}
        <Text style={styles.articleBold}>Weeks 27-39 (SMP only):</Text> {'\u00A3'}187.18/week = {'\u00A3'}2,433 total{'\n\n'}
        <Text style={styles.articleBold}>Total gross maternity pay over 39 weeks: approximately {'\u00A3'}24,434</Text>
      </Text>
      <Text style={styles.articleBody}>
        At Band 8a, the total maternity pay figure looks higher, but the proportional drop is the steepest. During months 7-9 on SMP only, a Band 8a earner receives roughly 17% of their normal gross pay. The monthly shortfall can exceed {'\u00A3'}2,600. Financial preparation is essential at this level.
      </Text>

      <Text style={styles.articleHeading}>The Key Pattern: SMP Is the Equaliser</Text>
      <Text style={styles.articleBody}>
        Regardless of your band, everyone receives the same flat-rate SMP of {'\u00A3'}187.18/week from week 27 onwards. This means higher earners experience a much larger proportional income drop during the final paid phase.
      </Text>
      <Text style={styles.articleBody}>
        Here is the percentage of normal gross pay that SMP represents by band:{'\n\n'}
        Band 2: 38%{'\n'}
        Band 5: 29%{'\n'}
        Band 6: 24%{'\n'}
        Band 7: 20%{'\n'}
        Band 8a: 17%
      </Text>
      <Text style={styles.articleBody}>
        This pattern means that higher-band staff generally need a larger savings buffer to maintain their lifestyle during the SMP-only months.
      </Text>

      <Text style={styles.articleHeading}>Part-Time and Compressed Hours</Text>
      <Text style={styles.articleBody}>
        If you work part-time, your maternity pay is calculated on your actual part-time salary, not the full-time equivalent. A Band 5 nurse working 0.6 WTE (22.5 hours/week) would have an annual salary of approximately {'\u00A3'}19,800, and all maternity pay figures scale accordingly.
      </Text>
      <Text style={styles.articleBody}>
        Compressed hours (for example, 3 long days instead of 5 standard days) do not affect the calculation, provided your contracted hours and annual salary remain the same.
      </Text>

      <Text style={styles.articleHeading}>How to Increase Your Maternity Pay</Text>
      <Text style={styles.articleBody}>
        Regardless of your band, there are ways to boost your maternity pay figure:{'\n\n'}
        - <Text style={styles.articleBold}>Bank shifts through your Trust</Text> during the AWE calculation window{'\n'}
        - <Text style={styles.articleBold}>Unsocial hours</Text> (nights, weekends) which carry premium rates{'\n'}
        - <Text style={styles.articleBold}>On-call payments</Text> if applicable to your role{'\n'}
        - <Text style={styles.articleBold}>Acting up</Text> into a higher band temporarily (if this falls within the calculation period)
      </Text>
      <Text style={styles.articleBody}>
        Read our detailed guide on{' '}
        <Link to="/blog/bank-shifts-maternity-pay" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>using bank shifts to boost your maternity pay</Text>
        </Link>
        {' '}for the full strategy.
      </Text>

      <Text style={styles.articleHeading}>Get Your Personalised Breakdown</Text>
      <Text style={styles.articleBody}>
        The figures above are based on standard full-time salaries at midpoints. Your actual maternity pay depends on your exact salary, step point, and any additional earnings. Use our calculator for a precise, week-by-week breakdown tailored to your situation.
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Band's Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> Salary figures are based on the 2025/26 NHS Agenda for Change pay scales. Actual take-home pay varies based on tax code, pension contributions, student loan repayments, and other deductions. Use these figures as a guide and confirm with your payroll department.
      </Text>
    </View>
  );
}
