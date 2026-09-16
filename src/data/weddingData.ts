import {
  CoupleInfo,
  EventDetail,
  ScheduleItem,
  StoryMilestone,
  GalleryPhoto,
  GuestInfoItem,
  RegistryItem,
  BankAccountDetails,
} from '../types';

export const WEDDING_COUPLE: CoupleInfo = {
  groom: "Festus",
  bride: "Peace",
  monogram: "F & P",
  tagline: "From University love to being together forever.",
  logoUrl: "https://lh3.googleusercontent.com/aida/AEtjO1USaB6o3SkBbdu7DZ_jFvK3F4MWMvGHOywSoobrwtiGiyUUYAaNxQg-nXvUHDTOyHcSqG8YbCfFU8y5WsLHs5GRqedv4IvGNWXjdUbHR78MgfPszSNifKTSCICWmAJ-BRyIU2eKcbhiC6T11u5vj0lpVFq4oey-iXBaF3h4hcESsb3LFHWnSx8A4RXSLSO2vunC69R0dlsi3qHovCu1D0mLNrrgWpa-Ik8adif3vID6IC6bkCwr1Is5F1s",
  heroImage: "/src/assets/images/wedding_couple_hero_1789482712047.jpg",
};

export const WEDDING_DATE_STR = "Thursday, 16th September, 2026";
export const WEDDING_TIMESTAMP = "2026-09-16T10:00:00+01:00";
export const WEDDING_LOCATION = "Anthony, Lagos State";
export const VENUE_NAME = "Apostolic Faith Church Campground";
export const VENUE_AUDITORIUM = "Main Auditorium of the Apostolic Faith Church Campground";
export const VENUE_HALL = "The Hall Opposite the Main Wedding Venue";
export const VENUE_FULL_ADDRESS = "Apostolic Faith Church Campground, Anthony, Lagos State, Nigeria";

export const CEREMONY_DETAIL: EventDetail = {
  title: "The Holy Matrimony",
  categoryBadge: "Solemnization of Matrimony",
  date: "Thursday, 16th September, 2026",
  time: "10:00 AM Prompt",
  venue: "Main Auditorium of the Apostolic Faith Church Campground",
  address: "Anthony, Lagos State",
  mapQuery: "Apostolic+Faith+Church+Campground+Anthony+Lagos+State",
  notes: "The solemnization of Holy Matrimony will hold at the Main Auditorium of the Apostolic Faith Church Campground, Anthony, Lagos State. Please be seated by 9:30 AM.",
  attireTag: "White & Gold",
};

export const RECEPTION_DETAIL: EventDetail = {
  title: "The Wedding Reception",
  categoryBadge: "Celebratory Banquet",
  date: "Thursday, 16th September, 2026",
  time: "2:00 PM Prompt",
  venue: "The Hall Opposite the Main Wedding Venue",
  address: "Apostolic Faith Church Campground, Anthony, Lagos State",
  mapQuery: "Apostolic+Faith+Church+Campground+Anthony+Lagos+State",
  notes: "To hold at the Hall opposite the Main wedding venue by 2pm. Join us for a joyous celebration, banquet dinner, cutting of the cake, and heartfelt thanksgiving.",
  attireTag: "White & Gold Elegance",
};

export const DAY_SCHEDULE: ScheduleItem[] = [
  {
    time: "9:30 AM",
    title: "Guest Arrival & Organ Prelude",
    desc: "Guests arrive and are warmly seated in the Main Auditorium amidst sacred orchestral preludes.",
  },
  {
    time: "10:00 AM",
    title: "Sacred Holy Matrimony Service",
    desc: "Bridal processional, worship hymns, the exchange of matrimonial vows, and pastoral blessings in the Main Auditorium.",
  },
  {
    time: "11:45 AM",
    title: "Signing of the Marriage Register",
    desc: "Official signing of the bridal registry and congratulatory hymns of praise.",
  },
  {
    time: "12:30 PM",
    title: "Family & Bridal Party Photography",
    desc: "Commemorative portraits with the clergy, parents, family, and university friends on the scenic church grounds.",
  },
  {
    time: "1:30 PM",
    title: "Guest Seating at Reception Hall",
    desc: "Guests transition to the Hall opposite the Main wedding venue for welcoming music and refreshments.",
  },
  {
    time: "2:00 PM",
    title: "Grand Reception & Couple's Triumphant Entry",
    desc: "Ceremony & Reception holding at the Hall opposite the Main wedding venue by 2pm amidst joyous praise and cheers.",
  },
  {
    time: "2:45 PM",
    title: "Plated Banquet Dinner & Heartfelt Speeches",
    desc: "Sumptuous celebratory feast and speeches honoring the couple's journey from university love to forever.",
  },
  {
    time: "3:45 PM",
    title: "Cutting of the Royal Cake & Couple's Dance",
    desc: "Festus & Peace cut their magnificent white-and-gold wedding cake followed by their couple's dance.",
  },
  {
    time: "4:45 PM",
    title: "Thanksgiving, Praise & Grand Send-Off",
    desc: "High-energy praise, blessings, and joyful send-off as Festus & Peace step forward into forever.",
  },
];

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    year: "University Days",
    location: "Campus Lecture Halls & Library",
    title: "University Love Sparked",
    desc: "What started with shared lectures, library study desks, and late-afternoon conversations across the university campus blossomed into an undeniable friendship. Through exams, coursework, and quiet laughter, our university love story took root.",
    image: "/src/assets/images/couple_campus_1789482753649.jpg",
    alt: "Festus and Peace during their university days, sitting together with books on campus in golden sunlight.",
    icon: "school",
  },
  {
    year: "Growing Together",
    location: "Through Every Season",
    title: "The First Chapter",
    desc: "From graduating side-by-side to navigating early careers and life's big milestones, our love grew unshakeable. Grounded in deep Christian faith, mutual support, and prayer, we realized God was weaving our lives together into a lifetime tapestry.",
    image: "/src/assets/images/couple_portrait_1789482727077.jpg",
    alt: "Festus and Peace in elegant formal attire celebrating their journey together.",
    icon: "favorite",
  },
  {
    year: "The Blessed Promise",
    location: "A Beautiful 'Yes'",
    title: "The Proposal",
    desc: "Surrounded by sweet memories and the certainty of God's guidance, Festus asked Peace for her hand in marriage. With joyous tears, thankful praise, and glowing smiles, she said yes to an everlasting adventure.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs9gxg1MrXu9qKPtMxIkVk4cN9IBaZirKZa_4B0qSSIu_se5eQpthW_PUlCn8N1K0Ts6tu-UKDasgE-Vk_BxqwScl5fx521b0lG-pBoRSSsPGl07SSvD_CdmTGHcF-LMi0PLkxsFH-rKaTp-SH6bPeT4ciEGnjm_7fxTXo44YIaWClkekvieOMMPjQffvTku2UaX6mPCv9qDI82UlR4jvXPfzq-ANTtZYP2_4gnaAk5-TknXloB_DJ",
    alt: "A golden sunset glow illuminating a bespoke engagement ring symbol of eternity and devotion.",
    icon: "diamond",
  },
  {
    year: "16th September, 2026",
    location: "Main Auditorium & Reception Hall, Anthony",
    title: "Together Forever",
    desc: "From University love to being together forever! Standing hand-in-hand at the Main Auditorium of the Apostolic Faith Church Campground in Anthony, Lagos State, followed by our joyous celebration at the Hall opposite the Main wedding venue by 2pm, we exchange sacred vows before God, our families, and our cherished loved ones.",
    image: "/src/assets/images/wedding_couple_hero_1789482712047.jpg",
    alt: "Festus and Peace radiant in white and gold on their holy matrimony day.",
    icon: "church",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Golden Hour Celebration",
    category: "The Wedding Day",
    src: "/src/assets/images/wedding_couple_hero_1789482712047.jpg",
    alt: "Editorial wedding portrait of Festus, a tall robust groom, and Peace, a petite and slender bride in white and gold.",
    caption: "Festus & Peace radiant in their white and gold wedding attire",
    colSpan: "lg:col-span-2",
  },
  {
    id: "g2",
    title: "University Sweethearts",
    category: "Campus Days",
    src: "/src/assets/images/couple_campus_1789482753649.jpg",
    alt: "Festus and Peace during their university days on campus green bench.",
    caption: "A tender moment reminiscing on where our love began",
  },
  {
    id: "g3",
    title: "Symbol of Eternity",
    category: "The Ring",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJVXO9m7Vh4Ls23FwDQnj412Ir54400VH0Ywymbt1xO9z4xaiStBHlO6InO3ao9oRmaX_uRyybM6QivrwyObuE9SzBZsB39JbD1tczjJ-OjIhRMLNv97UOWkp_5vEc8pINmCaNXlGVrsTL2EzQytz_fkI8AMv3Zxx7DPVAzGwqOoNJN4ExDkTmcY6TWWIrouKmNl_8eKuEy6meLr69TUFhK3skcuZ3eVDYk0oae2EDRDh90WDQr37u",
    alt: "Macro luxury shot of a sparkling cushion-cut diamond engagement ring resting upon handcrafted ivory cotton paper with delicate gold calligraphy lettering in warm editorial light.",
    caption: "The bespoke diamond ring on vintage stationery",
  },
  {
    id: "g4",
    title: "Pure Devotion",
    category: "Candid Joy",
    src: "/src/assets/images/couple_candid_1789482740311.jpg",
    alt: "Festus looking down with pure admiration and tenderness at his bride Peace as they walk hand in hand.",
    caption: "Festus looking at Peace with pure admiration",
  },
  {
    id: "g5",
    title: "Milestone Celebration",
    category: "Celebration",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIsIOHI-N8hJyRZ5xQo5-KEI_ojAzBVV7_HOx0nsvyBxSpW4f6kaLeSdG1fyQDwZqmw7FFl85w3KDTNO9CzVCGKdAufHLYdDj-uXPMZqugh3dVSGaWot6z92ZtJVtBPLkBEMl3xCm2c6QRWQrNF6kqKJF5V5BXAtEGNdjj1n2u7LfNyYvXQOvoC_fvAgdNYn3hZxpOXwR4uu01z-6BhNvsi_ZYSeyXvv71e6igf8PIw3MG8QHHcUXW",
    alt: "An elegant evening reception with guests dressed in celebratory formal attire under shimmering chandeliers in warm candlelight.",
    caption: "Celebrating our milestones and dreams together",
  },
  {
    id: "g6",
    title: "Botanical Harmony",
    category: "Florals",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgsQhybqj--Qu7FclbWAhwcjYIz7m88QH6ZhKQO8Rwkju5C24oPjYyRzw_nUNNjI6083k7PFPC4Oku2TCVCFND_sjNpAQlE9c3DQxtAj9SnuyH0uOM-JVbHlNrJmR_6lUEEp40BFrSvkMRAubuTnt2G__fe2afv73LpCyGDyb1_wwS0J_jc6djeo6zFBBlBcxpGMsuacFk1ItpXld3JoOkTk9pSRVF35xHKbT92dipc71EPev-8ntV",
    alt: "Artisanal luxury bridal bouquet featuring creamy English garden roses, peach ranunculus, delicate white sweet peas, and dusty eucalyptus tied with champagne silk ribbon.",
    caption: "Bridal bouquet with garden roses, ranunculus, and eucalyptus",
  },
  {
    id: "g7",
    title: "Sunset Serenade",
    category: "Golden Hour",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEUshjsAozK18FWgaYOXF4oh6WAlJkN26jOkKYOSeh1gd4Cuq4T-ThHtwtimOz7Uxr3DekBSGpGc4uTt73hUmGL3776MW0NqOwOteDEiUuvabvVCe-DtDkIoKrrvFTDL4IE-GeroVGo90KJrXvFovbfUFPlBT3FwcW3zWbBXZMBcDr5oex_nVN85aC_u1GAPdRO87W0oybYcDnSno98eZIhT2aXBRnBbRCBUboG_Lfc4SOYWHUrHfd",
    alt: "Breathtaking wide landscape under a sunset sky painted with coral, amber, and deep gold hues.",
    caption: "Golden hour sunset marking the eve of our union",
  },
  {
    id: "g8",
    title: "Grace & Devotion",
    category: "Portraits",
    src: "/src/assets/images/couple_portrait_1789482727077.jpg",
    alt: "Festus and Peace in a romantic white and gold wedding portrait.",
    caption: "A gentle embrace and steadfast devotion",
  },
  {
    id: "g9",
    title: "Tablescape Radiance",
    category: "Reception Details",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9SyaTprvNEVLCLMh2c3pQG08_xccNMcils_4Z7ydH7NxyX-2RM9WbfnNmvSVtZW3h-zy8_HrBQYVK5a3437nsaYgAgW1PFvAHrHL9w7DXYG2sqI_wkl-SdpSHe2L_gYH8Ca7Rpli2OmQM1SS5NBOnkhrO9eQzKdjgD_5Mz2ozHTU0j5OCdFL9ewZiR0QA0Lu0hXX_dAd4iBAXWSzCUdT8-suzfQyuhgrrSA4bATZjqy2jcemYYwqO",
    alt: "Luxury wedding reception table setting featuring gold cutlery, tall tapered beeswax candles, crisp white napkins, and delicate crystal glassware in soft atmospheric lighting.",
    caption: "Bespoke wedding table setting in white and gold",
  },
  {
    id: "g10",
    title: "The Journey Ahead",
    category: "Forever",
    src: "/src/assets/images/couple_candid_1789482740311.jpg",
    alt: "Festus and Peace smiling joyfully hand in hand stepping into their new future.",
    caption: "Walking into our future together",
  },
];

