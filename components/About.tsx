'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-primary">About</h2>
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a motivated Computer Science Engineering student specializing in Data Science 
              with strong interests in Generative AI, Machine Learning, and intelligent software 
              systems. Currently pursuing B.Tech at Haldia Institute of Technology, I have 
              hands-on experience building AI-powered applications using Python, TensorFlow, 
              LangChain, and Streamlit. I specialize in creating deep learning and NLP solutions, 
              with expertise in Retrieval-Augmented Generation (RAG) systems and vector search 
              technologies. I'm passionate about solving real-world problems through data-driven 
              insights and scalable AI systems while continuously exploring emerging technologies 
              in artificial intelligence and machine learning.
            </p>
            <div className="mt-6 pt-6 border-t border-dark-600">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">RAG</p>
                  <p className="text-sm text-gray-500 mt-1">Specialist</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">3+</p>
                  <p className="text-sm text-gray-500 mt-1">AI Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">Full Stack</p>
                  <p className="text-sm text-gray-500 mt-1">Developer</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">B.Tech</p>
                  <p className="text-sm text-gray-500 mt-1">CS (DS)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
