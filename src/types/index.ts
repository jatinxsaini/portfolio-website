export type CardAccentColor = 'purple' | 'mint' | 'yellow' | 'charcoal' | 'white';

export interface Profile {
  name: string;
  displayName: string;
  role: string;
  shortIntro: string;
  aboutDescription: string[];
  email: string;
  location: string;
  availabilityStatus: string;
  avatarUrl: string;
  resumeUrl: string;
  badgeText: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  howIBuiltThis?: string[];
  features?: string[];
  technologies: string[];
  imagePath?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
  category?: string;
  accentColor?: CardAccentColor;
}

export interface Skill {
  name: string;
  iconName?: string;
  tag?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  cardBg: CardAccentColor;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description: string;
  url?: string;
  badge?: string;
  accentColor?: CardAccentColor;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  iconName: string;
  showInHeader?: boolean;
  showInFooter?: boolean;
}

export interface SectionConfig {
  about: boolean;
  skills: boolean;
  projects: boolean;
  achievements: boolean;
  contact: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  copyright: string;
}

export interface ThemeConfig {
  colors: {
    bg: string;
    canvas: string;
    text: string;
    purple: string;
    mint: string;
    yellow: string;
    charcoal: string;
    white: string;
  };
  borderRadius: string;
}
