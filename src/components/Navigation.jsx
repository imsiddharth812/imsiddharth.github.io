import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect' : 'bg-transparent'
        } rounded-full px-8 py-4 hidden md:block`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex space-x-8">
          {navItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <IconComponent className="w-4 h-4 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm font-medium">{item.name}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass-effect flex items-center justify-center transition-all duration-300`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                className="fixed top-20 right-6 glass-effect rounded-2xl p-6 z-50 min-w-[200px]"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-4">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 w-full text-left group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <IconComponent className="w-5 h-5 group-hover:text-primary-400 transition-colors" />
                        <span className="font-medium">{item.name}</span>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navigation