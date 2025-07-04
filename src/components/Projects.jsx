import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, CheckCircle, Clock, Users, Star } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'automation', name: 'Test Automation' },
    { id: 'framework', name: 'Frameworks' },
    { id: 'api', name: 'API Testing' },
    { id: 'performance', name: 'Performance' }
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Test Automation Suite",
      description: "Comprehensive test automation framework for a major e-commerce platform with 100+ test scenarios covering end-to-end user journeys.",
      category: "automation",
      image: "🛍️",
      technologies: ["Selenium", "TestNG", "Maven", "Jenkins", "Allure"],
      features: [
        "Page Object Model implementation",
        "Data-driven testing with Excel/CSV",
        "Cross-browser testing support",
        "CI/CD integration with Jenkins",
        "Detailed reporting with Allure"
      ],
      metrics: {
        testCases: "150+",
        coverage: "95%",
        reduction: "70%"
      },
      status: "completed",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "API Testing Framework",
      description: "Robust REST API testing framework built with RestAssured, featuring automated test data generation and comprehensive validation.",
      category: "api",
      image: "🔌",
      technologies: ["RestAssured", "Java", "TestNG", "Jackson", "Hamcrest"],
      features: [
        "Automated request/response validation",
        "Dynamic test data generation",
        "Authentication token management",
        "Response time monitoring",
        "Negative testing scenarios"
      ],
      metrics: {
        endpoints: "50+",
        coverage: "100%",
        response: "<200ms"
      },
      status: "completed",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Performance Testing Dashboard",
      description: "Real-time performance monitoring dashboard for tracking application metrics and identifying bottlenecks.",
      category: "performance",
      image: "📊",
      technologies: ["JMeter", "Grafana", "InfluxDB", "Python", "Docker"],
      features: [
        "Real-time metrics visualization",
        "Load testing scenario management",
        "Automated alert system",
        "Historical data analysis",
        "Performance benchmarking"
      ],
      metrics: {
        users: "10,000",
        monitoring: "24/7",
        accuracy: "99.9%"
      },
      status: "in-progress",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Mobile App Testing Suite",
      description: "Cross-platform mobile testing solution supporting iOS and Android with device farm integration.",
      category: "automation",
      image: "📱",
      technologies: ["Appium", "XCUITest", "Espresso", "AWS Device Farm"],
      features: [
        "Cross-platform compatibility",
        "Real device testing",
        "Gesture automation",
        "Network condition testing",
        "Screenshot comparison"
      ],
      metrics: {
        devices: "25+",
        platforms: "2",
        scenarios: "80+"
      },
      status: "completed",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Custom Testing Framework",
      description: "Proprietary testing framework designed for microservices architecture with distributed testing capabilities.",
      category: "framework",
      image: "🏗️",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "Redis"],
      features: [
        "Microservices testing support",
        "Distributed test execution",
        "Service mesh integration",
        "Containerized test environments",
        "Scalable architecture"
      ],
      metrics: {
        services: "15+",
        scalability: "10x",
        efficiency: "85%"
      },
      status: "completed",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Security Testing Toolkit",
      description: "Comprehensive security testing toolkit for web applications including OWASP Top 10 vulnerability scanning.",
      category: "automation",
      image: "🔒",
      technologies: ["OWASP ZAP", "Burp Suite", "Python", "Selenium", "Docker"],
      features: [
        "Automated vulnerability scanning",
        "OWASP Top 10 coverage",
        "SQL injection testing",
        "XSS vulnerability detection",
        "Security report generation"
      ],
      metrics: {
        vulnerabilities: "50+",
        coverage: "OWASP 10",
        accuracy: "98%"
      },
      status: "in-progress",
      github: "#",
      demo: "#"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A showcase of testing frameworks, automation suites, and tools that have 
            driven quality excellence across various domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'glass-effect text-white/70 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                className="glass-effect rounded-3xl overflow-hidden card-hover group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold gradient-text">{value}</div>
                        <div className="text-xs text-white/60 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Features Preview */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10 pt-4 mt-4"
                      >
                        <h4 className="text-sm font-semibold mb-2 text-white">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2 text-xs text-white/70">
                              <CheckCircle className="w-3 h-3 text-primary-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Interested in My Work?</h3>
            <p className="text-white/70 mb-6">
              These projects represent my passion for quality and innovation in testing. 
              Let's discuss how I can bring this expertise to your team.
            </p>
            <motion.button
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Let's Talk</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects