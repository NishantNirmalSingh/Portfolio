'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  subtitle: string
  description: string
  techStack: string[]
  githubUrl: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: 'AI-Powered Library Management System',
    subtitle: 'RAG, Vector Search, Full Stack Application',
    description:
      'Built a full-stack AI-enabled library platform with role-based dashboards and modules for catalog management, borrowing workflows, payments, and analytics. Integrated semantic book discovery using Gemini embeddings and vector similarity search, enabling natural language queries across library datasets. Architected a Retrieval-Augmented Generation (RAG) pipeline to power AI book recommendations and contextual search responses. Created AI reading roadmap generation and personalized recommendations using user behavior embeddings.',
    techStack: ['Python', 'React', 'RAG', 'Gemini', 'Vector Search', 'PostgreSQL', 'Full Stack'],
    githubUrl: 'https://github.com/NishantNirmalSingh',
  },
  {
    title: 'Raji AI Support Assistant',
    subtitle: 'LLMs, RAG, FAISS Vector Search',
    description:
      'Built an AI-powered customer support assistant for the game "Raji: An Ancient Epic". Applied Retrieval-Augmented Generation using FAISS vector search and sentence-transformer embeddings for semantic knowledge retrieval. Constructed an automated ticketing system that classifies issues by category and priority while extracting device information. Engineered an AI Copilot module that detects similar historical issues using embedding similarity and generates solution suggestions.',
    techStack: ['Python', 'LangChain', 'FAISS', 'RAG', 'Sentence Transformers', 'LLMs'],
    githubUrl: 'https://github.com/NishantNirmalSingh',
  },
  {
    title: 'Language Detection System',
    subtitle: 'Deep Learning-Based NLP Classification Model',
    description:
      'Built a multilingual language classification system using an RNN model trained on labeled text data. Developed text preprocessing, tokenization, padding, and a confidence-based prediction pipeline. Deployed the model using Streamlit for real-time inference and visualization.',
    techStack: ['Python', 'TensorFlow', 'RNN', 'NLP', 'Streamlit'],
    githubUrl: 'https://github.com/NishantNirmalSingh',
  },
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-primary transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-primary font-mono">{project.subtitle}</p>
        </div>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono bg-dark-700 text-primary border border-dark-600 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-primary"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
