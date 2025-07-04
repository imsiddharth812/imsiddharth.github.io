import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Shield, Cpu, Globe, Settings, CheckCircle } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('testing')

  const categories = [
    { id: 'testing', name: 'Testing', icon: CheckCircle },
    { id: 'automation', name: 'Automation', icon: Code },
    { id: 'tools', name: 'Tools', icon: Settings },
    { id: 'technical', name: 'Technical', icon: Cpu },
  ]

  const skillsData = {
    testing: [
      { name: 'Manual Testing', level: 95, color: 'from-blue-500 to-blue-600' },
      { name: 'Test Planning', level: 90, color: 'from-green-500 to-green-600' },
      { name: 'API Testing', level: 88, color: 'from-purple-500 to-purple-600' },
      { name: 'Performance Testing', level: 85, color: 'from-yellow-500 to-yellow-600' },
      { name: 'Security Testing', level: 80, color: 'from-red-500 to-red-600' },
      { name: 'Mobile Testing', level: 82, color: 'from-pink-500 to-pink-600' },
    ],
    automation: [
      { name: 'Selenium WebDriver', level: 92, color: 'from-green-500 to-green-600' },
      { name: 'Cypress', level: 88, color: 'from-blue-500 to-blue-600' },
      { name: 'TestNG/JUnit', level: 85, color: 'from-orange-500 to-orange-600' },
      { name: 'RestAssured', level: 87, color: 'from-purple-500 to-purple-600' },
      { name: 'Playwright', level: 80, color: 'from-indigo-500 to-indigo-600' },
      { name: 'Appium', level: 75, color: 'from-teal-500 to-teal-600' },
    ],
    tools: [
      { name: 'Jira', level: 95, color: 'from-blue-500 to-blue-600' },
      { name: 'Jenkins', level: 88, color: 'from-gray-500 to-gray-600' },
      { name: 'Git/GitHub', level: 90, color: 'from-green-500 to-green-600' },
      { name: 'Docker', level: 82, color: 'from-blue-400 to-blue-500' },
      { name: 'Postman', level: 93, color: 'from-orange-500 to-orange-600' },
      { name: 'TestRail', level: 85, color: 'from-purple-500 to-purple-600' },
    ],
    technical: [
      { name: 'Java', level: 88, color: 'from-red-500 to-red-600' },
      { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-600' },
      { name: 'JavaScript', level: 83, color: 'from-yellow-400 to-yellow-500' },
      { name: 'SQL', level: 90, color: 'from-blue-500 to-blue-600' },
      { name: 'HTML/CSS', level: 80, color: 'from-orange-500 to-orange-600' },
      { name: 'REST APIs', level: 92, color: 'from-green-500 to-green-600' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 }
    })
  }

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning testing methodologies, automation frameworks, 
            and cutting-edge QA technologies.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'glass-effect text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory}
        >
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-effect rounded-2xl p-6 card-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-primary-400 font-bold">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    variants={progressVariants}
                    custom={skill.level}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ISTQB Foundation Level",
                description: "Certified Software Tester",
                icon: Shield,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Selenium Expert",
                description: "Advanced Automation Testing",
                icon: Code,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Agile Testing",
                description: "Scrum & Kanban Methodologies",
                icon: Globe,
                color: "from-purple-500 to-purple-600"
              }
            ].map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <motion.div
                  key={cert.title}
                  className="glass-effect rounded-2xl p-6 text-center card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 gradient-text">{cert.title}</h4>
                  <p className="text-white/70">{cert.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills