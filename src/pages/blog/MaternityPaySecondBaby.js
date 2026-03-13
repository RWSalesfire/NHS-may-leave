import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function MaternityPaySecondBaby({ post, styles, CATEGORY_COLORS }) {
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
        Going on maternity leave for a second time should feel more familiar, but the rules around NHS maternity pay can catch you out. Whether you are planning back-to-back pregnancies or returning to work between babies, your entitlement to Occupational Maternity Pay (OMP) and Statutory Maternity Pay (SMP) depends on service length, earnings history, and a few details that are easy to overlook. Here is what changes the second time around.
      </Text>

      <H2 style={styles.articleHeading}>Eligibility: Do You Still Qualify?</H2>
      <Text style={styles.articleBody}>
        To qualify for NHS Occupational Maternity Pay, you need 12 months of continuous NHS service by the beginning of the 11th week before your expected week of childbirth (the qualifying week, or QW). For SMP, the requirement is 26 weeks of continuous employment with the same employer by the 15th week before the due date.
      </Text>
      <Text style={styles.articleBody}>
        If you returned to work after your first baby and have remained employed by the NHS, you will almost certainly meet the service requirement for your second pregnancy. Continuous service is not broken by maternity leave, so even if you took the full 52 weeks the first time, that period counts towards your length of service.
      </Text>
      <Text style={styles.articleBody}>
        The key point is that your employment must be continuous. If you resigned and then rejoined, the clock resets and you would need to build up 12 months of service again from your new start date.
      </Text>

      <H2 style={styles.articleHeading}>Back-to-Back Pregnancies: The AWE Catch</H2>
      <Text style={styles.articleBody}>
        If you become pregnant again during or shortly after your first maternity leave, your continuous service is maintained. You remain employed throughout maternity leave, so the 12-month service requirement is not usually a problem. However, there is a significant catch that many NHS staff do not discover until it is too late.
      </Text>
      <Text style={styles.articleBody}>
        Your Statutory Maternity Pay is calculated based on your Average Weekly Earnings (AWE) during the 8-week reference period that falls in or around weeks 17 to 25 of your pregnancy. If this reference period falls while you are still on maternity leave from your first baby, your AWE will be based on whatever maternity pay you were receiving at the time, not your normal salary.
      </Text>
      <Text style={styles.articleBody}>
        This means if you were receiving SMP only ({'\u00A3'}184.03 per week in 2025/26) or were in the unpaid period of your first leave, your second maternity pay could be dramatically lower than expected. Your OMP calculation (full pay and half pay elements) is also affected because it is based on your earnings at the time.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Example:</Text> If your normal salary is {'\u00A3'}35,000 per year (roughly {'\u00A3'}673 per week) but your AWE reference period falls during SMP-only weeks, your AWE could be as low as {'\u00A3'}184.03 per week. That difference flows through to every week of your second maternity pay entitlement.
      </Text>

      <H2 style={styles.articleHeading}>The Strategy: Return to Work Before Your Second Leave Starts</H2>
      <Text style={styles.articleBody}>
        The most effective way to protect your maternity pay for a second baby is to return to work, even briefly, before your second maternity leave begins. If you are back on your normal salary during the AWE reference period, your second maternity pay will be calculated on your full earnings rather than on reduced maternity pay.
      </Text>
      <Text style={styles.articleBody}>
        Timing matters here. You need to be receiving your normal salary during the specific 8-week reference period (roughly weeks 17-25 of pregnancy). Work backwards from your due date to identify exactly when this falls, and make sure you have returned to work and are being paid your standard salary by that point.
      </Text>
      <Text style={styles.articleBody}>
        Even a short return to work can reset your earnings. Some staff return for just a few weeks before going back on maternity leave. The key is that your payslips during the reference period reflect your normal pay, not maternity pay.
      </Text>
      <Text style={styles.articleBody}>
        If returning to work is not practical (for health reasons or childcare), speak to your HR department as early as possible. They can confirm exactly when your reference period falls and help you understand what your pay will look like.
      </Text>

      <H2 style={styles.articleHeading}>If You Returned to Work Between Pregnancies</H2>
      <Text style={styles.articleBody}>
        If you went back to work after your first baby and have been receiving your normal salary for several months before becoming pregnant again, the standard rules apply. Your AWE will be based on your regular earnings during the reference period, and your maternity pay should look much the same as it did the first time (adjusted for any pay rises or band changes).
      </Text>
      <Text style={styles.articleBody}>
        This is the straightforward scenario. As long as you meet the 12-month continuous service requirement and your AWE reference period falls during normal working and normal pay, your second entitlement mirrors your first.
      </Text>

      <H2 style={styles.articleHeading}>The Return-to-Work Requirement for OMP</H2>
      <Text style={styles.articleBody}>
        Under Agenda for Change, NHS Occupational Maternity Pay includes a condition that you intend to return to work for at least 3 months after your maternity leave ends. This applies each time you take maternity leave, not just the first.
      </Text>
      <Text style={styles.articleBody}>
        If you received the half-pay element of OMP during your first maternity leave but did not return to work for 3 months afterwards (for example, because you went straight into a second maternity leave), your Trust may ask you to repay the half-pay portion. This is the 18 weeks of half pay that sits on top of SMP during weeks 9 to 26.
      </Text>
      <Text style={styles.articleBody}>
        In practice, going straight from one maternity leave into another is usually treated as fulfilling the return-to-work intention, provided you do eventually return for 3 months after your second leave. However, policies vary between Trusts, so check with your HR department to understand their specific approach. Get any agreement in writing.
      </Text>
      <Text style={styles.articleBody}>
        If you decide not to return to the NHS at all after your second baby, you may be asked to repay the half-pay element from both periods of maternity leave. The SMP portion never needs to be repaid regardless of whether you return.
      </Text>

      <H2 style={styles.articleHeading}>Band Progression and Pay Rises Between Babies</H2>
      <Text style={styles.articleBody}>
        If you have moved up a pay band or received an increment between your first and second maternity leave, your second maternity pay will reflect your higher salary. Your AWE is based on actual earnings during the reference period, so any pay rise that took effect before that window will increase your entitlement.
      </Text>
      <Text style={styles.articleBody}>
        Annual increments within your band continue to accrue during maternity leave, so if you were due an increment during your first leave, that should have been applied. Check your payslip when you return to make sure your pay reflects any increments you are owed.
      </Text>
      <Text style={styles.articleBody}>
        If a national Agenda for Change pay award is applied during your maternity leave, your maternity pay should also be recalculated. Your Trust's payroll team should handle this automatically, but it is worth confirming, particularly if the pay award falls during or just before your AWE reference period for your second pregnancy.
      </Text>

      <H2 style={styles.articleHeading}>Childcare Vouchers and Tax-Free Childcare</H2>
      <Text style={styles.articleBody}>
        If you are already using childcare vouchers (through a salary sacrifice scheme) for your first child, be aware that salary sacrifice deductions can reduce your gross earnings. If voucher deductions are active during your AWE reference period, they could lower your Average Weekly Earnings and therefore your SMP entitlement.
      </Text>
      <Text style={styles.articleBody}>
        The NHS childcare voucher scheme is closed to new applicants, but existing members can continue. If you are claiming, consider whether it makes sense to pause salary sacrifice before the AWE reference period for your second pregnancy, then restart it afterwards. Speak to your payroll team about the timing.
      </Text>
      <Text style={styles.articleBody}>
        Tax-Free Childcare (the government scheme that tops up {'\u00A3'}8,000 of childcare spending with {'\u00A3'}2,000 per child per year) is not affected by salary sacrifice and does not reduce your earnings. If you are not already registered, it may be worth looking into before your second baby arrives, as you can claim for both children.
      </Text>

      <H2 style={styles.articleHeading}>Practical Timeline Planning</H2>
      <Text style={styles.articleBody}>
        Planning the timing of a second pregnancy is deeply personal, but being aware of the financial implications can help you make informed decisions:{'\n\n'}
        <Text style={styles.articleBold}>Early in pregnancy (before 15 weeks to go):</Text> Identify your AWE reference period by counting back from your due date. Check whether it falls during normal pay or maternity pay from your first leave.{'\n\n'}
        <Text style={styles.articleBold}>By 25 weeks before due date:</Text> If possible, ensure you have returned to work and are receiving your normal salary. This is the latest point at which your earnings can influence the AWE calculation.{'\n\n'}
        <Text style={styles.articleBold}>By 15 weeks before due date (QW):</Text> Confirm your continuous service record with HR. Notify your employer of your pregnancy and intended maternity leave dates.{'\n\n'}
        <Text style={styles.articleBold}>Before leave starts:</Text> Request written confirmation of your maternity pay entitlement for the second leave. Clarify the return-to-work requirement for OMP and whether any half-pay repayment applies from your first leave.{'\n\n'}
        <Text style={styles.articleBold}>During leave:</Text> Keep track of any pay increments or national pay awards that should be applied to your entitlement.
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        For a full breakdown of how NHS maternity pay is calculated, read our{' '}
        <Link to="/blog/understanding-nhs-maternity-pay" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>complete guide to NHS maternity pay</Text>
        </Link>
        . If you work additional shifts and want to understand how they affect your entitlement, our{' '}
        <Link to="/blog/bank-shifts-maternity-pay" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>guide to bank shifts and maternity pay</Text>
        </Link>
        {' '}explains how extra earnings factor into your AWE calculation.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This article provides general guidance on NHS maternity pay for second and subsequent pregnancies. Entitlements can vary depending on your Trust's local policies and your individual circumstances. The figures used are illustrative and based on the 2025/26 Agenda for Change pay scales and SMP rates. Always confirm your specific entitlement with your Trust's HR or payroll department before making decisions about your maternity leave.
      </Text>
    </View>
  );
}
