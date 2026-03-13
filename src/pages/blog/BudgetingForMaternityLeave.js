import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';

export default function BudgetingForMaternityLeave({ post, styles, CATEGORY_COLORS }) {
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
        Maternity leave is one of the most significant financial transitions you will face as an NHS worker. Even with the relatively generous NHS occupational maternity pay, your income drops noticeably from month 3 onwards and disappears entirely after month 9 if you take the full year. Planning ahead can be the difference between enjoying your maternity leave and spending it worrying about money.
      </Text>

      <Text style={styles.articleHeading}>Step 1: Map Your Income Month by Month</Text>
      <Text style={styles.articleBody}>
        The first thing to do is work out exactly what you will receive each month during your maternity leave. NHS maternity pay is not a flat amount; it changes across three distinct phases.
      </Text>
      <Text style={styles.articleBody}>
        Let us use a Band 5 nurse on {'\u00A3'}35,000 as a worked example. Monthly take-home (after tax, NI, and pension) is roughly {'\u00A3'}2,300.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Months 1-2 (full pay):</Text> ~{'\u00A3'}2,300/month take-home. No change from your normal salary.{'\n\n'}
        <Text style={styles.articleBold}>Months 3-6 (half pay + SMP):</Text> ~{'\u00A3'}1,650/month take-home. A drop of around {'\u00A3'}650/month.{'\n\n'}
        <Text style={styles.articleBold}>Months 7-9 (SMP only):</Text> ~{'\u00A3'}750/month take-home. A significant drop, receiving only the flat-rate SMP.{'\n\n'}
        <Text style={styles.articleBold}>Months 10-12 (unpaid):</Text> {'\u00A3'}0. No pay at all if you take the full 52 weeks.
      </Text>
      <Text style={styles.articleBody}>
        Use our{' '}
        <Link to="/calculator" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>maternity pay calculator</Text>
        </Link>
        {' '}to get your personalised figures. The exact amounts depend on your band, step point, and working pattern.
      </Text>

      <Text style={styles.articleHeading}>Step 2: Calculate Your Essential Monthly Outgoings</Text>
      <Text style={styles.articleBody}>
        List every fixed cost you cannot avoid. Be honest and thorough:
      </Text>
      <Text style={styles.articleBody}>
        - Rent or mortgage{'\n'}
        - Council tax{'\n'}
        - Utilities (gas, electric, water){'\n'}
        - Food shopping{'\n'}
        - Insurance (car, home, life){'\n'}
        - Phone and broadband{'\n'}
        - Loan or credit card minimum payments{'\n'}
        - Transport costs (even if reduced during leave){'\n'}
        - Childcare for existing children
      </Text>
      <Text style={styles.articleBody}>
        For most NHS staff, essential monthly outgoings fall between {'\u00A3'}1,200 and {'\u00A3'}2,000 depending on housing costs and location. The goal is to identify the gap between your reduced maternity pay and your essentials.
      </Text>

      <Text style={styles.articleHeading}>Step 3: Build a Maternity Leave Savings Target</Text>
      <Text style={styles.articleBody}>
        Once you know your income timeline and your essentials, calculate the shortfall for each month and add them up. This gives you a total savings target.
      </Text>
      <Text style={styles.articleBody}>
        Using our Band 5 example with {'\u00A3'}1,600/month essentials:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Months 1-2:</Text> No shortfall ({'\u00A3'}2,300 income vs {'\u00A3'}1,600 essentials){'\n'}
        <Text style={styles.articleBold}>Months 3-6:</Text> No shortfall ({'\u00A3'}1,650 vs {'\u00A3'}1,600) - just barely covered{'\n'}
        <Text style={styles.articleBold}>Months 7-9:</Text> Shortfall of {'\u00A3'}850/month x 3 = {'\u00A3'}2,550{'\n'}
        <Text style={styles.articleBold}>Months 10-12:</Text> Shortfall of {'\u00A3'}1,600/month x 3 = {'\u00A3'}4,800{'\n\n'}
        <Text style={styles.articleBold}>Total savings target: {'\u00A3'}7,350</Text> for a full 12-month leave.
      </Text>
      <Text style={styles.articleBody}>
        If taking 9 months instead of 12, the target drops to {'\u00A3'}2,550. That is a much more achievable figure and one of the reasons many NHS staff return after 9 months rather than taking the full year.
      </Text>

      <Text style={styles.articleHeading}>Step 4: Start Saving Early</Text>
      <Text style={styles.articleBody}>
        The earlier you start, the less painful it is. If you know your plans 12 months in advance, that target of {'\u00A3'}7,350 works out at around {'\u00A3'}613/month. With 6 months' notice, it is {'\u00A3'}1,225/month, which is far harder to manage.
      </Text>
      <Text style={styles.articleBody}>
        Practical ways to build your maternity fund:{'\n\n'}
        - Set up a standing order to a separate savings account on payday{'\n'}
        - Pick up extra bank shifts through your Trust in the months before leave (these also boost your AWE){'\n'}
        - Review and cancel unused subscriptions and memberships{'\n'}
        - Switch energy and insurance providers at renewal{'\n'}
        - Sell items you no longer need - baby equipment from friends and family groups can save hundreds
      </Text>

      <Text style={styles.articleHeading}>Step 5: Reduce Costs Before Baby Arrives</Text>
      <Text style={styles.articleBody}>
        There are several costs you can cut or reduce during maternity leave:{'\n\n'}
        <Text style={styles.articleBold}>Commuting:</Text> If you normally drive to work, you will save on fuel, parking, and potentially car insurance (notify your insurer of reduced mileage for a lower premium).{'\n\n'}
        <Text style={styles.articleBold}>Work lunches and coffees:</Text> These small daily costs add up. Even {'\u00A3'}5/day is {'\u00A3'}100/month.{'\n\n'}
        <Text style={styles.articleBold}>Professional subscriptions:</Text> Check whether any can be paused during leave.{'\n\n'}
        <Text style={styles.articleBold}>Uniform costs:</Text> No dry cleaning or replacement scrubs needed during leave.
      </Text>

      <Text style={styles.articleHeading}>Step 6: Check Your Benefits Entitlements</Text>
      <Text style={styles.articleBody}>
        Many NHS staff do not realise they may qualify for additional financial support during maternity leave. Income-based benefits are assessed on your current income, not your normal salary, so you may become eligible during the lower-paid months:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Child Benefit:</Text> {'\u00A3'}26.05/week for the first child (2025/26). Available to all regardless of income, though higher earners may need to repay some through the High Income Child Benefit Charge.{'\n\n'}
        <Text style={styles.articleBold}>Tax-Free Childcare:</Text> Up to {'\u00A3'}2,000/year per child towards childcare costs. You can set up your account before you need it.{'\n\n'}
        <Text style={styles.articleBold}>Universal Credit:</Text> Depending on household income and circumstances, you may qualify during the SMP-only or unpaid months.{'\n\n'}
        <Text style={styles.articleBold}>Council Tax Reduction:</Text> Some local authorities offer reductions for people on reduced income.{'\n\n'}
        <Text style={styles.articleBold}>NHS Pension:</Text> Your pension contributions are reduced in line with your maternity pay, but your Trust continues full employer contributions. No action needed.
      </Text>

      <Text style={styles.articleHeading}>Step 7: Plan for Baby Costs</Text>
      <Text style={styles.articleBody}>
        First babies do not need to be expensive. The biggest costs in the first year are:{'\n\n'}
        - Car seat: {'\u00A3'}50-200 (buy new for safety){'\n'}
        - Pram/pushchair: {'\u00A3'}100-800 (second-hand is fine){'\n'}
        - Cot and mattress: {'\u00A3'}60-200 (new mattress recommended){'\n'}
        - Nappies: ~{'\u00A3'}40/month for disposables, or ~{'\u00A3'}200 one-off for reusables{'\n'}
        - Clothing: minimal if you accept hand-me-downs (babies outgrow everything quickly)
      </Text>
      <Text style={styles.articleBody}>
        NHS staff often have good networks for second-hand baby items. Ask colleagues who have recently had babies. Many hospitals also have staff Facebook groups where baby items are given away or sold cheaply.
      </Text>

      <Text style={styles.articleHeading}>Step 8: Consider Your Return Date</Text>
      <Text style={styles.articleBody}>
        When you return to work significantly affects your finances. Returning after 9 months means you avoid the 3 unpaid months but need childcare sooner. Returning after 6 months maximises your income but means earlier childcare costs.
      </Text>
      <Text style={styles.articleBody}>
        Full-time nursery costs average {'\u00A3'}1,100-{'\u00A3'}1,400/month depending on region. However, from April 2025, eligible working parents can access 30 hours of free childcare from when their child turns 9 months old. This can reduce costs substantially and may influence your return date.
      </Text>
      <Text style={styles.articleBody}>
        Remember: you need to return for at least 3 months to keep your OMP. If you are considering not returning, factor in the potential repayment. See our{' '}
        <Link to="/blog/returning-to-work-after-maternity" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>returning to work guide</Text>
        </Link>
        {' '}for more on this.
      </Text>

      <Text style={styles.articleHeading}>A Simple Budget Template</Text>
      <Text style={styles.articleBody}>
        Here is a straightforward approach:{'\n\n'}
        1. Get your personalised maternity pay figures from our calculator{'\n'}
        2. List your monthly essentials{'\n'}
        3. Calculate the shortfall for each phase{'\n'}
        4. Set a total savings target{'\n'}
        5. Start a standing order today{'\n'}
        6. Check benefit entitlements on GOV.UK{'\n'}
        7. Review and cut non-essential spending
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This article provides general financial guidance and is not regulated financial advice. Benefit entitlements depend on individual circumstances. Check GOV.UK or speak to Citizens Advice for personalised benefits guidance.
      </Text>
    </View>
  );
}
