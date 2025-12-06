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

import { useState } from 'react'
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

