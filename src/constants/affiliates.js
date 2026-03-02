// Affiliate partner configuration.
// All links must use rel="nofollow sponsored" (Google + ASA UK requirement).
// All placements must be clearly labelled as affiliate/ad (ASA UK requirement).

const AFFILIATES = {
  budgeting: {
    title: 'Planning Your Finances?',
    description: 'Get organised with a budgeting planner to help manage your money during maternity leave.',
    ctaText: 'View on Amazon',
    // TODO: Replace with your actual Amazon Associates affiliate link
    url: 'https://www.amazon.co.uk/dp/B0XXXXXXXX?tag=YOUR_ASSOCIATE_TAG',
    context: ['results', 'guide'],
  },
  babyEssentials: {
    title: 'Preparing for Baby?',
    description: 'Browse top-rated baby essentials recommended by other NHS mums.',
    ctaText: 'Shop Baby Essentials',
    // TODO: Replace with your actual Amazon Associates affiliate link
    url: 'https://www.amazon.co.uk/baby-essentials/b?node=59803041&tag=YOUR_ASSOCIATE_TAG',
    context: ['results'],
  },
  maternityBooks: {
    title: 'Recommended Reading',
    description: 'The best-selling maternity and baby books to prepare for your new arrival.',
    ctaText: 'View Books',
    // TODO: Replace with your actual Amazon Associates affiliate link
    url: 'https://www.amazon.co.uk/s?k=maternity+books&tag=YOUR_ASSOCIATE_TAG',
    context: ['guide', 'blog'],
  },
};

export default AFFILIATES;
