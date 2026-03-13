import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function SpreadingMaternityPay({ post, styles, CATEGORY_COLORS }) {
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
        If you are planning maternity leave from the NHS, you may have heard that some Trusts allow you to "spread" your maternity pay over the full 12 months of leave. Instead of receiving full pay, then half pay, then Statutory Maternity Pay (SMP), and then nothing, the total amount is averaged out into equal monthly payments. This can make budgeting far simpler, but it is not available everywhere and it is not always the right choice. Here is what you need to know.
      </Text>

      <H2 style={styles.articleHeading}>What Does Spreading Pay Mean?</H2>
      <Text style={styles.articleBody}>
        Under the standard NHS Occupational Maternity Pay (OMP) scheme, your income follows a stepped pattern. You receive 8 weeks at full pay, 18 weeks at half pay plus SMP, 13 weeks of SMP only, and then up to 13 weeks of no pay if you take the full 52 weeks of leave.
      </Text>
      <Text style={styles.articleBody}>
        Spreading (sometimes called "averaging" or "equalising") takes the total gross amount you would receive across all paid weeks and divides it into 12 equal monthly payments. The total amount of money you receive does not change. It is simply distributed differently across the year.
      </Text>
      <Text style={styles.articleBody}>
        This means your early months will be lower than they would have been under the standard structure, but your later months will be higher. You avoid the sharp income cliff that many NHS staff find difficult to manage.
      </Text>

      <H2 style={styles.articleHeading}>How It Works in Practice</H2>
      <Text style={styles.articleBody}>
        Let us use a Band 5 midpoint salary of {'\u00A3'}32,750 per year (approximately {'\u00A3'}2,729 per month gross) as an example. Here is how the two approaches compare in gross monthly income:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Standard Payment Structure:</Text>{'\n'}
        Months 1-2: ~{'\u00A3'}2,729/month (full pay){'\n'}
        Months 3-6: ~{'\u00A3'}2,166/month (half pay + SMP){'\n'}
        Months 7-9: ~{'\u00A3'}800/month (SMP only){'\n'}
        Months 10-12: {'\u00A3'}0 (unpaid leave)
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Spread Payment Structure:</Text>{'\n'}
        Months 1-12: ~{'\u00A3'}1,424/month (same total, distributed evenly)
      </Text>
      <Text style={styles.articleBody}>
        The total gross maternity pay in both cases is approximately {'\u00A3'}17,090. Nothing extra is added and nothing is taken away. The only difference is timing. With the spread option, you receive a predictable {'\u00A3'}1,424 each month rather than a figure that swings from {'\u00A3'}2,729 down to zero.
      </Text>

      <H2 style={styles.articleHeading}>Pros of Spreading Your Pay</H2>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Easier budgeting:</Text> A single, consistent monthly figure makes it straightforward to plan your household finances. You know exactly what is coming in every month for the full year.{'\n\n'}
        <Text style={styles.articleBold}>Consistent direct debits:</Text> Mortgage payments, rent, council tax, and utility bills do not change just because your income drops. A steady income stream means you are less likely to fall short in the later months.{'\n\n'}
        <Text style={styles.articleBold}>Less financial stress:</Text> The months 7-12 period is when many NHS staff feel the most financial pressure. Having income throughout this period, rather than relying entirely on savings, can reduce anxiety during what should be time focused on your baby.{'\n\n'}
        <Text style={styles.articleBold}>No savings buffer needed:</Text> Under the standard structure, financial advisers typically recommend saving {'\u00A3'}5,000-{'\u00A3'}8,000 to cover the low and unpaid months. Spreading can significantly reduce or eliminate this requirement.
      </Text>

      <H2 style={styles.articleHeading}>Cons of Spreading Your Pay</H2>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Less money in the early months:</Text> Months 1-2 under standard pay give you your full salary. Under the spread model, you receive around {'\u00A3'}1,305 less per month during this period. This is the time when many new parents have one-off costs for baby equipment, nursery furniture, and other preparations.{'\n\n'}
        <Text style={styles.articleBold}>Tax complications:</Text> Spreading your pay can affect how tax and National Insurance contributions are calculated each month. Some staff have reported unexpected tax adjustments or year-end discrepancies. Your payroll department should be able to clarify how they handle this.{'\n\n'}
        <Text style={styles.articleBold}>Not all Trusts offer it:</Text> This is not a standard Agenda for Change entitlement. Whether it is available depends entirely on your employer's local policies.{'\n\n'}
        <Text style={styles.articleBold}>Cannot be reversed:</Text> In most Trusts, once you have opted for spread payments and your maternity leave has begun, you cannot switch back to the standard structure.
      </Text>

      <H2 style={styles.articleHeading}>Which Trusts Offer This?</H2>
      <Text style={styles.articleBody}>
        Spreading maternity pay is not part of the standard NHS terms and conditions under Agenda for Change. It is a local policy decision, meaning each Trust can choose whether or not to offer it.
      </Text>
      <Text style={styles.articleBody}>
        Some larger Trusts and Foundation Trusts do offer pay spreading as an option. Others have never implemented it. There is no central list of which Trusts participate, so you will need to check with your own employer.
      </Text>
      <Text style={styles.articleBody}>
        The best way to find out is to contact your HR department or payroll team directly. Ask whether "maternity pay spreading" or "maternity pay averaging" is available. Some Trusts may refer to it as "equalised maternity payments."
      </Text>

      <H2 style={styles.articleHeading}>How to Request It</H2>
      <Text style={styles.articleBody}>
        If your Trust does offer spreading, you will typically need to follow these steps:{'\n\n'}
        1. Contact your HR or payroll department as early as possible, ideally when you first notify them of your pregnancy{'\n'}
        2. Ask specifically whether maternity pay spreading or averaging is available at your Trust{'\n'}
        3. Submit your request in writing before your maternity leave starts - most Trusts require this to be agreed in advance{'\n'}
        4. Confirm in writing which option you have chosen (standard or spread) so there is a clear record{'\n'}
        5. Ask for written confirmation of what your monthly payments will be under the spread arrangement
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Timing is important.</Text> Most Trusts require the request to be made before your maternity leave begins. Once leave has started, it is usually too late to change the payment structure. Some Trusts set the deadline as early as 15 weeks before your expected due date, which aligns with the MATB1 certificate timing.
      </Text>
      <Text style={styles.articleBody}>
        If your Trust does not currently offer this option, it may be worth raising it with your staff-side representative or union. Some Trusts have introduced it following requests from staff.
      </Text>

      <H2 style={styles.articleHeading}>Is Spreading Right for You?</H2>
      <Text style={styles.articleBody}>
        The decision depends on your personal financial situation. Consider spreading if:{'\n\n'}
        - You have limited savings and cannot easily build a buffer before leave{'\n'}
        - Your fixed monthly outgoings are close to or above the SMP-only amount{'\n'}
        - You plan to take the full 52 weeks of leave{'\n'}
        - You value predictability and simplicity in your budgeting
      </Text>
      <Text style={styles.articleBody}>
        Consider sticking with the standard structure if:{'\n\n'}
        - You have significant one-off costs to cover in the early months{'\n'}
        - You already have a healthy savings buffer{'\n'}
        - You plan to return before month 10 (avoiding the unpaid period){'\n'}
        - You prefer to have more money available when baby first arrives
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        For a full breakdown of how NHS maternity pay works, read our{' '}
        <Link to="/blog/understanding-nhs-maternity-pay" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>complete guide to NHS maternity pay</Text>
        </Link>
        . If you are working on your finances for maternity leave, our{' '}
        <Link to="/blog/budgeting-for-maternity-leave" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>budgeting guide for maternity leave</Text>
        </Link>
        {' '}covers savings targets, benefit entitlements, and practical cost-cutting tips.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This article provides general guidance on NHS maternity pay options. Whether pay spreading is available depends on your employer's local policies. The figures used are illustrative and based on the 2025/26 Agenda for Change pay scales. Always confirm your options with your Trust's HR or payroll department before making a decision.
      </Text>
    </View>
  );
}