export const GUEST_INFO_ITEMS: GuestInfoItem[] = [
  {
    id: "hotel",
    title: "Nearby Accommodation",
    icon: "hotel",
    description: "Comfortable hotel and guest suite options are available around Anthony, Maryland, and Ikeja (e.g., Maryland hotels & Ikeja GRA). Mention 'Festus & Peace Wedding' when booking.",
    badge: "Anthony / Ikeja Hotels",
  },
  {
    id: "transport",
    title: "Directions & Access",
    icon: "directions_car",
    description: "The Apostolic Faith Church Campground is centrally located off Ikorodu Road in Anthony Village, easily accessible by personal vehicle and rideshare (Uber/Bolt).",
    badge: "Anthony Village, Lagos",
  },
  {
    id: "parking",
    title: "Secured Parking",
    icon: "local_parking",
    description: "Ample, free, and secured parking is available inside the Campground premises. Trained security personnel and church protocol will direct vehicles.",
    badge: "On-site Secured Parking",
  },
  {
    id: "concierge",
    title: "Wedding Protocol Desk",
    icon: "support_agent",
    description: "Our protocol and ushering team will welcome you at the Hall opposite the Main venue. For inquiries, travel guidance, or assistance, reach out directly.",
    badge: "concierge@festusandpeace.com",
    linkText: "concierge@festusandpeace.com",
    linkHref: "mailto:concierge@festusandpeace.com",
  },
];

