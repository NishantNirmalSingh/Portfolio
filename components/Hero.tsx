'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            Nishant <span className="text-primary">Nirmal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            AI & Data Science Engineer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building intelligent AI systems with RAG, vector search, and full-stack development.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-dark-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-200 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-dark-900 transition-all duration-200 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/NishantNirmalSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nishant-nirmal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
