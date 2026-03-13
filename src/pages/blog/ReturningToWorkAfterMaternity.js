import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function ReturningToWorkAfterMaternity({ post, styles, CATEGORY_COLORS }) {
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
        Returning to work after maternity leave is a big transition, and for NHS staff there are specific rules and practicalities that make it different from other employers. From the 3-month OMP repayment rule to flexible working options and childcare planning, getting prepared early makes the whole process smoother. This guide covers what you need to know and do.
      </Text>

      <H2 style={styles.articleHeading}>The 3-Month OMP Return Rule</H2>
      <Text style={styles.articleBody}>
        This is the single most important thing to understand about returning to NHS work after maternity leave. If you received Occupational Maternity Pay (the enhanced NHS pay above SMP), you are required to return to NHS employment for at least <Text style={styles.articleBold}>3 months (91 days)</Text> after your maternity leave ends.
      </Text>
      <Text style={styles.articleBody}>
        If you do not return, or if you leave before completing 3 months, your Trust can ask you to repay the OMP element. To be clear: you keep your Statutory Maternity Pay (that is a legal entitlement), but you would need to repay the difference between what you received and what SMP alone would have been.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>How much could you owe?</Text> For a Band 5 nurse on {'\u00A3'}35,000, the OMP top-up is worth approximately {'\u00A3'}7,000. For a Band 8a on {'\u00A3'}57,000, it could be over {'\u00A3'}12,000. These are significant sums.
      </Text>
      <Text style={styles.articleBody}>
        Key points about the 3-month rule:{'\n\n'}
        - The 3 months can be served at <Text style={styles.articleBold}>any NHS employer</Text>, not just your current Trust{'\n'}
        - Part-time hours count - you do not need to return full-time{'\n'}
        - Annual leave taken immediately after maternity leave counts towards the 3 months{'\n'}
        - Sick leave during the 3-month period does count{'\n'}
        - If you become pregnant again during the 3 months, the new maternity leave does not count - but you are not asked to repay until after the second maternity leave
      </Text>

      <H2 style={styles.articleHeading}>When to Return: Choosing Your Date</H2>
      <Text style={styles.articleBody}>
        You are entitled to up to 52 weeks of maternity leave. Most NHS staff return at one of these points:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>After 6 months (26 weeks):</Text> Maximises income and preserves the right to return to your exact same role. Good if you have childcare in place and are keen to get back. You retain all accrued annual leave to use later.{'\n\n'}
        <Text style={styles.articleBold}>After 9 months (39 weeks):</Text> The most common choice. SMP finishes at 39 weeks, so there is no financial incentive to stay off longer unless you want the time. You still have a strong right to return to the same or equivalent role.{'\n\n'}
        <Text style={styles.articleBold}>After 12 months (52 weeks):</Text> The full entitlement. The last 13 weeks are unpaid, but you still accrue annual leave. Many staff add their accrued annual leave to the end of the 52 weeks, extending total time off to 14-15 months.
      </Text>
      <Text style={styles.articleBody}>
        If you want to return earlier than your expected date, you must give your employer at least <Text style={styles.articleBold}>8 weeks' notice</Text>. If you return on your originally notified date, no additional notice is required.
      </Text>

      <H2 style={styles.articleHeading}>Using Accrued Annual Leave</H2>
      <Text style={styles.articleBody}>
        You continue to build up annual leave and bank holidays throughout your entire maternity leave, including unpaid weeks. This is a valuable benefit that many people overlook.
      </Text>
      <Text style={styles.articleBody}>
        For a full-time staff member with standard NHS leave (33 days plus 8 bank holidays), a 12-month maternity leave means accruing all 41 days. Options for using this leave:{'\n\n'}
        - <Text style={styles.articleBold}>Before maternity leave:</Text> Start your maternity leave later on paper but take annual leave first. This means full pay for those weeks.{'\n'}
        - <Text style={styles.articleBold}>After maternity leave:</Text> Add it to the end, giving you an extra 8-9 weeks at full pay before returning. This is the most popular option.{'\n'}
        - <Text style={styles.articleBold}>Phased return:</Text> Use annual leave to work reduced days in the first few weeks back (for example, 3 days per week for a month).
      </Text>
      <Text style={styles.articleBody}>
        Discuss your preference with your manager well before your return date. Some Trusts prefer one approach over another for rota planning purposes.
      </Text>

      <H2 style={styles.articleHeading}>Flexible Working Options</H2>
      <Text style={styles.articleBody}>
        The NHS is one of the better employers for flexible working, and you have a legal right to request it from day one of employment. Common arrangements for returning from maternity leave:
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Part-time hours:</Text> Moving from 37.5 to 22.5 or 30 hours per week is common. Your pay, annual leave, and pension contributions adjust proportionally. Your pay band and step point stay the same.{'\n\n'}
        <Text style={styles.articleBold}>Compressed hours:</Text> Working your full hours over fewer days (for example, 3 x 12.5 hour shifts instead of 5 x 7.5). Popular in clinical roles as it reduces childcare days needed.{'\n\n'}
        <Text style={styles.articleBold}>Changed shift patterns:</Text> Requesting day shifts only, no weekends, or no nights. This may reduce your unsocial hours pay but can make childcare much simpler.{'\n\n'}
        <Text style={styles.articleBold}>Annualised hours:</Text> Working more hours during term time and fewer during school holidays. Less common in the NHS but worth asking about.
      </Text>
      <Text style={styles.articleBody}>
        Submit your flexible working request in writing at least 8 weeks before you want the change to take effect. Your employer must respond within 2 months and can only refuse on specific business grounds. If refused, consider whether a trial period might be possible.
      </Text>

      <H2 style={styles.articleHeading}>Childcare Planning</H2>
      <Text style={styles.articleBody}>
        Childcare is typically the biggest practical challenge of returning to work. Start planning early because nursery waiting lists can be long.
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Nursery costs:</Text> Full-time nursery fees average {'\u00A3'}1,100-{'\u00A3'}1,400/month depending on your area. Part-time places are proportionally cheaper.{'\n\n'}
        <Text style={styles.articleBold}>Free childcare entitlements (from April 2025):</Text>{'\n'}
        - 15 hours/week free for all 3 and 4 year olds{'\n'}
        - 30 hours/week free for working parents of 3 and 4 year olds{'\n'}
        - 15 hours/week free for eligible 2 year olds{'\n'}
        - 15 hours/week free from 9 months for working parents{'\n\n'}
        <Text style={styles.articleBold}>Tax-Free Childcare:</Text> The government tops up your childcare payments by 25%, up to {'\u00A3'}2,000/year per child. You pay {'\u00A3'}8 and the government adds {'\u00A3'}2, making {'\u00A3'}10. Set up your account on the HMRC Childcare Service website.{'\n\n'}
        <Text style={styles.articleBold}>NHS workplace nurseries:</Text> Some larger hospitals have on-site nurseries with discounted rates for staff. Places fill up quickly, so get on the waiting list as early as possible.{'\n\n'}
        <Text style={styles.articleBold}>Childminders:</Text> Often more flexible with hours than nurseries and can be more affordable. Registered childminders can accept Tax-Free Childcare payments.
      </Text>

      <H2 style={styles.articleHeading}>Breastfeeding at Work</H2>
      <Text style={styles.articleBody}>
        Your employer is required to provide suitable facilities for you to rest and to express milk if you are breastfeeding. In practice, this means:{'\n\n'}
        - A private room (not a toilet) with a lock{'\n'}
        - Access to a fridge for storing expressed milk{'\n'}
        - Reasonable break times for expressing
      </Text>
      <Text style={styles.articleBody}>
        Many NHS Trusts have specific breastfeeding at work policies. Speak to your manager or occupational health team before you return so arrangements are in place.
      </Text>

      <H2 style={styles.articleHeading}>Revalidation and Professional Registration</H2>
      <Text style={styles.articleBody}>
        If you are a registered professional (nurse, midwife, AHP), your registration requirements continue during maternity leave. However:{'\n\n'}
        - Your revalidation date does not change{'\n'}
        - Maternity leave is a valid reason for requesting a deferral if your revalidation falls during leave{'\n'}
        - KIT days can contribute to your practice hours{'\n'}
        - Online CPD and reflective activities done during maternity leave count
      </Text>
      <Text style={styles.articleBody}>
        Contact your professional body (NMC, HCPC, etc.) early if your revalidation falls during or shortly after maternity leave.
      </Text>

      <H2 style={styles.articleHeading}>Emotional Preparation</H2>
      <Text style={styles.articleBody}>
        Returning to work after maternity leave can be emotionally challenging, and that is normal. Practical steps that help:{'\n\n'}
        - Use KIT days to ease back in gradually before your official return{'\n'}
        - Connect with colleagues who have recently returned from maternity leave{'\n'}
        - Speak to your manager about a phased return if that would help{'\n'}
        - If you are struggling, your Trust's Employee Assistance Programme provides free, confidential counselling{'\n'}
        - Consider whether your role still suits your circumstances - there is no obligation to stay in the same post if a transfer would work better
      </Text>

      <H2 style={styles.articleHeading}>Your Return Checklist</H2>
      <Text style={styles.articleBody}>
        - Confirm your return date with your manager (8 weeks' notice if returning early){'\n'}
        - Discuss how to use accrued annual leave{'\n'}
        - Submit flexible working request if needed (8 weeks before desired start){'\n'}
        - Arrange childcare and confirm start dates{'\n'}
        - Set up Tax-Free Childcare account{'\n'}
        - Check revalidation dates and CPD requirements{'\n'}
        - Complete any mandatory training updates (can be done as a KIT day){'\n'}
        - Arrange breastfeeding facilities if needed{'\n'}
        - Update your IT access and smart card if needed
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        For more on how KIT days can help ease your transition, see our guide on{' '}
        <Link to="/blog/kit-days-explained" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>how KIT days work</Text>
        </Link>
        . If you are planning your finances before maternity leave, our{' '}
        <Link to="/blog/budgeting-for-maternity-leave" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>budgeting guide</Text>
        </Link>
        {' '}covers practical steps to prepare.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This article provides general guidance based on NHS Agenda for Change terms and conditions. Individual Trusts may have local policies that differ. Always confirm arrangements with your Trust's HR department.
      </Text>
    </View>
  );
}