export const MAP_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuB7oexsQAOIS5YIbemaZ2HLuWbnWv3raALB9Y1TO8EsxWjfnWBc9I6_piJnnBklSj08BElfizT2q3X057Xhlm1RRxniZq92geRqvV7__enXGzPtWGax5uwlmqJlaQzC3FPiej3VD5TdVSO0hZs5LJbPTdT1HoQ5tuLzX11nt_I9eQi4NVlmSeSMBv2RO-50n_47HQAbnCGp21ZFonfR3IX95wuFWSPilGZu9mN5dn6xk1NgPSoLjlwJ";

export const WEDDING_HASHTAGS = [
  "#FestusAndPeace2026",
  "#FromCampusToForever",
  "#FPForever26",
];

export const BANK_ACCOUNTS: BankAccountDetails[] = [
  {
    bankName: "Guaranty Trust Bank (GTBank)",
    accountNumber: "0784920153",
    accountName: "Festus & Peace Wedding Account",
    currency: "NGN (₦) Naira",
  },
  {
    bankName: "Guaranty Trust Bank (GTBank) - USD Domiciliary",
    accountNumber: "0784920160",
    accountName: "Festus & Peace Wedding Account",
    currency: "USD ($) Domiciliary",
    swiftCode: "GTBINGLA",
  },
  {
    bankName: "Zenith Bank Plc",
    accountNumber: "2201948371",
    accountName: "Festus & Peace Wedding Fund",
    currency: "NGN (₦) Naira",
  },
];

