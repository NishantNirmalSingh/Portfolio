'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Users } from 'lucide-react'

interface ExperienceItem {
  type: 'internship' | 'club'
  title: string
  organization: string
  duration: string
  description: string[]
  icon: typeof Briefcase
}

const experiences: ExperienceItem[] = [
  {
    type: 'internship',
    title: 'Generative AI Intern',
    organization: 'In-house Campus Internship',
    duration: '2025 - 2026',
    description: [
      'Built a strong foundation in Python programming, prompt engineering, and Generative AI model workflows',
      'Worked with real-world datasets to perform data preprocessing, exploratory analysis, and feature preparation',
      'Applied machine learning algorithms to create practical AI-driven projects and prototypes',
      'Improved problem-solving and debugging skills through hands-on experimentation and iterative development',
    ],
    icon: Briefcase,
  },
  {
    type: 'club',
    title: 'Technical and PR Member',
    organization: 'Data Science Club of HIT (DSCH)',
    duration: '2026 - Present',
    description: [
      'Participated in 5+ technical workshops covering data analytics, Python programming, and data visualization',
      'Co-organized 3 technical events and knowledge-sharing sessions with 80+ student participants',
      'Collaborated on mini analytics projects involving data preprocessing, visualization, and insight presentation',
      'Engaged in peer learning sessions focused on AI/ML best practices and emerging technologies',
    ],
    icon: Users,
  },
]

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceItem
  index: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = experience.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-primary transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
          <p className="text-primary font-mono text-sm mb-1">
            {experience.organization}
          </p>
          <p className="text-gray-500 text-sm mb-4">{experience.duration}</p>
          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-primary"
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
