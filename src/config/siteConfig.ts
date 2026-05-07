const env = import.meta.env

const parseList = (value: string | undefined, fallback: string[]) => {
  if (!value) return fallback
  const list = value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

  return list.length > 0 ? list : fallback
}

export const siteConfig = {
  companyName: env.VITE_COMPANY_NAME || 'DURACOOL',
  tagline:
    env.VITE_COMPANY_TAGLINE ||
    'Crystal-clear visibility, maximum UV and heat protection for every drive.',
  heroQuote:
    env.VITE_HERO_QUOTE ||
    'Premium window and sun protection films trusted by detailers and car lovers.',
  establishedYear: env.VITE_ESTABLISHED_YEAR || '2019',
  ownerName: env.VITE_OWNER_NAME || 'S. K. Detailing',
  ownerRole: env.VITE_OWNER_ROLE || 'Founder & Operations Head',
  ownerBio:
    env.VITE_OWNER_BIO ||
    'Automotive care specialist focused on long-lasting cabin comfort and premium finishing.',
  contactEmail: env.VITE_CONTACT_EMAIL || 'durapointmumbai@gmail.com',
  contactPhone: env.VITE_CONTACT_PHONE || '9967801692',
  bookingScriptUrl: env.VITE_BOOKING_SCRIPT_URL || '',
  instagramUrl:
    env.VITE_INSTAGRAM_URL ||
    'https://www.instagram.com/dura.cool?utm_source=qr&igsh=MXhhempxeHo0NG40ZA==',
  whatsappUrl: env.VITE_WHATSAPP_URL || 'https://wa.me/919967801692',
  facebookUrl: env.VITE_FACEBOOK_URL || 'https://facebook.com',
  contactPageEmail: env.VITE_CONTACT_PAGE_EMAIL || 'durapointmumbai@gmail.com',
  contactPagePhone: env.VITE_CONTACT_PAGE_PHONE || '9967801692',
  contactPageInstagramUrl:
    env.VITE_CONTACT_PAGE_INSTAGRAM_URL ||
    'https://www.instagram.com/dura.cool?utm_source=qr&igsh=MXhhempxeHo0NG40ZA==',
  contactPageWhatsappUrl:
    env.VITE_CONTACT_PAGE_WHATSAPP_URL || 'https://wa.me/919967801692',
  contactPageMapUrl:
    env.VITE_CONTACT_PAGE_MAP_URL ||
    'https://www.google.com/maps?q=19.1083676,72.8886249&z=17&hl=en',
  contactPageMapEmbedUrl:
    env.VITE_CONTACT_PAGE_MAP_EMBED_URL ||
    'https://www.google.com/maps?q=19.1083676,72.8886249&z=17&hl=en&output=embed',
  contactPageAddressLine1:
    env.VITE_CONTACT_PAGE_ADDRESS_LINE_1 ||
    'K 218 ansha industries sakhivihar road sakhinaka',
  contactPageAddressLine2:
    env.VITE_CONTACT_PAGE_ADDRESS_LINE_2 || 'Near Shivsagar hotel',
  homeHeroImage: env.VITE_HOME_HERO_IMAGE || '/images/home-hero-driving.jpg',
  homeInfoImage: env.VITE_HOME_INFO_IMAGE || '/images/home-suncontrol-service.jpg',
  homeInfoTitle: env.VITE_HOME_INFO_TITLE || 'What Are Suncontrol Films?',
  homeInfoWhyTitle: env.VITE_HOME_INFO_WHY_TITLE || 'Why You Should Use Them',
  homeInfoIntro:
    env.VITE_HOME_INFO_INTRO ||
    'Suncontrol films are advanced layers applied on vehicle glass to reduce heat, UV exposure, and harsh glare while maintaining high visibility.',
  homeRealBenefitsTitle:
    env.VITE_HOME_REAL_BENEFITS_TITLE || 'Benefits of Sun Control Films',
  homeRealBenefitsIntro:
    env.VITE_HOME_REAL_BENEFITS_INTRO ||
    'Built for Indian driving conditions, these films improve comfort, visibility, and safety every day without changing your glass clarity.',
  homeRealBenefitHeadings: parseList(env.VITE_HOME_REAL_BENEFIT_HEADINGS, [
    'Cabin Heat Control',
    'UV Shield For Daily Drives',
    'Lower AC Load',
    'Safer Glass In Impact',
    'Reduced Eye Fatigue',
    'Cleaner Premium Finish',
  ]),
  homeRealBenefitDescriptions: parseList(env.VITE_HOME_REAL_BENEFIT_DESCRIPTIONS, [
    'Heat-rejecting layers reduce direct solar load, so parked cars cool faster and long city traffic feels less exhausting.',
    'High UV rejection helps protect skin exposure on long commutes while also slowing dashboard and seat fading over time.',
    'With less heat entering the cabin, AC systems work more efficiently, especially during afternoon drives and stop-go traffic.',
    'Safety film holds shattered glass fragments together on impact, reducing sharp scatter during accidents or break-in attempts.',
    'Glare reduction improves road visibility in harsh sunlight and at reflective junctions, making daytime driving more relaxed.',
    'Beyond performance, uniform tint and clean edges give the vehicle a refined look that stays consistent with proper installation.',
  ]),
  homeEndTitle:
    env.VITE_HOME_END_TITLE || 'Driven By Detail. Built For Every Drive.',
  homeEndText:
    env.VITE_HOME_END_TEXT ||
    'At DURACOOL, every installation is done with precision, clean finishing, and long-term comfort in mind.',
  homeBenefits: parseList(env.VITE_HOME_BENEFITS, [
    'Blocks harmful UV rays to protect skin and interior trim.',
    'Improves cabin comfort by rejecting excess solar heat.',
    'Reduces eye strain from intense sunlight and road glare.',
    'Delivers a premium, cleaner look with professional finishing.',
  ]),
  homeHighlights: parseList(env.VITE_HOME_HIGHLIGHTS, [
    '99% UV protection with premium film combinations',
    'Cooler cabin temperature management for city and highway drives',
    'Trusted professional fitment and support for long-term performance',
  ]),
  products: parseList(env.VITE_PRODUCT_NAMES, [
    'DC05',
    'DC35',
    'DC50',
    'DC70',
    'CH70',
    'GN70',
    'Classic 75',
    'Classic 74',
    'Classic 72',
    'Classic 50',
    'Nano shield 75',
    'Nano shield 35',
  ]),
}

