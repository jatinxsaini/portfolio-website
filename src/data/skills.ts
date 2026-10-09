import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Programming, problem-solving & software development',
    cardBg: 'purple',
    skills: [
      { name: 'Java', iconName: 'Coffee', tag: 'Programming', highlight: true },
      { name: 'Python', iconName: 'Code2', tag: 'AI / ML', highlight: true },
      { name: 'C++', iconName: 'Terminal', tag: 'DSA', highlight: true },
      { name: 'JavaScript', iconName: 'Braces', tag: 'Web Development' },
      { name: 'SQL', iconName: 'Database', tag: 'Databases' },
    ],
  },

  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Intelligent applications, LLMs & information retrieval',
    cardBg: 'mint',
    skills: [
      { name: 'Machine Learning', iconName: 'BrainCircuit', tag: 'AI / ML', highlight: true },
      { name: 'Large Language Models', iconName: 'Bot', tag: 'LLMs', highlight: true },
      { name: 'RAG', iconName: 'SearchCode', tag: 'Retrieval-Augmented Generation', highlight: true },
      { name: 'Vector Search', iconName: 'Database', tag: 'Information Retrieval' },
      { name: 'NASA API', iconName: 'Globe', tag: 'Data Integration' },
    ],
  },

  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Modern web applications, APIs & database integration',
    cardBg: 'yellow',
    skills: [
      { name: 'React', iconName: 'Atom', tag: 'Frontend', highlight: true },
      { name: 'Next.js', iconName: 'Globe', tag: 'Full Stack', highlight: true },
      { name: 'Node.js', iconName: 'Server', tag: 'Runtime', highlight: true },
      { name: 'Express.js', iconName: 'Cpu', tag: 'Backend' },
      { name: 'PostgreSQL', iconName: 'Database', tag: 'SQL Database' },
      { name: 'MySQL', iconName: 'Database', tag: 'Database' },
      { name: 'MongoDB', iconName: 'HardDrive', tag: 'NoSQL' },
      { name: 'Prisma ORM', iconName: 'Layers', tag: 'Database ORM' },
      { name: 'REST APIs', iconName: 'Network', tag: 'API Development' },
      { name: 'GraphQL', iconName: 'Workflow', tag: 'API Query Language' },
      { name: 'Tailwind CSS', iconName: 'Palette', tag: 'Styling' },
    ],
  },

  {
    id: 'tools',
    title: 'Tools & Technologies',
    description: 'Development environments, version control & deployment',
    cardBg: 'charcoal',
    skills: [
      { name: 'Linux', iconName: 'Terminal', tag: 'Environment', highlight: true },
      { name: 'Git & GitHub', iconName: 'GitBranch', tag: 'Version Control', highlight: true },
      { name: 'VS Code', iconName: 'Code', tag: 'IDE' },
      { name: 'npm', iconName: 'Package', tag: 'Package Manager' },
      { name: 'Vercel', iconName: 'Cloud', tag: 'Deployment' },
    ],
  },

  {
    id: 'fundamentals',
    title: 'Computer Science & DSA',
    description: 'Core CS concepts, algorithmic thinking & software architecture',
    cardBg: 'purple',
    skills: [
      { name: 'Data Structures & Algorithms', iconName: 'Binary', tag: '250+ LeetCode', highlight: true },
      { name: 'Object-Oriented Programming', iconName: 'Boxes', tag: 'OOP', highlight: true },
      { name: 'Database Management Systems', iconName: 'Database', tag: 'DBMS' },
      { name: 'Operating Systems', iconName: 'Monitor', tag: 'OS' },
      { name: 'Computer Networks', iconName: 'Network', tag: 'CN' },
      { name: 'System Design', iconName: 'Workflow', tag: 'Architecture' },
    ],
  },
];