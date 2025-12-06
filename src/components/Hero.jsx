/*
 * 🎓 REACT LESSON 9: Component Structure
 * 
 * A well-organized component typically has:
 * 1. Imports at the top
 * 2. The function component
 * 3. JSX return statement
 * 4. Export at the bottom
 */

import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
  // State for the typing animation
  const [displayedText, setDisplayedText] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Software Developer',
    'Java & Spring Boot Expert',
    'Backend Engineer',
    'Problem Solver',
  ]

  /*
   * 🎓 REACT LESSON 10: Complex useEffect
   * 
   * This useEffect creates a typing animation effect.
   * The dependency array [displayedText, currentRoleIndex, isDeleting]
   * means this effect runs whenever any of these values change.
   */
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, currentRoleIndex, isDeleting])

  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="code-bg">
          <pre>{`const developer = {
  name: "Sparsh Agarwal",
  passion: "Building scalable systems",
  skills: ["Java", "Spring Boot", "Microservices"],
  experience: "2+ years",
  available: true
};`}</pre>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">
          <span className="wave">👋</span> Hello, I'm
        </p>
        
        <h1 className="hero-name">
          <span className="text-gradient">Sparsh Agarwal</span>
        </h1>
        
        <div className="hero-role">
          <span className="role-prefix">I'm a </span>
          <span className="role-text">{displayedText}</span>
          <span className="cursor">|</span>
        </div>
        
        <p className="hero-description">
          A motivated Software Engineer with 2+ years of experience in Java, Spring Boot, 
          REST APIs, and microservices. Building scalable backend solutions serving 11M+ users.
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <span className="btn-arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/sparsh1402" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/sparsh-agarwal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="mailto:sparsh1246@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