export const awards = [
  {
    title: env.VITE_AWARD_1_TITLE || 'Best Surface Protection Specialist',
    description:
      env.VITE_AWARD_1_DESC ||
      'Recognized for consistently high-quality installation and customer satisfaction.',
    imagePath: '/images/award-1-placeholder.svg',
  },
  {
    title: env.VITE_AWARD_2_TITLE || 'Top Car Comfort Innovation',
    description:
      env.VITE_AWARD_2_DESC ||
      'Awarded for advanced sun and heat rejection film combinations.',
    imagePath: '/images/award-2-placeholder.svg',
  },
  {
    title: env.VITE_AWARD_3_TITLE || 'Customer Choice Detailing Brand',
    description:
      env.VITE_AWARD_3_DESC ||
      'Honored for premium service delivery and reliable after-service support.',
    imagePath: '/images/award-3-placeholder.svg',
  },
]

export const productShowcase = [
  {
    name: env.VITE_PRODUCT_1_NAME || 'Nano Ceramic Film',
    summary:
      env.VITE_PRODUCT_1_DESC ||
      'High clarity film that reduces glare and blocks cabin heat for daily comfort.',
    beforeImage: '/images/product-1-before.svg',
    afterImage: '/images/product-1-after.svg',
  },
  {
    name: env.VITE_PRODUCT_2_NAME || 'Infrared Heat Shield Film',
    summary:
      env.VITE_PRODUCT_2_DESC ||
      'Advanced heat rejection film for premium thermal control on long drives.',
    beforeImage: '/images/product-2-before.svg',
    afterImage: '/images/product-2-after.svg',
  },
]
