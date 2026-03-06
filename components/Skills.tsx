'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    category: 'AI/ML',
    skills: ['Generative AI', 'RAG', 'NLP', 'Deep Learning', 'ANN', 'RNN', 'Prompt Engineering'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['LangChain', 'TensorFlow', 'FAISS', 'Pandas', 'NumPy'],
  },
  {
    category: 'Databases & Web',
    skills: ['PostgreSQL', 'Supabase', 'Firebase', 'React', 'Streamlit', 'Gradio'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
]

const SkillCategory = ({
  category,
  index,
}: {
  category: SkillCategory
  index: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-dark-800 border border-dark-600 rounded-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-dark-700 text-gray-300 rounded-md text-sm font-mono hover:bg-dark-600 hover:text-primary transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-primary"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
