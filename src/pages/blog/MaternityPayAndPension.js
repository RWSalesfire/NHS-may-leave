import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function MaternityPayAndPension({ post, styles, CATEGORY_COLORS }) {
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
        When you go on maternity leave from the NHS, your pension is one of those things that tends to slip down the priority list. But your NHS Pension is one of the most valuable parts of your employment package, and understanding how it works during maternity leave can save you money and protect your retirement income. The good news is that the NHS Pension Scheme is designed to protect you during this period, though there are a few things you need to be aware of.
      </Text>

      <H2 style={styles.articleHeading}>Your Pension During Maternity Leave</H2>
      <Text style={styles.articleBody}>
        Your membership of the NHS Pension Scheme continues throughout your paid maternity leave. This covers weeks 1 to 39 (the period during which you receive either full pay, half pay plus SMP, or SMP only). There is no gap in your pensionable service during this time, and you do not need to take any action to maintain your membership.
      </Text>
      <Text style={styles.articleBody}>
        This is a significant benefit. In many private sector pension schemes, reduced pay means reduced pension building. The NHS scheme works differently, and it is worth understanding exactly how.
      </Text>

      <H2 style={styles.articleHeading}>How Contributions Change</H2>
      <Text style={styles.articleBody}>
        During maternity leave, pension contributions work on a split basis:{'\n\n'}
        <Text style={styles.articleBold}>Your contributions (employee):</Text> These are calculated based on your actual maternity pay - the amount you are actually receiving each month. As your pay drops through each phase of maternity leave, your pension contributions drop proportionally.{'\n\n'}
        <Text style={styles.articleBold}>Your employer's contributions:</Text> These continue to be calculated based on your notional full-time equivalent salary - the amount you would have been earning if you were at work. Your Trust pays their full contribution as if you were on normal pay.
      </Text>
      <Text style={styles.articleBody}>
        This arrangement protects your pension. Even though you are paying less in, your employer maintains their full contribution, and your pension builds up as though you were receiving your normal salary. This is done through a mechanism called Assumed Pensionable Pay.
      </Text>

      <H2 style={styles.articleHeading}>Contributions by Phase</H2>
      <Text style={styles.articleBody}>
        Let us look at how this works in practice using a Band 5 salary of {'\u00A3'}32,750. At this salary level, the employee contribution tier is 6.8%.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Weeks 1-8 (full pay):</Text>{'\n'}
        Your monthly gross pay: ~{'\u00A3'}2,729{'\n'}
        Your pension contribution (6.8%): ~{'\u00A3'}186/month{'\n'}
        Employer contribution: based on full salary{'\n'}
        Pension builds up at: full rate
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Weeks 9-26 (half pay + SMP):</Text>{'\n'}
        Your monthly gross pay: ~{'\u00A3'}1,865 (half pay {'\u00A3'}1,365 + SMP ~{'\u00A3'}500){'\n'}
        Your pension contribution (6.8% of pensionable pay): ~{'\u00A3'}127/month{'\n'}
        Employer contribution: still based on full salary{'\n'}
        Pension builds up at: full rate (protected by APP)
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Weeks 27-39 (SMP only):</Text>{'\n'}
        Your monthly gross pay: ~{'\u00A3'}780 (SMP at {'\u00A3'}187.18/week){'\n'}
        Your pension contribution (6.8%): ~{'\u00A3'}53/month{'\n'}
        Employer contribution: still based on full salary{'\n'}
        Pension builds up at: full rate (protected by APP)
      </Text>
      <Text style={styles.articleBody}>
        Notice how your personal contributions drop significantly through each phase, but your pension continues to build as though you were on full pay. This is one of the strongest protections in the NHS Pension Scheme for maternity leave.
      </Text>

      <H2 style={styles.articleHeading}>Unpaid Leave and Pension Gaps</H2>
      <Text style={styles.articleBody}>
        The picture changes during weeks 40-52 if you take the full year of maternity leave. This is the unpaid period, and it creates a gap in your pension record. During unpaid maternity leave:{'\n\n'}
        - No employee pension contributions are deducted (because there is no pay){'\n'}
        - No employer contributions are made{'\n'}
        - Your pensionable service pauses{'\n'}
        - Your pension does not build up during this period
      </Text>
      <Text style={styles.articleBody}>
        However, you have the option to "buy back" this period, and it is worth considering carefully.
      </Text>

      <H2 style={styles.articleHeading}>Buying Back Unpaid Leave</H2>
      <Text style={styles.articleBody}>
        If you take unpaid maternity leave (weeks 40-52), you can elect to pay contributions to cover this gap. This is sometimes referred to as purchasing "Assumed Pensionable Pay" for the unpaid period. The key rules are:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Notification deadline:</Text> You must notify your employer within 30 days of returning to work that you wish to buy back the unpaid period. If you miss this deadline, you may lose the option entirely.{'\n\n'}
        <Text style={styles.articleBold}>Cost calculation:</Text> The cost is based on your notional full-time salary, not your maternity pay. For a Band 5 on {'\u00A3'}32,750, the cost of buying back 3 months of unpaid leave at 6.8% would be approximately {'\u00A3'}556 ({'\u00A3'}2,729 x 6.8% x 3 months).{'\n\n'}
        <Text style={styles.articleBold}>Payment method:</Text> Most Trusts allow you to spread the cost through additional payroll deductions over a period of time after you return. You do not usually need to pay the full amount as a lump sum.{'\n\n'}
        <Text style={styles.articleBold}>Employer contribution:</Text> When you buy back unpaid leave, your employer also makes their contribution for that period, meaning your pension is fully restored as if you had been working.
      </Text>

      <H2 style={styles.articleHeading}>What Is Assumed Pensionable Pay (APP)?</H2>
      <Text style={styles.articleBody}>
        Assumed Pensionable Pay is the mechanism that protects your pension during paid maternity leave. It was introduced as part of the 2015 NHS Pension Scheme reforms. Under APP, your pensionable pay during maternity leave is "assumed" to be your normal salary, regardless of what you are actually being paid.
      </Text>
      <Text style={styles.articleBody}>
        This means:{'\n\n'}
        - Your pension accrual rate stays the same as if you were working{'\n'}
        - Your CARE (Career Average Revalued Earnings) pension pot grows at your normal salary rate{'\n'}
        - The reduced contributions you pay during half pay and SMP phases do not reduce your pension entitlement{'\n'}
        - Your employer makes up the difference through their contributions
      </Text>
      <Text style={styles.articleBody}>
        APP applies automatically during paid maternity leave. You do not need to apply for it or take any action. Your payroll department handles the calculations. It only ceases during the unpaid period, which is why buying back that period is a separate decision.
      </Text>

      <H2 style={styles.articleHeading}>Impact on Your Pension</H2>
      <Text style={styles.articleBody}>
        For most NHS staff, taking maternity leave has a minimal long-term impact on their pension. Here is why:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>During paid leave (weeks 1-39):</Text> Your pension builds up at the full rate thanks to APP. There is zero impact on your pension entitlement, despite paying lower contributions.{'\n\n'}
        <Text style={styles.articleBold}>During unpaid leave (weeks 40-52):</Text> If you buy back the period within 30 days of returning, there is also zero impact. If you choose not to buy back, you lose approximately 3 months of pensionable service.
      </Text>
      <Text style={styles.articleBody}>
        To put that in perspective, for a Band 5 nurse on {'\u00A3'}32,750 in the 2015 CARE scheme (which accrues at 1/54th of pensionable pay per year), 3 months of missed service equates to roughly {'\u00A3'}152 per year less in annual pension at retirement. Over a 30-year career, one maternity leave with an unbought gap is a very small proportion of your total pension.
      </Text>
      <Text style={styles.articleBody}>
        That said, for the relatively modest cost of buying back (around {'\u00A3'}556 in our Band 5 example), it is generally good value to close the gap. The return on that investment through future pension payments is typically favourable.
      </Text>

      <H2 style={styles.articleHeading}>Practical Steps to Protect Your Pension</H2>
      <Text style={styles.articleBody}>
        1. <Text style={styles.articleBold}>Check your pension tier:</Text> Your contribution rate depends on your salary band. Tiers range from 5.1% to 13.5%. Knowing your tier helps you understand what you will pay during each maternity phase.{'\n\n'}
        2. <Text style={styles.articleBold}>Request a pension estimate:</Text> Before going on maternity leave, you can request a pension estimate from the NHS Pensions Agency. This gives you a baseline to compare against after you return.{'\n\n'}
        3. <Text style={styles.articleBold}>Set a reminder for the 30-day deadline:</Text> If you take unpaid leave, set a calendar reminder to notify your employer within 30 days of your return that you wish to buy back the unpaid period. Missing this deadline is the single biggest pension risk during maternity leave.{'\n\n'}
        4. <Text style={styles.articleBold}>Check your payslips:</Text> When you return to work, verify that your pension contributions have restarted at the correct rate and that any buy-back arrangement has been set up properly.{'\n\n'}
        5. <Text style={styles.articleBold}>Review your Total Reward Statement:</Text> After returning, check your annual Total Reward Statement (available through ESR) to confirm your pensionable service is recorded correctly.
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        For a full explanation of how NHS maternity pay is structured, read our{' '}
        <Link to="/blog/understanding-nhs-maternity-pay" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>complete guide to NHS maternity pay</Text>
        </Link>
        . If you are planning your finances for the year ahead, our{' '}
        <Link to="/blog/budgeting-for-maternity-leave" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>budgeting guide for maternity leave</Text>
        </Link>
        {' '}covers savings targets, benefit entitlements, and ways to reduce costs. You can also see{' '}
        <Link to="/blog/maternity-pay-by-band" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>how maternity pay varies by NHS band</Text>
        </Link>
        {' '}for figures specific to your pay grade.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This article provides general guidance on the NHS Pension Scheme during maternity leave. Pension rules can change, and individual circumstances vary. The figures used are illustrative and based on the 2015 NHS Pension Scheme and 2025/26 pay scales. For personalised pension advice, contact the NHS Pensions Agency or speak to a qualified financial adviser.
      </Text>
    </View>
  );
}
