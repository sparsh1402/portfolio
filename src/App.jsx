/*
 * 🎓 REACT LESSON 2: Components
 * 
 * A Component is like a LEGO brick - a reusable piece of UI.
 * This App component is the "main" component that holds everything.
 * 
 * Key concepts:
 * - Components are JavaScript functions that return JSX (HTML-like syntax)
 * - Component names MUST start with a capital letter (App, not app)
 * - You can nest components inside other components
 */

import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  /*
   * 🎓 REACT LESSON 3: useState Hook
   * 
   * useState lets your component "remember" things.
   * When the state changes, React automatically re-renders the component!
   * 
   * const [value, setValue] = useState(initialValue)
   *   - value: the current state
   *   - setValue: function to update the state
   *   - initialValue: what the state starts as
   */
  const [activeSection, setActiveSection] = useState('home')

  // Scroll spy: update activeSection based on which page section is visible
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      // Trigger when 50% of the section is visible
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      // Find the entry that's intersecting and has the largest intersectionRatio
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible && visible.target && visible.target.id) {
        setActiveSection(visible.target.id)
      }
    }, observerOptions)

    sections.forEach((sec) => observer.observe(sec))

    return () => {
      sections.forEach((sec) => observer.unobserve(sec))
      observer.disconnect()
    }
  }, [setActiveSection])

  return (
    /*
     * 🎓 REACT LESSON 4: JSX
     * 
     * JSX looks like HTML but it's actually JavaScript!
     * Key differences:
     * - Use className instead of class
     * - Use camelCase for attributes (onClick, not onclick)
     * - You can embed JavaScript using {curly braces}
     */
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

// Export the component so other files can import it
export default App

