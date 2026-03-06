// Portfolio constants and data

export const PERSONAL_INFO = {
  name: 'Nishant Nirmal',
  title: 'AI & Data Science Engineer',
  email: 'nishant4245@gmail.com',
  phone: '+91-7909076369',
  github: 'https://github.com/NishantNirmalSingh',
  linkedin: 'https://linkedin.com/in/nishant-nirmal',
  university: 'Haldia Institute of Technology',
  degree: 'B.Tech in Computer Science Engineering (Data Science Specialization)',
  cgpa: '8.47',
  rank: 'Top 10%',
} as const

export const SOCIAL_LINKS = {
  github: PERSONAL_INFO.github,
  linkedin: PERSONAL_INFO.linkedin,
  email: `mailto:${PERSONAL_INFO.email}`,
  phone: `tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`,
} as const

export const NAVIGATION_ITEMS = [
  'About',
  'Projects',
  'Skills',
  'Experience',
  'Contact',
] as const

export const SEO_CONFIG = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description:
    'AI & Data Science Engineer specializing in Generative AI, Deep Learning, and NLP-based intelligent systems. Building scalable machine learning systems and intelligent AI-driven applications.',
  keywords: [
    'AI Engineer',
    'Data Science',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Generative AI',
    'LangChain',
    'TensorFlow',
  ],
} as const
