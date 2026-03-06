'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const Overview = () => {
  const highlights = [
    'Motivated Computer Science student specializing in Data Science with strong interests in Generative AI, Machine Learning, and intelligent software systems.',
    'Experienced in building AI-powered applications using Python, TensorFlow, LangChain, and Streamlit with hands-on deep learning and NLP solutions.',
    'Specialized in Retrieval-Augmented Generation (RAG) systems, vector search technologies (FAISS), and semantic knowledge retrieval architectures.',
    'Built production-ready full-stack AI applications with role-based dashboards, automated workflows, and intelligent recommendation systems.',
    'Strong foundation in prompt engineering, embedding-based search, and LLM orchestration for building scalable AI-driven solutions.',
    'Passionate about solving real-world problems through data-driven insights while continuously exploring emerging AI and ML technologies.',
  ]

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-dark-800 border border-dark-600 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-primary">Overview</h2>
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Overview
