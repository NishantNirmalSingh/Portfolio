'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/80 backdrop-blur-xl border-b border-dark-600' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">
          NN
        </a>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
