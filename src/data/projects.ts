export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: "residential" | "commercial";
  heroImage: string;
  client: string;
  location: string;
  size: string;
  services: string;
  duration: string;
  theme: string;
  type: string;
  description: string;
  vision: string;
  keyFeatures: string[];
  galleryImages: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: "bmw-showroom",
    title: "BMW Showroom",
    subtitle: "Commercial Retail Design",
    category: "commercial",
    heroImage: "https://images.pexels.com/photos/11098919/pexels-photo-11098919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    client: "BMW India",
    location: "Mumbai, India",
    size: "8,500 sq ft",
    services: "Retail Showroom Design & Brand Experience",
    duration: "8 Months",
    theme: "Luxury Automotive Retail",
    type: "Showroom",
    description: "This project involved creating a premium automotive retail experience for BMW, showcasing their luxury vehicles in an environment that reflects the brand's sophisticated identity. The design harmonizes modern architecture with cutting-edge technology to create an immersive customer journey.",
    vision: "The core vision was to craft a space that elevates the car-buying experience into a luxury retail journey. We conceptualized an environment where vehicles are presented as works of art, with carefully curated lighting, premium materials, and interactive displays that engage customers at every touchpoint.",
    keyFeatures: [
      "Custom-designed vehicle display platforms with integrated lighting systems",
      "Premium materials including Italian marble, polished steel, and custom wood finishes",
      "Interactive digital displays and VR experience zones for vehicle customization",
      "Luxury customer lounge with premium seating and refreshment areas",
      "State-of-the-art service area visible through glass partitions"
    ],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_pqPXKY5VwSOdQcbQG7-hCpUUsy6H9UaOZIa5PYrN4hLsZE0kKbfdFXWS41SV86ig9Qn9ZRzLj7-vcIYlrF_8pIhtbap8Hv9tYX51mHSII4fea-32Gi1clZ4ZPyHLnMIVRQsFZrQiHnzCkdMErm7LLDMr8HmmufXOzIJs8pT5rC1ID5h2T7IhsTe6rZyp6xFfjsAp7xg6i5YwANrcd9TVmalDYNThCDgrGlZET3GBem_2xwrvrAmASCaW3t9ki7-9w_KKSHfxSKA",
      "https://images.pexels.com/photos/11098919/pexels-photo-11098919.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1521783593447-5702afea3815?w=1200&h=1200&fit=crop"
    ]
  },
  {
    id: "lixil-experience-center",
    title: "LIXIL Experience Center",
    subtitle: "Brand Experience Interior",
    category: "commercial",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuARgHjSKIiraK0bET-mIbsPwhCrvfifcNNAE4KBL821pzzDq8CkC3tEG9XXDsF3K6rNo-M3Pl9xerZU-baPlGNT4ZKFktCBLPa5_qHMevduEN2wZtX04CCHQ0cmlP79_xPWpm3l7gZlvN6Qp7qJKqkRPnDPEIp1LHTuqkXOUKS6FjCkHZ5IWbASL5QBTNl8XV839_WF2W7se_FY3YZdMs09WW6U-XZFvEDbIz_swBJ5KPxPCJzjsTN1m62pgdaQsRXIPDVMVHw0g6A",
    client: "LIXIL India",
    location: "New Delhi, India",
    size: "12,000 sq ft",
    services: "Brand Experience Center Design",
    duration: "10 Months",
    theme: "Modern Brand Experience",
    type: "Experience Center",
    description: "A comprehensive brand experience center designed to showcase LIXIL's premium bathroom and kitchen solutions. The space combines product displays with interactive experiences, allowing visitors to explore and interact with the latest innovations in home solutions.",
    vision: "The vision was to create an immersive brand journey that goes beyond traditional showrooms. We designed a space where visitors can experience products in realistic settings, understand their functionality, and envision how they would transform their own spaces.",
    keyFeatures: [
      "Multiple lifestyle vignettes showcasing products in real-world contexts",
      "Interactive product demonstration areas with touch-screen technology",
      "Premium material library and consultation spaces",
      "Sustainable design elements reflecting LIXIL's eco-conscious values",
      "Flexible event space for product launches and workshops"
    ],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARgHjSKIiraK0bET-mIbsPwhCrvfifcNNAE4KBL821pzzDq8CkC3tEG9XXDsF3K6rNo-M3Pl9xerZU-baPlGNT4ZKFktCBLPa5_qHMevduEN2wZtX04CCHQ0cmlP79_xPWpm3l7gZlvN6Qp7qJKqkRPnDPEIp1LHTuqkXOUKS6FjCkHZ5IWbASL5QBTNl8XV839_WF2W7se_FY3YZdMs09WW6U-XZFvEDbIz_swBJ5KPxPCJzjsTN1m62pgdaQsRXIPDVMVHw0g6A",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1521783593447-5702afea3815?w=1200&h=1200&fit=crop"
    ]
  },
  {
    id: "betterway-corporate-office",
    title: "BETTERWAY Corporate Office",
    subtitle: "Corporate Office Redesign",
    category: "commercial",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7QqzTsj-TxQIaYVL7B7rgaOyAsbA-OYqB_kWKjgopd0v-fCMG4S2yg86WSxDC03ZF0JauCk0Oi6fq75FfjZVNz41ejdGLJv7BKxTBxrDrsR-6YNfPgYMsJAzlGCUQhNPkK8T-xJLzEkXetXmsImJvWQqyqAQAqUgfo5NrvRtMu8Q9vJrTj1ZdHnXu_NOmCFlHVmDdw-AzJ9ix9F0NmhxPWmROar6rszpVgCXNbRD5JoDjQc6DUtBaejLBzG7D3b0u3B_6J1H_kvI",
    client: "BETTERWAY Group",
    location: "Bangalore, India",
    size: "15,000 sq ft",
    services: "Corporate Office Interior Design",
    duration: "6 Months",
    theme: "Modern Corporate Excellence",
    type: "Corporate Office",
    description: "A complete transformation of BETTERWAY's corporate headquarters, creating a modern, collaborative workspace that reflects the company's innovative culture. The design emphasizes open communication, employee well-being, and brand identity.",
    vision: "The vision was to create a workspace that fosters collaboration, creativity, and productivity. We designed flexible spaces that adapt to different work styles, with a focus on natural light, biophilic elements, and premium finishes that reflect the company's commitment to excellence.",
    keyFeatures: [
      "Open-plan workstations with flexible collaboration zones",
      "Executive suites with premium finishes and private meeting areas",
      "Wellness-focused amenities including meditation rooms and fitness areas",
      "Sustainable design with energy-efficient systems and eco-friendly materials",
      "Integrated technology infrastructure for seamless connectivity"
    ],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7QqzTsj-TxQIaYVL7B7rgaOyAsbA-OYqB_kWKjgopd0v-fCMG4S2yg86WSxDC03ZF0JauCk0Oi6fq75FfjZVNz41ejdGLJv7BKxTBxrDrsR-6YNfPgYMsJAzlGCUQhNPkK8T-xJLzEkXetXmsImJvWQqyqAQAqUgfo5NrvRtMu8Q9vJrTj1ZdHnXu_NOmCFlHVmDdw-AzJ9ix9F0NmhxPWmROar6rszpVgCXNbRD5JoDjQc6DUtBaejLBzG7D3b0u3B_6J1H_kvI",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1521783593447-5702afea3815?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop"
    ]
  },
  {
    id: "tostem-flagship-store",
    title: "TOSTEM Flagship Store",
    subtitle: "Retail Store Design",
    category: "commercial",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjJx6v-77OpmEjytsCDTM_4bxk6l5mDV2a8QZU5lwP3PCm3RAX6iWdGYBC-joeQkYLIDHWs3q-QSzYpaY7pjuJ_-5cuFy8PbKSJ_7ht0u3nddaRiFTRS6M54kq1KUrKeBQiSJ6hzf9EgQiJbfkrDpME7pw-vskulPNibpgws96DskQW-l8RM5f_WgpGEtA6bX1cEN6EGm8oMeQO6pCHssexbzs0CAfjKjjPxsaUpMJD2hoxCZzWB-qSfkD1OISPJ7gKWX7AKQymSM",
    client: "TOSTEM India",
    location: "Pune, India",
    size: "6,500 sq ft",
    services: "Retail Store Design & Brand Experience",
    duration: "7 Months",
    theme: "Contemporary Retail Excellence",
    type: "Flagship Store",
    description: "A flagship retail store designed to showcase TOSTEM's premium window and door solutions. The space combines product displays with architectural elements that demonstrate the quality and versatility of TOSTEM's offerings.",
    vision: "The vision was to create a retail environment where products are presented as architectural solutions rather than mere commodities. We designed a space that allows customers to experience the quality, functionality, and aesthetic appeal of TOSTEM products in realistic settings.",
    keyFeatures: [
      "Large-scale product installations demonstrating real-world applications",
      "Interactive display areas with working samples and material libraries",
      "Consultation zones with design visualization technology",
      "Premium finishes and lighting that highlight product quality",
      "Flexible space for product demonstrations and customer events"
    ],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjJx6v-77OpmEjytsCDTM_4bxk6l5mDV2a8QZU5lwP3PCm3RAX6iWdGYBC-joeQkYLIDHWs3q-QSzYpaY7pjuJ_-5cuFy8PbKSJ_7ht0u3nddaRiFTRS6M54kq1KUrKeBQiSJ6hzf9EgQiJbfkrDpME7pw-vskulPNibpgws96DskQW-l8RM5f_WgpGEtA6bX1cEN6EGm8oMeQO6pCHssexbzs0CAfjKjjPxsaUpMJD2hoxCZzWB-qSfkD1OISPJ7gKWX7AKQymSM",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1521783593447-5702afea3815?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop"
    ]
  },
  {
    id: "lovebirds-luxury-apartment",
    title: "LOVEBIRDS Luxury Apartment",
    subtitle: "Luxury Residential Interior",
    category: "residential",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB-8vqnTzbTQLgv2jSNujU_jSoUGJsLtkoo8xLc_yhq-U01TNmPIorJ0dzYhcivs_Ay9VG2C_AUMufvhI-mokqYwEPXuMm6zrdF6WL1KBdoZC5VVIieEzyB3_si4azl5RqcY4ziYYRvz7O1k8vNBKstbvFYZcUkyZ6fr2ecIdizeB2tZ3aEyg1WI5GOtxEDMfq4iotGmzNmwlKjC-lXviu1cRgRwQnlZbve8TVthH7jFmrJ0Me4MgLQH37zEO6fvCPqssG0PowiNc",
    client: "Lovebirds Family",
    location: "Mumbai, India",
    size: "3,500 sq ft",
    services: "Full-service Interior Design",
    duration: "6 Months",
    theme: "Contemporary Luxury",
    type: "Apartment",
    description: "This project involved transforming a spacious 3,500 sq ft apartment into a sanctuary of contemporary luxury. Our goal was to create a home that is both aesthetically stunning and deeply personal, reflecting the clients' sophisticated taste and modern lifestyle. The design harmonizes clean lines, rich textures, and a neutral color palette accented with bold, artistic elements to achieve a timeless elegance.",
    vision: "The core vision was to craft an environment of understated opulence. We conceptualized a space that flows seamlessly from one area to another, creating an open and inviting atmosphere. The concept revolves around the interplay of light and shadow, using natural light to highlight bespoke furniture and curated art pieces. Every material, from Italian marble to fine-grained wood, was selected to contribute to a tactile and visually rich experience.",
    keyFeatures: [
      "Custom-designed joinery and cabinetry providing elegant storage solutions",
      "A statement marble-clad feature wall in the living area, serving as a focal point",
      "Integrated smart home technology for lighting, climate, and entertainment control",
      "A curated selection of designer furniture and lighting fixtures from international brands",
      "A serene master suite with a spa-like bathroom, promoting relaxation and tranquility"
    ],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCB-8vqnTzbTQLgv2jSNujU_jSoUGJsLtkoo8xLc_yhq-U01TNmPIorJ0dzYhcivs_Ay9VG2C_AUMufvhI-mokqYwEPXuMm6zrdF6WL1KBdoZC5VVIieEzyB3_si4azl5RqcY4ziYYRvz7O1k8vNBKstbvFYZcUkyZ6fr2ecIdizeB2tZ3aEyg1WI5GOtxEDMfq4iotGmzNmwlKjC-lXviu1cRgRwQnlZbve8TVthH7jFmrJ0Me4MgLQH37zEO6fvCPqssG0PowiNc",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=1200&fit=crop"
    ]
  },
  {
    id: "modern-residential-villa",
    title: "Modern Residential Villa",
    subtitle: "Full Home Interior & Exterior",
    category: "residential",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7LBB579BM-6R02HOx0eidVx77VXhOEeyoubt7LIsn6J8YW9lRasXSladhSZK_ZOR1TTKhU7uBiYMKmTzCgCUHyTR3u-oeAWkCxePNhhDm9MEPGUuhxVVgy5r7YodtHw3D4xgkRPl2UmeFCOSe2D0Z-Sn9Z7ibgIrlb4EQTf1Ic1T25Kq0JbhVazzIgfF4Qm1rvXsPZg9cipD2aQBWCBJ-mV57yTXW8J9lz175nRRNpcjN-6-Acm-JOvp6SwYIwvBJ7gf8poqDr4o",
    client: "Private Client",
    location: "Bangalore, India",
    size: "5,200 sq ft",
    services: "Full Home Interior & Exterior Design",
    duration: "10 Months",
    theme: "Modern Minimalist",
    type: "Villa",
    description: "A complete transformation of a modern villa, encompassing both interior and exterior spaces. The design emphasizes clean lines, open spaces, and a seamless connection between indoor and outdoor living areas.",
    vision: "The vision was to create a home that celebrates modern architecture while maintaining warmth and livability. We designed spaces that maximize natural light, create visual flow, and provide both private retreats and social gathering areas for the family.",
    keyFeatures: [
      "Open-plan living areas with seamless indoor-outdoor connections",
      "Modern kitchen with premium appliances and custom cabinetry",
      "Landscaped outdoor spaces with integrated entertainment areas",
      "Master suite with private terrace and spa-inspired bathroom",
      "Sustainable design elements including solar panels and rainwater harvesting"
    ],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7LBB579BM-6R02HOx0eidVx77VXhOEeyoubt7LIsn6J8YW9lRasXSladhSZK_ZOR1TTKhU7uBiYMKmTzCgCUHyTR3u-oeAWkCxePNhhDm9MEPGUuhxVVgy5r7YodtHw3D4xgkRPl2UmeFCOSe2D0Z-Sn9Z7ibgIrlb4EQTf1Ic1T25Kq0JbhVazzIgfF4Qm1rvXsPZg9cipD2aQBWCBJ-mV57yTXW8J9lz175nRRNpcjN-6-Acm-JOvp6SwYIwvBJ7gf8poqDr4o",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=1200&fit=crop"
    ]
  },
  {
    id: "premium-modular-kitchen",
    title: "Premium Modular Kitchen",
    subtitle: "Residential Kitchen Design",
    category: "residential",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
    client: "Private Client",
    location: "New Delhi, India",
    size: "450 sq ft",
    services: "Kitchen Design & Installation",
    duration: "4 Months",
    theme: "Modern Luxury",
    type: "Kitchen",
    description: "A premium modular kitchen designed for a discerning client who values both functionality and aesthetics. The space combines high-end appliances, custom cabinetry, and thoughtful storage solutions to create a kitchen that is both beautiful and highly functional.",
    vision: "The vision was to create a kitchen that serves as the heart of the home, where cooking becomes a joy and entertaining is effortless. We designed a space that balances luxury materials with practical considerations, ensuring every element serves both form and function.",
    keyFeatures: [
      "Custom-designed cabinetry with premium hardware and soft-close mechanisms",
      "High-end appliances integrated seamlessly into the design",
      "Island with breakfast bar and additional storage",
      "Premium countertops and backsplash materials",
      "Integrated lighting system with task and ambient lighting"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=1200&fit=crop"
    ]
  },
  {
    id: "elegant-living-space",
    title: "Elegant Living Space",
    subtitle: "Residential Interior Design",
    category: "residential",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop",
    client: "Private Client",
    location: "Gurgaon, India",
    size: "2,800 sq ft",
    services: "Living Space Interior Design",
    duration: "5 Months",
    theme: "Elegant Contemporary",
    type: "Apartment",
    description: "An elegant living space transformation that combines classic sophistication with modern comfort. The design focuses on creating a warm, inviting atmosphere while maintaining a sense of refined luxury throughout the home.",
    vision: "The vision was to create a home that feels both timeless and contemporary, where every detail contributes to an atmosphere of refined elegance. We selected materials, colors, and furnishings that work together harmoniously to create spaces that are both beautiful and livable.",
    keyFeatures: [
      "Elegant living room with custom furniture and curated art pieces",
      "Formal dining area with statement lighting and premium finishes",
      "Cozy family spaces with comfortable seating and warm textures",
      "Master bedroom with luxurious finishes and spa-like ensuite",
      "Thoughtful use of color and texture to create visual interest"
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop"
    ]
  }
];

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getProjectByTitle = (title: string): ProjectDetail | undefined => {
  return projectsData.find(project => project.title === title);
};

