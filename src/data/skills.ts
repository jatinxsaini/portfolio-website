import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    cardBg: 'white',
    skills: [
      { name: 'Java', iconPath: '/icons/skills/java.svg' },
      { name: 'Python', iconPath: '/icons/skills/python.svg' },
      { name: 'C', iconPath: '/icons/skills/c.svg' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    cardBg: 'white',
    skills: [
      { name: 'React', iconPath: '/icons/skills/react.svg' },
      { name: 'Next.js', iconPath: '/icons/skills/nextjs.svg' },
      { name: 'Node.js', iconPath: '/icons/skills/nodejs.svg' },
      { name: 'Express.js', iconPath: '/icons/skills/express.svg' },
      { name: 'FastAPI', iconPath: '/icons/skills/fastapi.svg' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    cardBg: 'white',
    skills: [
      { name: 'PostgreSQL', iconPath: '/icons/skills/postgresql.svg' },
      { name: 'MySQL', iconPath: '/icons/skills/mysql.svg' },
      { name: 'Redis', iconPath: '/icons/skills/redis.svg' },
      { name: 'DynamoDB', iconPath: '/icons/skills/amazonwebservices.svg' },
      { name: 'Prisma', iconPath: '/icons/skills/prisma.svg' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    cardBg: 'white',
    skills: [
      { name: 'AWS', iconPath: '/icons/skills/amazonwebservices.svg' },
      { name: 'Docker', iconPath: '/icons/skills/docker.svg' },
      { name: 'Git', iconPath: '/icons/skills/git.svg' },
      { name: 'GitHub Actions', iconPath: '/icons/skills/githubactions.svg' },
      { name: 'S3', iconPath: '/icons/skills/amazonwebservices.svg' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI/ML',
    cardBg: 'white',
    skills: [
      { name: 'LLM APIs' },
      { name: 'LangGraph' },
      { name: 'RAG Pipelines' },
      { name: 'Vector Embeddings' },
      { name: 'Semantic Search' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    cardBg: 'white',
    skills: [
      { name: 'Jest', iconPath: '/icons/skills/jest.svg' },
      { name: 'Vitest', iconPath: '/icons/skills/vitest.svg' },
    ],
  },
];
