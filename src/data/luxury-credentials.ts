export interface LuxuryCredential {
  id: string;
  title: string;
  description: string;
  year: string;
  category: 'certification' | 'achievement' | 'membership' | 'recognition' | 'expertise';
  icon: string;
  exclusivity: 'elite' | 'premium' | 'exclusive';
}

export interface LuxuryAchievement {
  id: string;
  title: string;
  description: string;
  metric: string;
  year: string;
  category: 'sales' | 'service' | 'market' | 'client' | 'industry';
  icon: string;
}

export interface LuxurySpecialty {
  id: string;
  name: string;
  description: string;
  expertise: string[];
  neighborhoods: string[];
  priceRange: string;
  icon: string;
}

export const luxuryCredentials: LuxuryCredential[] = [
  {
    id: 'luxury-home-specialist',
    title: 'Luxury Home Specialist Designation',
    description:
      'Certified expert in luxury real estate markets and high-net-worth client services',
    year: '2018',
    category: 'certification',
    icon: '🏰',
    exclusivity: 'elite',
  },
  {
    id: 'senior-real-estate-specialist',
    title: 'Senior Real Estate Specialist (SRES)',
    description: 'Specialized expertise in serving senior luxury real estate clients',
    year: '2019',
    category: 'certification',
    icon: '👴',
    exclusivity: 'premium',
  },
  {
    id: 'certified-luxury-home-marketing',
    title: 'Certified Luxury Home Marketing Specialist',
    description: 'Advanced certification in luxury property marketing and positioning',
    year: '2020',
    category: 'certification',
    icon: '📈',
    exclusivity: 'elite',
  },
  {
    id: 'veteran-service',
    title: 'Veteran Service Recognition',
    description: 'Honored for exceptional service to veteran luxury real estate clients',
    year: '2021',
    category: 'recognition',
    icon: '🎖️',
    exclusivity: 'exclusive',
  },
  {
    id: 'top-1-percent',
    title: '5.0★ on Realtor.com',
    description: '50 reviews',
    year: '2022-2024',
    category: 'achievement',
    icon: '🥇',
    exclusivity: 'elite',
  },
  {
    id: 'luxury-institute',
    title: 'Luxury Institute Member',
    description: "Exclusive membership in the world's leading luxury business network",
    year: '2023',
    category: 'membership',
    icon: '💎',
    exclusivity: 'exclusive',
  },
  {
    id: 'international-luxury-alliance',
    title: 'International Luxury Real Estate Alliance',
    description: 'Global network of luxury real estate professionals and exclusive properties',
    year: '2023',
    category: 'membership',
    icon: '🌍',
    exclusivity: 'exclusive',
  },
];

export const luxuryAchievements: LuxuryAchievement[] = [
  {
    id: '500-families',
    title: '500+ Luxury Families Served',
    description:
      'Successfully guided over 500 high-net-worth families through their real estate journey',
    metric: '500+',
    year: '2024',
    category: 'client',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: '1-billion-sales',
    title: '$1B+ in Luxury Sales',
    description: 'Achieved over $1 billion in luxury real estate transactions',
    metric: '$1B+',
    year: '2024',
    category: 'sales',
    icon: '💰',
  },
  {
    id: '10-years-experience',
    title: 'Licensed since 2008',
    description: '35 years in Las Vegas',
    metric: '35',
    year: '2024',
    category: 'service',
    icon: '⏰',
  },
  {
    id: '95-percent-satisfaction',
    title: '95% Client Satisfaction Rate',
    description: 'Exceptional client satisfaction maintained across all luxury transactions',
    metric: '95%',
    year: '2024',
    category: 'client',
    icon: '⭐',
  },
  {
    id: 'fastest-sale',
    title: 'Fastest Luxury Sale Record',
    description: 'Set record for fastest luxury property sale in Red Rock Country Club',
    metric: '7 days',
    year: '2023',
    category: 'sales',
    icon: '⚡',
  },
  {
    id: 'highest-price',
    title: 'Highest Price Per Square Foot',
    description: 'Achieved highest price per square foot in The Ridges Summerlin',
    metric: '$1,200/sqft',
    year: '2023',
    category: 'market',
    icon: '📊',
  },
  {
    id: 'international-clients',
    title: 'International Client Base',
    description: 'Served clients from 15+ countries seeking luxury Las Vegas properties',
    metric: '15+',
    year: '2024',
    category: 'client',
    icon: '🌍',
  },
  {
    id: 'repeat-clients',
    title: '80% Repeat Client Rate',
    description: '80% of luxury clients return for additional real estate services',
    metric: '80%',
    year: '2024',
    category: 'client',
    icon: '🔄',
  },
];

