export interface CoupleInfo {
  groom: string;
  bride: string;
  monogram: string;
  tagline: string;
  logoUrl: string;
  heroImage: string;
}

export interface EventDetail {
  title: string;
  categoryBadge: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapQuery: string;
  notes: string;
  attireTag: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  desc: string;
}

export interface StoryMilestone {
  year: string;
  location: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  icon: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  caption: string;
  colSpan?: string;
}

export interface GuestInfoItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  badge: string;
  linkText?: string;
  linkHref?: string;
}

export interface RegistryItem {
  id: string;
  name: string;
  category: 'Home' | 'Kitchen' | 'Experience' | 'Cash Fund';
  price: string;
  image: string;
  storeName?: string;
  description: string;
}

export interface BankAccountDetails {
  bankName: string;
  accountNumber: string;
  accountName: string;
  currency: string;
  swiftCode?: string;
}
