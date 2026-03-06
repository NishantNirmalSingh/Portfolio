// Type definitions for the portfolio

export interface Project {
  title: string
  subtitle: string
  description: string
  techStack: string[]
  githubUrl: string
  demoUrl?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ExperienceItem {
  type: 'internship' | 'club'
  title: string
  organization: string
  duration: string
  description: string[]
}

export interface ContactLink {
  name: string
  value: string
  href: string
  icon: any
}

export interface FormData {
  name: string
  email: string
  message: string
}