export const luxurySpecialties: LuxurySpecialty[] = [
  {
    id: 'red-rock-country-club',
    name: 'Red Rock Country Club',
    description: 'Exclusive golf community luxury properties with mountain views and privacy',
    expertise: [
      'Golf course properties',
      'Mountain view estates',
      'Private golf memberships',
      'Luxury amenities',
      'Privacy and security',
    ],
    neighborhoods: ['Red Rock Country Club'],
    priceRange: '$2M - $15M+',
    icon: '⛳',
  },
  {
    id: 'the-ridges-summerlin',
    name: 'The Ridges Summerlin',
    description: 'Ultra-luxury homes with panoramic city views and architectural excellence',
    expertise: [
      'Panoramic city views',
      'Architectural design',
      'Smart home technology',
      'Luxury finishes',
      'Luxury community',
    ],
    neighborhoods: ['The Ridges Summerlin'],
    priceRange: '$3M - $25M+',
    icon: '🏔️',
  },
  {
    id: 'macdonald-highlands',
    name: 'MacDonald Highlands',
    description: 'Prestigious mountain community with custom luxury homes and privacy',
    expertise: [
      'Custom luxury homes',
      'Mountain privacy',
      'Architectural excellence',
      'Luxury amenities',
      'Exclusive access',
    ],
    neighborhoods: ['MacDonald Highlands'],
    priceRange: '$4M - $30M+',
    icon: '🏔️',
  },
  {
    id: 'southern-highlands',
    name: 'Southern Highlands',
    description: 'Sophisticated luxury community with golf, tennis, and resort-style living',
    expertise: [
      'Golf course living',
      'Resort-style amenities',
      'Luxury community',
      'Parks & recreation',
      'Investment potential',
    ],
    neighborhoods: ['Southern Highlands'],
    priceRange: '$1.5M - $12M+',
    icon: '🏌️',
  },
  {
    id: 'tournament-hills',
    name: 'Tournament Hills',
    description: 'Elite golf community with luxury homes and championship golf course',
    expertise: [
      'Championship golf',
      'Luxury golf homes',
      'Tournament access',
      'Luxury community',
      'Investment properties',
    ],
    neighborhoods: ['Tournament Hills'],
    priceRange: '$2M - $18M+',
    icon: '🏆',
  },
];

export const luxuryMarkets = [
  {
    name: 'Ultra-Luxury ($10M+)',
    description: 'Signature properties for ultra-high-net-worth individuals',
    percentage: '15%',
    icon: '👑',
  },
  {
    name: 'High-Luxury ($5M-$10M)',
    description: 'Premium properties for high-net-worth families',
    percentage: '35%',
    icon: '💎',
  },
  {
    name: 'Luxury ($2M-$5M)',
    description: 'Luxury properties for affluent professionals',
    percentage: '50%',
    icon: '🏰',
  },
];

export const luxuryClientTypes = [
  {
    type: 'Executives & CEOs',
    description: 'C-suite executives seeking luxury primary residences',
    percentage: '30%',
    icon: '👔',
  },
  {
    type: 'Celebrities & Athletes',
    description: 'High-profile individuals requiring privacy and luxury',
    percentage: '20%',
    icon: '🌟',
  },
  {
    type: 'International Buyers',
    description: 'Global investors seeking Las Vegas luxury properties',
    percentage: '25%',
    icon: '🌍',
  },
  {
    type: 'Family Offices',
    description: 'Multi-generational wealth management and investment',
    percentage: '15%',
    icon: '🏛️',
  },
  {
    type: 'Downsizers',
    description: 'Luxury downsizing and lifestyle enhancement',
    percentage: '10%',
    icon: '👴',
  },
];
