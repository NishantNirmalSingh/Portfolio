'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Phone } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactLinks = [
    {
      name: 'Email',
      value: 'nishant4245@gmail.com',
      href: 'mailto:nishant4245@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      value: 'NishantNirmalSingh',
      href: 'https://github.com/NishantNirmalSingh',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      value: 'nishant-nirmal',
      href: 'https://linkedin.com/in/nishant-nirmal',
      icon: Linkedin,
    },
    {
      name: 'Phone',
      value: '+91-7909076369',
      href: 'tel:+917909076369',
      icon: Phone,
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-primary"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I&apos;m always open to discussing new opportunities, collaborations, or
              interesting projects. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined}
                    rel={link.name !== 'Email' && link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-dark-800 border border-dark-600 rounded-lg hover:border-primary transition-all duration-200 group"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{link.name}</p>
                      <p className="text-gray-300 font-mono text-sm">{link.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-dark-900 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-dark-600 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2026 Nishant Nirmal. Built with Next.js, TypeScript, and TailwindCSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
