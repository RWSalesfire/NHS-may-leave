import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';
import { colors, spacing, shadows } from '../../constants/theme';
import { H1, H2 } from '../../components/SemanticWeb';

export default function NHSMaternityLeaveRights({ post, styles, CATEGORY_COLORS }) {
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
        As an NHS employee, you have strong legal protections during pregnancy and maternity leave. These rights come from a combination of UK employment law and the NHS Agenda for Change terms and conditions. Knowing your rights means you can focus on your pregnancy and your baby without worrying about your job. This guide covers everything from day-one protections through to your return to work.
      </Text>

      <H2 style={styles.articleHeading}>Your Rights from Day One of Pregnancy</H2>
      <Text style={styles.articleBody}>
        Your employment rights begin as soon as you are pregnant, regardless of how long you have worked for the NHS. From day one, you are protected against:{'\n\n'}
        <Text style={styles.articleBold}>Unfair dismissal:</Text> It is automatically unfair to dismiss you for any reason connected to your pregnancy, childbirth, or maternity leave. This applies from the first day of employment with no qualifying period.{'\n\n'}
        <Text style={styles.articleBold}>Discrimination:</Text> Treating you less favourably because of pregnancy or maternity is unlawful under the Equality Act 2010. This covers recruitment, promotion, training opportunities, shift allocation, and any other aspect of employment.{'\n\n'}
        <Text style={styles.articleBold}>Health and safety:</Text> Your employer must carry out a risk assessment of your working conditions once they know you are pregnant. For NHS clinical staff, this is particularly relevant for roles involving heavy lifting, exposure to infections, radiation, or prolonged standing.
      </Text>

      <H2 style={styles.articleHeading}>Time Off for Antenatal Care</H2>
      <Text style={styles.articleBody}>
        You have the right to paid time off for all antenatal appointments, including:{'\n\n'}
        - Midwife appointments{'\n'}
        - Hospital check-ups and scans{'\n'}
        - Antenatal classes recommended by your midwife or GP{'\n'}
        - Mental health appointments related to your pregnancy
      </Text>
      <Text style={styles.articleBody}>
        Your employer can ask to see your appointment card after the first appointment, but they cannot refuse you time off. For NHS staff working shifts, you should give your manager reasonable notice so rotas can be adjusted, but they must accommodate you.
      </Text>

      <H2 style={styles.articleHeading}>When and How to Tell Your Employer</H2>
      <Text style={styles.articleBody}>
        Legally, you must notify your employer of your pregnancy by the 15th week before your expected week of childbirth (roughly the 25th week of pregnancy). You need to confirm:{'\n\n'}
        - That you are pregnant{'\n'}
        - Your expected week of childbirth{'\n'}
        - When you want your maternity leave to start
      </Text>
      <Text style={styles.articleBody}>
        In practice, many NHS staff tell their manager earlier, particularly if they need risk assessments or adjustments to their duties. Your employer must respond in writing within 28 days, confirming your expected return date.
      </Text>
      <Text style={styles.articleBody}>
        You can change your maternity leave start date by giving at least 28 days' notice. If your baby arrives early, your maternity leave starts automatically on the day after the birth.
      </Text>

      <H2 style={styles.articleHeading}>Maternity Leave Entitlement</H2>
      <Text style={styles.articleBody}>
        All NHS employees are entitled to:{'\n\n'}
        <Text style={styles.articleBold}>52 weeks of maternity leave</Text> - split into 26 weeks of Ordinary Maternity Leave (OML) and 26 weeks of Additional Maternity Leave (AML). This is a day-one right with no qualifying period.{'\n\n'}
        <Text style={styles.articleBold}>The earliest you can start</Text> maternity leave is 11 weeks before your expected week of chilbirth. There is no latest date - you can work right up to your due date if you and your employer agree and there are no health concerns.{'\n\n'}
        <Text style={styles.articleBold}>Compulsory maternity leave</Text> means you must take at least 2 weeks off after the birth (4 weeks if you work in a factory setting, though this rarely applies to NHS roles).
      </Text>

      <H2 style={styles.articleHeading}>Annual Leave and Bank Holidays</H2>
      <Text style={styles.articleBody}>
        This is one of the most valuable and often overlooked aspects of NHS maternity rights. You continue to accrue annual leave and bank holidays throughout your entire maternity leave, including the unpaid period.
      </Text>
      <Text style={styles.articleBody}>
        For a full-time Band 5 nurse with 5 or more years' service, this means accruing approximately 33 days of annual leave plus 8 bank holidays during a 12-month maternity leave. That is 41 paid days, worth around {'\u00A3'}5,600 gross.
      </Text>
      <Text style={styles.articleBody}>
        Most Trusts allow you to:{'\n\n'}
        - Take accrued leave before your maternity leave starts (extending your paid time off){'\n'}
        - Add it to the end of your maternity leave{'\n'}
        - Carry it over to the next leave year (normally limited, but maternity is an exception)
      </Text>
      <Text style={styles.articleBody}>
        Speak to your manager early about how you want to use your accrued leave. Many NHS staff add their annual leave to the end of maternity leave, effectively extending paid leave by 8-9 weeks.
      </Text>

      <H2 style={styles.articleHeading}>Pension Rights During Maternity Leave</H2>
      <Text style={styles.articleBody}>
        Your NHS pension is fully protected during maternity leave:{'\n\n'}
        - During paid maternity leave, you continue to pay pension contributions based on your actual maternity pay{'\n'}
        - Your Trust continues to pay employer contributions based on your full-time equivalent salary{'\n'}
        - Your pensionable service is not broken - the entire maternity leave period counts{'\n'}
        - During unpaid maternity leave, you can choose to make up the pension contributions later (within 6 months of returning) to avoid a gap
      </Text>
      <Text style={styles.articleBody}>
        This means your NHS pension is not disadvantaged by taking maternity leave, which is important for long-term retirement planning.
      </Text>

      <H2 style={styles.articleHeading}>Protection Against Redundancy</H2>
      <Text style={styles.articleBody}>
        If your role is affected by a restructure or redundancy during maternity leave, you have <Text style={styles.articleBold}>priority rights to suitable alternative employment</Text>. This means your employer must offer you any suitable vacancy in preference to other employees, without requiring you to go through a competitive interview process.
      </Text>
      <Text style={styles.articleBody}>
        In the NHS, restructures do happen, particularly during service redesigns. If your manager mentions any organisational changes while you are on leave, ask specifically about how your priority right applies.
      </Text>

      <H2 style={styles.articleHeading}>Keeping in Touch (KIT) Days</H2>
      <Text style={styles.articleBody}>
        You can work up to 10 Keeping in Touch days during your maternity leave without it affecting your maternity pay or ending your leave. These are voluntary - neither you nor your employer can insist on them. KIT days can be used for:{'\n\n'}
        - Training or study days{'\n'}
        - Team meetings or away days{'\n'}
        - Mandatory updates (for example, new clinical systems){'\n'}
        - Gradual reintroduction before your full return
      </Text>
      <Text style={styles.articleBody}>
        Payment for KIT days varies by Trust. Most pay your normal daily rate on top of SMP, but some offset the SMP. Check your Trust's policy before agreeing to KIT days. Read our full guide on{' '}
        <Link to="/blog/kit-days-explained" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>how KIT days work</Text>
        </Link>
        .
      </Text>

      <H2 style={styles.articleHeading}>Your Right to Return</H2>
      <Text style={styles.articleBody}>
        After Ordinary Maternity Leave (first 26 weeks), you have the right to return to <Text style={styles.articleBold}>exactly the same job</Text> on the same terms and conditions.
      </Text>
      <Text style={styles.articleBody}>
        After Additional Maternity Leave (weeks 27-52), you have the right to return to the same job, or if that is not reasonably practicable, to a suitable and appropriate alternative role on terms no less favourable.
      </Text>
      <Text style={styles.articleBody}>
        You do not need to give notice if you return on your expected date. If you want to return earlier, you must give at least 8 weeks' notice.
      </Text>

      <H2 style={styles.articleHeading}>Flexible Working Requests</H2>
      <Text style={styles.articleBody}>
        From day one of employment, you have the right to request flexible working. Common requests from NHS staff returning from maternity leave include:{'\n\n'}
        - Reduced hours (moving from full-time to part-time){'\n'}
        - Compressed hours (same hours over fewer days){'\n'}
        - Changed shift patterns (avoiding nights, for example){'\n'}
        - Term-time working{'\n'}
        - Job-sharing
      </Text>
      <Text style={styles.articleBody}>
        Your employer must consider your request and can only refuse on specific business grounds. The NHS generally has a good track record on flexible working, and many Trusts actively promote it. Submit your request in writing and your employer must respond within 2 months.
      </Text>

      <H2 style={styles.articleHeading}>What to Do If Your Rights Are Not Respected</H2>
      <Text style={styles.articleBody}>
        If you believe your rights are being breached, take these steps:{'\n\n'}
        1. Raise it informally with your manager first{'\n'}
        2. Contact your union representative (RCN, Unison, Unite, or your relevant union){'\n'}
        3. Speak to your Trust's HR department{'\n'}
        4. Use your Trust's formal grievance procedure if needed{'\n'}
        5. Contact ACAS (Advisory, Conciliation and Arbitration Service) for free advice{'\n'}
        6. As a last resort, you can make a claim to an employment tribunal
      </Text>
      <Text style={styles.articleBody}>
        Keep written records of any conversations or incidents. Save emails and take notes of meetings with dates and who was present.
      </Text>

      <H2 style={styles.articleHeading}>Plan Your Leave with Confidence</H2>
      <Text style={styles.articleBody}>
        Understanding your rights helps you plan your maternity leave without uncertainty. Use our calculator to see your pay breakdown, and read our{' '}
        <Link to="/guide" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>complete maternity pay guide</Text>
        </Link>
        {' '}and{' '}
        <Link to="/faq" style={{ color: colors.primary }}>
          <Text style={{ color: colors.primary }}>FAQ</Text>
        </Link>
        {' '}for answers to common questions.
      </Text>

      <Link to="/calculator" style={{ textDecoration: 'none', marginTop: spacing.md, marginBottom: spacing.lg }}>
        <View style={[styles.ctaButton, shadows.primary]}>
          <Text style={styles.ctaButtonText}>Calculate Your Maternity Pay {'\u2192'}</Text>
        </View>
      </Link>

      <Text style={styles.articleBody}>
        <Text style={styles.articleBold}>Disclaimer:</Text> This article provides general guidance on employment rights and is not legal advice. Employment law is subject to change. For specific legal advice, contact your union, ACAS (0300 123 1100), or a qualified employment lawyer.
      </Text>
    </View>
  );
}
