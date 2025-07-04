import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:qaengineer@example.com', label: 'Email' }
  ]

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/60 text-sm flex items-center justify-center space-x-2">
              <span>© {currentYear} QA Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by a passionate QA Engineer</span>
            </p>
            <p className="text-white/40 text-xs">
              Designed for excellence, built for quality
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer