/*
 * 🎓 REACT LESSON 14: Conditional Rendering
 * 
 * React lets you conditionally render content using:
 * - Ternary operator: condition ? ifTrue : ifFalse
 * - Logical AND: condition && element
 * - if/else statements before the return
 */

import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Vehicle Rental System',
      description: 'Built backend solutions in Java and Spring Boot serving 11M+ users with 99.9% uptime. Enhanced UI with React.js improving load speed by 35%. Integrated Kafka for real-time event streaming.',
      image: '🚗',
      category: 'fullstack',
      tags: ['Java', 'Spring Boot', 'React.js', 'Kafka'],
      github: 'https://github.com/sparsh1402',
      live: null,
    },
    {
      id: 2,
      title: 'MMT - Multi-Modal Travel Planner',
      description: 'Travel planner using Spring Boot, Java, and MySQL to find cheapest and fastest routes. Implemented Dijkstra\'s algorithm for route optimization with multi-mode transport support.',
      image: '✈️',
      category: 'fullstack',
      tags: ['Spring Boot', 'Java', 'MySQL', 'Algorithms'],
      github: 'https://github.com/sparsh1402',
      live: null,
    },
    {
      id: 3,
      title: 'GenAI API Testing Assistant',
      description: 'Developed GenAI-driven API Testing Assistant using Spring Boot, LangChain, and Ollama. Automates API request generation, execution, and Jira insight retrieval.',
      image: '🤖',
      category: 'backend',
      tags: ['Spring Boot', 'LangChain', 'Ollama', 'GenAI'],
      github: 'https://github.com/sparsh1402',
      live: null,
    },
    // {
    //   id: 4,
    //   title: 'Payment System Migration',
    //   description: 'Migrated payment processing system from Bamboora to CyberSource, increasing payment throughput by 20% while reducing operational risks for enterprise users.',
    //   image: '💳',
    //   category: 'backend',
    //   tags: ['Java', 'CyberSource', 'Spring Boot', 'APIs'],
    //   github: 'https://github.com/sparsh1402',
    //   live: null,
    // },
    // {
    //   id: 5,
    //   title: 'Redis Cache Migration',
    //   description: 'Independently developed cloud-ready solution migrating caching from Couchbase to Redis (AWS ElastiCache), reducing cache latency by 40% for 11M+ users.',
    //   image: '⚡',
    //   category: 'backend',
    //   tags: ['Java 8', 'Redis', 'AWS ElastiCache', 'Couchbase'],
    //   github: 'https://github.com/sparsh1402',
    //   live: null,
    // },
    // {
    //   id: 6,
    //   title: 'Auth & Booking System',
    //   description: 'Built authentication, booking, and contact modules with Spring Boot & MySQL for secure workflows. Integrated REST APIs for seamless client-server communication.',
    //   image: '🔐',
    //   category: 'backend',
    //   tags: ['Spring Boot', 'MySQL', 'REST APIs', 'Security'],
    //   github: 'https://github.com/sparsh1402',
    //   live: null,
    // },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ]

  /*
   * 🎓 REACT LESSON 15: Filtering Data
   * 
   * We filter the projects array based on the selected category.
   * This is done on every render - React is smart enough to handle this efficiently!
   */
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View GitHub"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    {/* Conditional rendering: only show live link if available */}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Live"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <a 
            href="https://github.com/sparsh1402" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            See More on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

