import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function KITDaysExplained({ post, styles, CATEGORY_COLORS }) {
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
        Keeping in Touch days (usually called KIT days) are one of the most useful but poorly understood aspects of maternity leave. They allow you to work up to 10 days during your maternity leave without ending your leave or losing your maternity pay. For NHS staff, using KIT days strategically can ease your return, keep you connected, and put extra money in your pocket. Here is everything you need to know.
      </Text>

      <H2 style={styles.articleHeading}>What Are KIT Days?</H2>
      <Text style={styles.articleBody}>
        KIT days are a legal provision that allows employees on maternity leave to work for up to <Text style={styles.articleBold}>10 days</Text> during their leave without bringing their maternity leave or maternity pay to an end. They were introduced specifically to help women stay connected with their workplace during an extended absence.
      </Text>
      <Text style={styles.articleBody}>
        Key facts about KIT days:{'\n\n'}
        - You can work up to <Text style={styles.articleBold}>10 KIT days</Text> during your entire maternity leave{'\n'}
        - Each day counts as one KIT day regardless of hours worked (even 1 hour uses a full KIT day){'\n'}
        - They are completely <Text style={styles.articleBold}>voluntary</Text> - your employer cannot require you to work, and you cannot insist on working{'\n'}
        - They do not extend or shorten your maternity leave{'\n'}
        - They cannot be taken during the compulsory 2-week maternity leave period immediately after birth
      </Text>

      <H2 style={styles.articleHeading}>How KIT Day Pay Works in the NHS</H2>
      <Text style={styles.articleBody}>
        This is where it gets important, and where NHS Trusts vary. There are two main approaches Trusts take to paying KIT days:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Option 1: Normal daily rate on top of SMP</Text>{'\n'}
        The more generous approach. You receive your normal day's pay in addition to any SMP you are already receiving for that week. If you work a KIT day during the SMP-only phase (weeks 27-39), you get your daily rate plus the SMP.{'\n\n'}
        <Text style={styles.articleBold}>Option 2: Normal daily rate minus SMP (offset)</Text>{'\n'}
        Some Trusts pay your normal daily rate but offset the SMP against it. This means you receive your normal day's pay for the KIT day, but the SMP element is not paid on top.
      </Text>
      <Text style={styles.articleBody}>
        The difference matters. For a Band 5 nurse ({'\u00A3'}35,000/year), a normal daily rate is roughly {'\u00A3'}135 gross. Under Option 1, a KIT day during the SMP-only phase would pay {'\u00A3'}135 + {'\u00A3'}26.74 (daily SMP) = {'\u00A3'}161.74. Under Option 2, the same KIT day would pay {'\u00A3'}135 (with SMP absorbed).
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Always check your Trust's KIT day policy before agreeing to work.</Text> Ask your HR department or check your Trust's maternity policy document.
      </Text>

      <H2 style={styles.articleHeading}>What Can You Use KIT Days For?</H2>
      <Text style={styles.articleBody}>
        KIT days are flexible and can be used for any work-related activity. Common uses in the NHS include:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Mandatory training updates:</Text> If your Trust introduces new clinical systems, medication protocols, or safety procedures during your leave, a KIT day lets you get trained before your official return. This is particularly useful for e-prescribing rollouts, new patient record systems, or resuscitation updates.{'\n\n'}
        <Text style={styles.articleBold}>Team meetings and away days:</Text> Staying connected with your team helps you feel less out of the loop when you return. Some staff use a KIT day for their team's annual planning day or a departmental meeting.{'\n\n'}
        <Text style={styles.articleBold}>Shadowing or orientation:</Text> If your department has changed during your leave (new ward layout, different consultant teams, new processes), a shadowing day helps you hit the ground running.{'\n\n'}
        <Text style={styles.articleBold}>Clinical shifts:</Text> Some staff work a clinical shift as a KIT day, particularly towards the end of their leave, as a "practice run" before returning full-time. This can help with confidence and childcare logistics.{'\n\n'}
        <Text style={styles.articleBold}>CPD and study days:</Text> Conferences, workshops, or study days that contribute to your professional development and revalidation.
      </Text>

      <H2 style={styles.articleHeading}>When to Use Your KIT Days: Strategic Timing</H2>
      <Text style={styles.articleBody}>
        You have 10 KIT days to use across your entire maternity leave. Think about when they will be most valuable:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>During full pay (weeks 1-8):</Text> Least financial benefit since you are already on full pay. Using a KIT day here does not increase your income. Save them for later.{'\n\n'}
        <Text style={styles.articleBold}>During half pay + SMP (weeks 9-26):</Text> Moderate financial benefit. A KIT day during this phase tops up your income for that day.{'\n\n'}
        <Text style={styles.articleBold}>During SMP only (weeks 27-39):</Text> Greatest financial benefit. A KIT day here adds your full daily rate to the relatively low SMP payment. For a Band 5 nurse, each KIT day during this phase is worth an extra {'\u00A3'}108 in take-home pay (approximately).{'\n\n'}
        <Text style={styles.articleBold}>During unpaid leave (weeks 40-52):</Text> Maximum financial value. You have no other income, so the full daily rate is additional. However, working during the unpaid phase does not restart your maternity pay.
      </Text>
      <Text style={styles.articleBody}>
        A common strategy: use 2-3 KIT days for essential training or updates in the middle of your leave, then save 5-6 KIT days for the final month before your return. This gives you income during the lower-paid period and helps you transition back.
      </Text>

      <H2 style={styles.articleHeading}>Financial Impact: 10 KIT Days by Band</H2>
      <Text style={styles.articleBody}>
        Here is what 10 KIT days are worth at different bands (gross pay, assuming your Trust pays on top of SMP):
      </Text>
      <Text style={styles.articleBody}>
        Band 2 ({'\u00A3'}25,674): ~{'\u00A3'}99/day x 10 = {'\u00A3'}990{'\n'}
        Band 5 ({'\u00A3'}35,000): ~{'\u00A3'}135/day x 10 = {'\u00A3'}1,350{'\n'}
        Band 6 ({'\u00A3'}41,000): ~{'\u00A3'}158/day x 10 = {'\u00A3'}1,580{'\n'}
        Band 7 ({'\u00A3'}49,000): ~{'\u00A3'}188/day x 10 = {'\u00A3'}1,880{'\n'}
        Band 8a ({'\u00A3'}57,000): ~{'\u00A3'}219/day x 10 = {'\u00A3'}2,190
      </Text>
      <Text style={styles.articleBody}>
        For higher bands, 10 KIT days represent a meaningful addition to your maternity leave income.
      </Text>

      <H2 style={styles.articleHeading}>Tax and National Insurance on KIT Days</H2>
      <Text style={styles.articleBody}>
        KIT day payments are treated as normal earnings for tax and National Insurance purposes. They will appear on your payslip and are subject to the usual deductions. Because your overall earnings are lower during maternity leave, the tax impact is usually modest.
      </Text>
      <Text style={styles.articleBody}>
        One thing to watch: KIT day payments during certain weeks could potentially affect your SMP if they change your earnings record. In practice, this is rare and only relevant if your KIT days fall during the SMP calculation period (which would be unusual). If in doubt, ask your payroll department.
      </Text>

      <H2 style={styles.articleHeading}>What Happens If You Work More Than 10 Days?</H2>
      <Text style={styles.articleBody}>
        If you work more than 10 KIT days, each additional day could be treated as you having returned to work, which would end your maternity leave and maternity pay. This is a significant risk, so keep careful count.
      </Text>
      <Text style={styles.articleBody}>
        Note: any day on which you do any work counts as one KIT day, even if you only work for an hour. A 2-hour training session uses the same KIT day allocation as a full 12-hour clinical shift. Plan accordingly.
      </Text>

      <H2 style={styles.articleHeading}>KIT Days and Childcare</H2>
      <Text style={styles.articleBody}>
        A practical consideration: if you use KIT days before your regular childcare arrangement starts, you will need to arrange ad hoc care. Options include:{'\n\n'}
        - Partner taking a day of annual leave{'\n'}
        - Family or friends{'\n'}
        - A registered childminder for a single day (many will accept one-off bookings){'\n'}
        - NHS workplace crche if your hospital has one
      </Text>

      <H2 style={styles.articleHeading}>Shared Parental Leave in Touch (SPLIT) Days</H2>
      <Text style={styles.articleBody}>
        If you have opted into Shared Parental Leave rather than maternity leave, you receive <Text style={styles.articleBold}>20 SPLIT days</Text> instead of 10 KIT days. These work in the same way but give you more flexibility. SPLIT days are separate from your partner's entitlement.
      </Text>

      <H2 style={styles.articleHeading}>Practical Steps</H2>
      <Text style={styles.articleBody}>
        1. Read your Trust's KIT day policy to understand how payment works{'\n'}
        2. Discuss potential KIT days with your manager before going on leave{'\n'}
        3. Agree the purpose, date, and payment in writing before each KIT day{'\n'}
        4. Keep a record of how many KIT days you have used{'\n'}
        5. Plan your KIT days strategically - save most for later in your leave{'\n'}
        6. Remember: you can say no to any KIT day request
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        For more on planning your return, read our guide on{' '}
        <Link to="/blog/returning-to-work-after-maternity" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>returning to NHS work after maternity leave</Text>
        </Link>
        . And for a full overview of your employment rights during pregnancy and leave, see our{' '}
        <Link to="/blog/nhs-maternity-leave-rights" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>maternity leave rights guide</Text>
        </Link>
        .
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> KIT day payment arrangements vary between NHS Trusts. Always check your Trust's specific maternity policy and confirm payment terms with HR before agreeing to work KIT days.
      </Text>
    </View>
  );
}
