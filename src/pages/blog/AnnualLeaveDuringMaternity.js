import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function AnnualLeaveDuringMaternity({ post, styles, CATEGORY_COLORS }) {
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
        One of the most overlooked benefits of NHS maternity leave is annual leave accrual. Many people assume that annual leave stops building up once they go on maternity leave, especially during the unpaid weeks. That is not the case. You continue to accrue your full annual leave entitlement throughout all 52 weeks of maternity leave, including the 13 weeks of unpaid leave at the end. Understanding how this works can help you extend your time off or boost your income during the later months.
      </Text>

      <H2 style={styles.articleHeading}>Your Right to Accrue Annual Leave</H2>
      <Text style={styles.articleBody}>
        Under the Equality Act 2010 and the Maternity and Parental Leave Regulations, you are entitled to accrue annual leave during the entire period of your maternity leave. This applies to all 52 weeks, regardless of whether you are receiving full pay, half pay, Statutory Maternity Pay, or no pay at all.
      </Text>
      <Text style={styles.articleBody}>
        This is a statutory right, not a discretionary benefit. Your employer cannot reduce your annual leave entitlement because you are on maternity leave. You must be treated as though you were at work for the purposes of leave accrual.
      </Text>

      <H2 style={styles.articleHeading}>Bank Holidays Also Accrue</H2>
      <Text style={styles.articleBody}>
        In addition to your standard annual leave, you also accrue bank holidays during maternity leave. If your maternity leave spans a period that includes bank holidays, those days are added to your leave balance just as they would be if you were working.
      </Text>
      <Text style={styles.articleBody}>
        For someone taking the full 52 weeks of maternity leave, this typically means accruing all 8 bank holidays during that year. Combined with your standard entitlement, this can add up to a significant number of additional days off.
      </Text>

      <H2 style={styles.articleHeading}>NHS Annual Leave Entitlement</H2>
      <Text style={styles.articleBody}>
        Under Agenda for Change, NHS annual leave entitlement is based on length of service:{'\n\n'}
        - <Text style={styles.articleBold}>Up to 5 years' service:</Text> 27 days annual leave + 8 bank holidays (35 days total){'\n'}
        - <Text style={styles.articleBold}>5 to 10 years' service:</Text> 29 days annual leave + 8 bank holidays (37 days total){'\n'}
        - <Text style={styles.articleBold}>10+ years' service:</Text> 33 days annual leave + 8 bank holidays (41 days total)
      </Text>
      <Text style={styles.articleBody}>
        If you take a full year of maternity leave, you will accrue your entire annual leave entitlement during that time. For someone with 10 or more years of service, that is 33 days of annual leave plus 8 bank holidays, totalling 41 days. That is more than 8 weeks of additional leave on top of your maternity leave.
      </Text>

      <H2 style={styles.articleHeading}>Using Annual Leave Strategically</H2>
      <Text style={styles.articleBody}>
        There are several ways to use your accrued annual leave to your advantage. How you approach it depends on your financial situation and when you want to return to work.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Take accrued leave before maternity starts.</Text>{'\n'}
        You can use annual leave in the weeks leading up to your maternity leave start date. This allows you to stop working earlier than your official maternity leave date while still receiving full pay. For example, if you have 4 weeks of unused leave, you could finish work a month before your maternity leave begins without affecting your maternity pay at all.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Add accrued leave to the end of maternity leave.</Text>{'\n'}
        This is the most common approach. Instead of returning to work when your maternity leave ends, you use your accrued annual leave immediately afterwards. Because annual leave is paid at your full rate, this effectively extends your time at home while receiving your normal salary. If you have accrued 35 days of leave (including bank holidays), that gives you 7 additional weeks at full pay after your maternity leave ends.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Some Trusts add leave to the end automatically.</Text>{'\n'}
        Certain NHS Trusts have a policy of automatically tagging accrued annual leave onto the end of your maternity leave. This means your return-to-work date is pushed back by however many days you have accrued, without you needing to submit a separate request. Check with your HR department whether your Trust does this as standard.
      </Text>

      <H2 style={styles.articleHeading}>Extending Your Paid Period</H2>
      <Text style={styles.articleBody}>
        One of the most practical uses of accrued annual leave is bridging the gap between your last maternity payment and your return to work. Under the standard NHS maternity pay structure, the final 13 weeks of leave are unpaid. If you are planning to take the full 52 weeks, using accrued annual leave at the end means you receive full pay during what would otherwise be an unpaid period.
      </Text>
      <Text style={styles.articleBody}>
        For many NHS staff, this is the single most effective way to reduce the financial impact of maternity leave. Rather than saving thousands of pounds to cover the unpaid weeks, your accrued leave provides paid time off at your normal salary rate.
      </Text>

      <H2 style={styles.articleHeading}>What If You Cannot Take All Your Leave Within the Leave Year?</H2>
      <Text style={styles.articleBody}>
        If your maternity leave spans two leave years, you may find that you have accrued more annual leave than you can reasonably take before the end of the leave year. In normal circumstances, NHS Trusts expect staff to use their annual leave within the relevant leave year or lose it.
      </Text>
      <Text style={styles.articleBody}>
        However, when you are on maternity leave, most Trusts will allow you to carry over accrued leave that you were unable to take. This is supported by case law and the Working Time Regulations, which recognise that it would be unfair to require someone to forfeit leave they could not take due to maternity absence.
      </Text>
      <Text style={styles.articleBody}>
        If your Trust is reluctant to allow carry-over, it is worth pointing out that the right to carry over annual leave when prevented from taking it by maternity leave has been established through employment tribunal decisions. Your union representative can help if you encounter resistance.
      </Text>

      <H2 style={styles.articleHeading}>Practical Tip: Agree a Plan Early</H2>
      <Text style={styles.articleBody}>
        The best time to discuss annual leave arrangements is when you first notify your employer of your pregnancy. Speak to your line manager and HR department about:{'\n\n'}
        - How much annual leave you will have accrued by the time your maternity leave starts{'\n'}
        - Whether you want to use some leave before maternity leave begins{'\n'}
        - How accrued leave during maternity leave will be handled{'\n'}
        - Whether your Trust adds annual leave to the end of maternity leave automatically{'\n'}
        - What happens if your leave spans two annual leave years
      </Text>
      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Get everything in writing.</Text> Once you have agreed a plan with your manager and HR, ask for written confirmation of the arrangement. This protects you if there are staffing changes or disagreements later. A simple email confirming the agreed dates and approach is sufficient.
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        For a full overview of your maternity leave entitlements, read our{' '}
        <Link to="/blog/nhs-maternity-leave-rights" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>guide to NHS maternity leave rights</Text>
        </Link>
        . If you are thinking about how to manage your return to work, our{' '}
        <Link to="/blog/returning-to-work-after-maternity" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>returning to work after maternity leave</Text>
        </Link>
        {' '}guide covers flexible working requests, KIT days, and planning your transition back.
      </Text>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This article provides general guidance on annual leave during NHS maternity leave. Policies on carry-over and automatic tagging of leave vary between Trusts. The entitlements described are based on Agenda for Change terms and conditions. Always confirm your specific arrangements with your Trust's HR department.
      </Text>
    </View>
  );
}