export const REGISTRY_ITEMS: RegistryItem[] = [
  {
    id: "reg-1",
    name: "Our Honeymoon & Travel Fund",
    category: "Experience",
    price: "Contribution of any amount",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEUshjsAozK18FWgaYOXF4oh6WAlJkN26jOkKYOSeh1gd4Cuq4T-ThHtwtimOz7Uxr3DekBSGpGc4uTt73hUmGL3776MW0NqOwOteDEiUuvabvVCe-DtDkIoKrrvFTDL4IE-GeroVGo90KJrXvFovbfUFPlBT3FwcW3zWbBXZMBcDr5oex_nVN85aC_u1GAPdRO87W0oybYcDnSno98eZIhT2aXBRnBbRCBUboG_Lfc4SOYWHUrHfd",
    description: "Honoring our romantic post-wedding honeymoon getaway and first journey as husband and wife.",
  },
  {
    id: "reg-2",
    name: "New Home Nesting Fund",
    category: "Home",
    price: "Contribution of any amount",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9SyaTprvNEVLCLMh2c3pQG08_xccNMcils_4Z7ydH7NxyX-2RM9WbfnNmvSVtZW3h-zy8_HrBQYVK5a3437nsaYgAgW1PFvAHrHL9w7DXYG2sqI_wkl-SdpSHe2L_gYH8Ca7Rpli2OmQM1SS5NBOnkhrO9eQzKdjgD_5Mz2ozHTU0j5OCdFL9ewZiR0QA0Lu0hXX_dAd4iBAXWSzCUdT8-suzfQyuhgrrSA4bATZjqy2jcemYYwqO",
    description: "Contributing towards furnishing and establishing our peaceful new home together.",
  },
  {
    id: "reg-3",
    name: "Bespoke Espresso & Coffee Station",
    category: "Kitchen",
    price: "₦340,000 Guide",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80",
    storeName: "Culinary Haven",
    description: "For joyful morning coffee rituals and warm hospitality for our visiting friends and family.",
  },
  {
    id: "reg-4",
    name: "Enamelled Cast Iron Dutch Oven Cookware",
    category: "Kitchen",
    price: "₦195,000 Guide",
    image: "https://images.unsplash.com/photo-1584990347449-397a61d152c9?w=600&auto=format&fit=crop&q=80",
    storeName: "Le Gourmet",
    description: "Heirloom kitchen essential for slow-cooked celebratory family recipes.",
  },
  {
    id: "reg-5",
    name: "Luxury 1000-Thread-Count Egyptian Cotton Bedding",
    category: "Home",
    price: "₦165,000 Guide",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80",
    storeName: "Maison Blanc",
    description: "Crisp white and gold detailed bed linens for serene nights and sweet rest.",
  },
  {
    id: "reg-6",
    name: "Smart Precision Air Purifier & Humidifier",
    category: "Home",
    price: "₦220,000 Guide",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80",
    storeName: "TechLiving",
    description: "Creating a healthy, tranquil, and pure atmosphere in our new home.",
  },
  {
    id: "reg-7",
    name: "Romantic Sunset Island Dinner Cruise",
    category: "Experience",
    price: "₦180,000 Guide",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    description: "An intimate evening dinner experience on the water during our honeymoon celebration.",
  },
  {
    id: "reg-8",
    name: "Artisan Fine Porcelain 24-Piece Dinnerware Set",
    category: "Kitchen",
    price: "₦280,000 Guide",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&auto=format&fit=crop&q=80",
    storeName: "Royal Table Arts",
    description: "Pure white porcelain with hand-painted gold rim borders for celebratory family dinners.",
  },
];
