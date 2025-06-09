export type Icon = string; // FontAwesome or other icon class
export type SGURL = string; // Links for navigation
export type Image = string; // Image paths

export interface CTA {
  text: string;
  link: SGURL;
}

export interface Feature {
  name: string;
  description: string;
  image?: Image;
  icon?: Icon;
  link?: SGURL;
  cta?: CTA[];
}

export type Service = Feature;

export type Project = Feature;

export interface FAQ {
  question: string;
  answer: string;
  icon?: Icon;
}

export interface Social {
  name: string;
  icon: Icon;
  link: SGURL;
}

export interface ContactInfo {
  phone: { label: string; icon: Icon };
  email: { label: string; icon: Icon };
  address: { label: string; icon: Icon };
  working_hours: {
    title: string;
    icon: Icon;
    schedule: { weekdays: string; saturday: string };
  };
}

export interface Footer {
  logoSrc?: string;
  about?: string;
  services?: string[];
  categories?: string[];
  latest_posts?: { title: string; date: string; image: Image; link: SGURL }[];
  socials?: Social[];
  copyright: string;
}

export interface Section {
  overline?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface HeroSection extends Section {
  backgroundImage: Image;
  cta: CTA[];
}

export interface Services extends Section {
  features: Service[];
}

export interface RecentProjects extends Section {
  features: Project[];
}

export interface AboutUs extends Section {
  featureImage: Image;
  tabs?: {
    History: Feature;
    Mission: Feature;
    Values: { content: string[]; icon: Icon };
  };
  features?: Feature[];
  cta: CTA[];
}

export interface Testimonials extends Section {
  backgroundImage?: Image;
  features: { quote: string; author: string; position: string }[];
}

export interface Clients {
  title: string;
  features: Image[];
}

export interface FAQSection extends Section {
  features: FAQ[];
}

export interface WebsiteData {
  title: string;
  headerLogoSrc: string;
  navigation: { [key: string]: string[] };
  contact_info: ContactInfo;
  socials: Social[];
  hero_section: HeroSection;
  why_choose_us: Section & { features: Feature[] };
  services: Services;
  cta: CTA[];
  recent_projects: RecentProjects;
  about_us: AboutUs;
  testimonials: Testimonials;
  clients: Clients;
  faq: FAQSection;
  footer: Footer;
}
