# CUSTOMIZATION GUIDE — JATIN SAINI PORTFOLIO

Welcome to your new portfolio website! This portfolio is designed so you can update almost all your content by editing simple TypeScript data files in `src/data/` and `src/config/` without modifying React components.

---

## Quick Reference: Which File Do I Edit?

| What do you want to change? | File to edit |
|---|---|
| **Name, Title, Bio, Email** | `src/data/profile.ts` |
| **Add / Edit Projects** | `src/data/projects.ts` |
| **Add / Edit Skills** | `src/data/skills.ts` |
| **Add / Edit Achievements** | `src/data/achievements.ts` |
| **Social Links (GitHub, LinkedIn, etc.)** | `src/data/social-links.ts` |
| **Enable / Disable Sections** | `src/config/sections.ts` |
| **Website Title, SEO Metadata** | `src/config/site.ts` |
| **Theme Colors & Styles** | `src/config/theme.ts` & `src/app/globals.css` |
| **Profile Image** | Drop image in `public/images/profile/` |
| **Resume PDF** | Replace `public/resume.pdf` |

---

## 1. Change Name, Title & Bio
Open `src/data/profile.ts`:

```typescript
import { Profile } from '@/types';

export const profileData: Profile = {
  name: 'Jatin Saini',
  displayName: 'JATIN SAINI',
  role: 'Software Engineer & Designer',
  shortIntro: 'Building high-performance web experiences with modern architecture.',
  aboutDescription: [
    'Paragraph 1 of your bio goes here...',
    'Paragraph 2 of your bio goes here...',
  ],
  email: 'jatin@example.com',
  location: 'Delhi, India',
  availabilityStatus: 'Available for work',
  avatarUrl: '/images/profile/jatin.jpg',
  resumeUrl: '/resume.pdf',
  badgeText: 'DESIGN & DEV',
};
```

---

## 2. Add a Project
Open `src/data/projects.ts` and add project objects to the `projectsData` array:

```typescript
import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    slug: 'ai-code-editor',
    title: 'AI Code Assistant',
    shortDescription: 'A real-time collaborative code editor with AI code completion.',
    detailedDescription: 'Full breakdown of the project architecture and features.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    imagePath: '/images/projects/ai-editor.jpg', // Place image under public/images/projects/
    githubUrl: 'https://github.com/yourusername/ai-editor',
    liveDemoUrl: 'https://ai-editor-demo.com',
    featured: true,
    category: 'Web App',
    accentColor: 'purple', // Options: 'purple' | 'mint' | 'yellow' | 'charcoal' | 'white'
  },
];
```

*Note: If you leave `projectsData` as an empty array `[]`, the website automatically displays an elegant empty state card.*

---

## 3. Add Project Images
1. Save your project image file (e.g. `my-project.jpg` or `my-project.png`) in the `public/images/projects/` directory.
2. In `src/data/projects.ts`, set the `imagePath` property:
   ```typescript
   imagePath: '/images/projects/my-project.jpg'
   ```
3. If an image path is omitted or fails to load, the project card automatically displays an icon placeholder without breaking.

---

## 4. Add GitHub and Live Demo Links
In `src/data/projects.ts`, simply specify `githubUrl` or `liveDemoUrl`:

```typescript
githubUrl: 'https://github.com/yourusername/repository-name',
liveDemoUrl: 'https://your-live-demo-domain.com',
```

*Note: If a URL property is omitted or left undefined, the corresponding button will NOT be rendered.*

---

## 5. Update Skills
Open `src/data/skills.ts` to add or modify skill categories and individual skills:

```typescript
export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Modern web user interfaces & performance',
    cardBg: 'purple', // Card accent color
    skills: [
      { name: 'React', iconName: 'Atom', tag: 'Core', highlight: true },
      { name: 'Next.js', iconName: 'Globe', tag: 'App Router', highlight: true },
    ],
  },
];
```

Available `cardBg` colors: `'purple'`, `'mint'`, `'yellow'`, `'charcoal'`, `'white'`.  
Icon names correspond to standard [Lucide Icons](https://lucide.dev/icons) (e.g. `Code`, `Database`, `Server`, `Palette`, `Cloud`, `Cpu`).

---

## 6. Add Achievements & Certifications
Open `src/data/achievements.ts`:

```typescript
import { Achievement } from '@/types';

export const achievementsData: Achievement[] = [
  {
    id: 'cert-1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2025',
    description: 'Passed certification demonstrating cloud infrastructure architecture expertise.',
    url: 'https://aws.amazon.com/verification',
    badge: 'Certification',
    accentColor: 'mint',
  },
];
```

*Note: If left empty `[]`, an elegant empty state card will render automatically.*

---

## 7. Change Social Links
Open `src/data/social-links.ts`:

```typescript
export const socialLinksData: SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/yourusername',
    iconName: 'Github',
    showInHeader: true,
    showInFooter: true,
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    iconName: 'Linkedin',
    showInHeader: true,
    showInFooter: true,
  },
];
```

---

## 8. Replace Profile Image
1. Place your portrait photo inside `public/images/profile/jatin.jpg`.
2. Open `src/data/profile.ts` and set:
   ```typescript
   avatarUrl: '/images/profile/jatin.jpg'
   ```
3. If no image is provided, an elegant gradient CSS avatar placeholder with your initials will automatically be displayed.

---

## 9. Replace Resume PDF
1. Save your resume PDF file as `resume.pdf` in the `public/` directory (`public/resume.pdf`).
2. Make sure `resumeUrl` in `src/data/profile.ts` points to `/resume.pdf`:
   ```typescript
   resumeUrl: '/resume.pdf'
   ```

---

## 10. Change Colors and Typography
Color values can be updated in `src/config/theme.ts` and `src/app/globals.css`:

`src/config/theme.ts`:
```typescript
export const themeConfig = {
  colors: {
    bg: '#E7E7E7',        // Light gray page background
    canvas: '#FAFAF8',    // Warm-white main canvas
    text: '#080808',      // Dark text
    purple: '#8585D1',    // Accent Purple
    mint: '#A5DCD5',      // Accent Mint
    yellow: '#FFC767',    // Accent Yellow
    charcoal: '#555555',  // Accent Charcoal
    white: '#FFFFFF',     // Card White
  },
};
```

---

## 11. Enable or Disable Sections
Open `src/config/sections.ts` to toggle sections on or off. The Navbar automatically updates to hide disabled sections:

```typescript
export const sectionConfig = {
  about: true,
  skills: true,
  projects: true,
  achievements: true, // Set to false to hide Achievements section
  contact: true,
};
```

---

## Summary
You can manage your entire website content just by updating these configuration and data files. Happy customizing!
