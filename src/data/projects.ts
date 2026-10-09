import { Project } from '@/types';

/**
 * =====================================================================
 * PROJECTS DATA FILE
 * 
 * Each project displays:
 * 1. Project Title & 1-Liner Short Description on the main grid card.
 * 2. Exactly 2 top tech stack tags on the main card.
 * 3. Clicking the card opens a detailed modal popup with full breakdown:
 *    - Detailed description
 *    - "howIBuiltThis": Paragraphs explaining how you made it
 *    - "features": Key feature bullet points
 *    - All tech stack pills & links (GitHub, Live Demo)
 * =====================================================================
 */

export const projectsData: Project[] = [
  {
    id: 'project-1',
    slug: 'argus-ai',
    title: 'ARGUS AI',
    shortDescription:
      'AI-powered Near-Earth Object risk assessment system combining NASA data, machine learning, and risk scoring.',
    detailedDescription:
      'ARGUS AI is an intelligent risk assessment and decision-support platform designed to analyze Near-Earth Objects (NEOs). It combines historical asteroid datasets, live NASA data, and machine learning to evaluate object characteristics, generate risk scores from 0–100, and help users understand which objects may require closer attention.',
    howIBuiltThis: [
      'Integrated historical Near-Earth Object datasets with live NASA data to provide relevant asteroid information.',
      'Analyzed orbital and physical parameters to support risk assessment and comparison between objects.',
      'Designed a machine learning-based workflow to generate risk scores and communicate assessment results.',
      'Structured the platform around changing observations so users can compare risk assessments as new data becomes available.',
    ],
    features: [
      'Near-Earth Object data exploration',
      'NASA API integration',
      'Machine learning-based risk assessment',
      'Risk scoring from 0–100',
      'Object comparison and risk prioritization',
      'Historical and live data analysis',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'NASA API',
      'Data Analysis',
      'Risk Scoring',
    ],
    imagePath: '',
    githubUrl: '',
    liveDemoUrl: '',
    featured: true,
    category: 'AI / Machine Learning',
    accentColor: 'purple',
  },

  {
    id: 'project-2',
    slug: 'ai-academic-platform',
    title: 'AI-Powered Academic Platform',
    shortDescription:
      'An AI-driven academic platform using LLMs, Retrieval-Augmented Generation, and vector search to retrieve relevant information.',
    detailedDescription:
      'An AI-powered academic application designed to make educational information easier to access through contextual retrieval and intelligent responses. The platform combines large language models, Retrieval-Augmented Generation (RAG), and vector search to retrieve relevant information from a knowledge base and generate context-aware answers.',
    howIBuiltThis: [
      'Designed a Retrieval-Augmented Generation workflow to connect language models with relevant academic information.',
      'Used vector search to retrieve contextually relevant information from a knowledge base.',
      'Integrated large language models to generate responses grounded in retrieved context.',
      'Focused on improving the relevance and usefulness of AI-generated academic answers.',
    ],
    features: [
      'AI-powered academic information retrieval',
      'Retrieval-Augmented Generation',
      'Semantic vector search',
      'Context-aware AI responses',
      'Knowledge-base-driven question answering',
    ],
    technologies: [
      'Python',
      'Large Language Models',
      'RAG',
      'Vector Search',
      'Machine Learning',
    ],
    imagePath: '',
    githubUrl: '',
    liveDemoUrl: '',
    featured: true,
    category: 'Generative AI',
    accentColor: 'mint',
  },

  {
    id: 'project-3',
    slug: 'voyage-visa-consultancy',
    title: 'VOYAGE — Smart Visa Consultancy',
    shortDescription:
      'A visa consultancy platform that simplifies country-specific visa requirements, documentation, and application guidance.',
    detailedDescription:
      'VOYAGE is a smart visa consultancy website designed to help travelers explore visa requirements for different countries. The platform organizes country-specific visa processes, required documentation, and application guidance through a responsive interface. Its architecture supports structured data management and modular backend services.',
    howIBuiltThis: [
      'Designed the application around country-specific visa information and consultation workflows.',
      'Planned a modular backend using Node.js and Express.js for API development.',
      'Structured relational data management using PostgreSQL and Prisma ORM.',
      'Focused on responsive layouts, clear navigation, and an intuitive user experience.',
    ],
    features: [
      'Country-specific visa information',
      'Visa application process guidance',
      'Required document information',
      'Responsive user interface',
      'Structured backend and database architecture',
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'REST APIs',
    ],
    imagePath: '',
    githubUrl: '',
    liveDemoUrl: '',
    featured: true,
    category: 'Full Stack',
    accentColor: 'yellow',
  },

  {
    id: 'project-4',
    slug: 'number-plate-detection',
    title: 'Automatic Number Plate Detection',
    shortDescription:
      'A Raspberry Pi-based number plate recognition system for automated parking and vehicle identification.',
    detailedDescription:
      'A hardware-integrated number plate detection project using Raspberry Pi Zero 2 W and Raspberry Pi Camera Module V2 NoIR. The system captures vehicle images and applies optical character recognition (OCR) to extract registration numbers, supporting automated parking management and vehicle tracking use cases.',
    howIBuiltThis: [
      'Configured Raspberry Pi Zero 2 W with a Raspberry Pi Camera Module V2 NoIR for image capture.',
      'Developed a workflow for capturing vehicle images for number plate recognition.',
      'Used OCR techniques to extract registration text from captured number plate images.',
      'Designed the system around potential integration with automated parking and vehicle tracking workflows.',
    ],
    features: [
      'Vehicle image capture',
      'Raspberry Pi camera integration',
      'Number plate text recognition using OCR',
      'Automated vehicle identification workflow',
      'Potential integration with parking management systems',
    ],
    technologies: [
      'Python',
      'Raspberry Pi Zero 2 W',
      'Raspberry Pi Camera Module V2 NoIR',
      'OCR',
      'Image Processing',
    ],
    imagePath: '',
    githubUrl: '',
    liveDemoUrl: '',
    featured: false,
    category: 'Computer Vision / IoT',
    accentColor: 'charcoal',
  },
];
