# Legal Documents - NHS Maternity Pay Calculator

This folder contains the Terms of Service and Privacy Policy for the NHS Maternity Pay Calculator.

## Documents Included

1. **TERMS_OF_SERVICE.md** - Protects you from liability, disclaims accuracy, sets usage rules
2. **PRIVACY_POLICY.md** - UK GDPR-compliant, explains data collection (minimal), cookies, and user rights

## Before Using These Documents

### ⚠️ Required Customizations

You **MUST** replace these placeholders before publishing:

1. **[Your Company Name]** → Replace with your registered company name (e.g., "MaternityCalc Ltd")
2. **[your-email@example.com]** → Replace with your support email (e.g., support@nhsmaternity.com)
3. **[Your Company Address, if applicable]** → Add your registered company address or remove if not required
4. **[ICO Registration Number]** → Add your ICO registration number if you have one (see below)

### 🔍 Search & Replace

Use your editor's find-and-replace feature:
- Find: `[Your Company Name]` → Replace with: `Your Actual Company Name`
- Find: `[your-email@example.com]` → Replace with: `support@yourdomain.com`
- Find: `[Your Company Address, if applicable]` → Replace with: `123 Main St, London, UK` or remove

## ICO Registration (UK GDPR)

### Do You Need to Register?

You likely **do NOT need to register** with the ICO if:
- ✅ You're NOT collecting personal data (name, email, etc.)
- ✅ The calculator is client-side only (no data stored on servers)
- ✅ You only use Google Analytics (anonymized, no personal data)

You **SHOULD register** if:
- ❌ You collect user emails via feedback forms
- ❌ You store user data in a database
- ❌ You process significant personal data

**Cost:** £40-£60/year (small business tier)
**Register at:** [https://ico.org.uk/registration/new](https://ico.org.uk/registration/new)

**For now:** Since you're NOT storing personal data, you can omit the ICO registration number line.

## How to Publish These Documents

### Option 1: Convert to HTML (Recommended)

1. Use a Markdown-to-HTML converter (e.g., [Pandoc](https://pandoc.org/) or online tools)
2. Style with your app's CSS for consistency
3. Host at:
   - `https://yourdomain.com/terms-of-service`
   - `https://yourdomain.com/privacy-policy`

### Option 2: Embed Directly in App

1. Add links in your app footer:
   ```html
   <footer>
     <a href="/terms">Terms of Service</a> |
     <a href="/privacy">Privacy Policy</a>
   </footer>
   ```
2. Create React components for each page
3. Use a modal or full-page view to display the content

### Option 3: Use a Legal Terms Service

Services like **Termly** or **iubenda** can host and manage these documents for you (£10-£50/month).

## Key Protections Included

### Terms of Service

✅ **Disclaimers:**
- Calculations are estimates only, not financial advice
- Users must verify with NHS HR/payroll
- Not affiliated with or endorsed by the NHS
- No guarantees of accuracy or completeness

✅ **Liability Limitations:**
- "AS IS" service (no warranties)
- Maximum liability capped at £100
- Not responsible for financial decisions made using the tool
- Not liable for errors, downtime, or data loss

✅ **Usage Rules:**
- Personal, non-commercial use only
- No scraping, reverse engineering, or reselling
- Right to terminate accounts for abuse

✅ **Third-Party Disclosures:**
- Ads and affiliate links are third-party services
- Not responsible for third-party privacy practices

### Privacy Policy

✅ **UK GDPR Compliance:**
- Clear data collection disclosures
- Explains how cookies and analytics work
- User rights (access, erasure, objection, portability)
- ICO complaint process

✅ **Transparency:**
- States that **no personal data** is collected (client-side calculator)
- Google Analytics is anonymized and aggregated
- IP anonymization enabled
- Cookies can be disabled without affecting functionality

✅ **Third-Party Services:**
- Google Analytics privacy policy linked
- Google AdSense privacy policy linked
- Affiliate link disclosures (no data sharing)

✅ **Data Security:**
- HTTPS encryption
- Client-side processing (no server storage)
- No risk of personal data breaches

## Next Steps

1. ✅ Customize placeholders (company name, email, address)
2. ✅ Convert to HTML or embed in your app
3. ✅ Add footer links to Terms and Privacy Policy on every page
4. ✅ Update Google Analytics settings to enable IP anonymization:
   - Go to Google Analytics → Admin → Property Settings
   - Enable "Anonymize IP" option
5. ✅ Add cookie consent banner (optional but recommended):
   - Use a free service like [Cookiebot](https://www.cookiebot.com/) or [Cookie Consent](https://cookieconsent.insites.com/)
   - Or create a simple banner: "We use cookies for analytics. [Learn more](/privacy)"

## Legal Review (Optional)

These documents are based on industry-standard templates and UK GDPR best practices. However, if you plan to:
- Collect significant personal data in the future
- Expand to B2B/enterprise customers
- Handle sensitive data (e.g., medical records)

Consider having a solicitor review your Terms and Privacy Policy (£500-£1,500 one-time cost).

For now, these documents provide solid protection for a free, client-side calculator with ads.

## Checklist

- [ ] Replace `[Your Company Name]` with actual company name
- [ ] Replace `[your-email@example.com]` with support email
- [ ] Replace or remove `[Your Company Address]`
- [ ] Remove `[ICO Registration Number]` line (if not registered)
- [ ] Convert Markdown to HTML
- [ ] Add footer links to Terms and Privacy on all pages
- [ ] Enable IP anonymization in Google Analytics
- [ ] Test links on live site
- [ ] Update "Last Updated" date when making changes

---

**You're now protected from liability while being transparent with users about data collection and cookies.** 🎉
