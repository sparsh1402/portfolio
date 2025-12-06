/*
 * 🎓 REACT LESSON 5: Props
 * 
 * Props (properties) are how components talk to each other!
 * Parent components pass data DOWN to child components via props.
 * 
 * Think of props like function arguments - they're inputs to your component.
 */

import { useState, useEffect } from 'react'
import './Navbar.css'

// Props are received as an object parameter
function Navbar({ activeSection, setActiveSection }) {
  /*
   * 🎓 REACT LESSON 6: Multiple useState
   * 
   * You can have as many useState hooks as you need!
   * Each one manages a different piece of state.
   */
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  /*
   * 🎓 REACT LESSON 7: useEffect Hook
   * 
   * useEffect lets you perform "side effects" - things that happen
   * outside of rendering, like:
   * - Fetching data
   * - Setting up event listeners
   * - Updating the document title
   * 
   * The empty array [] means "run only once when component mounts"
   */
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, add background to navbar
      setIsScrolled(window.scrollY > 50)
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup function - runs when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty dependency array = run once on mount

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    // Smooth scroll to section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Dev</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {/*
           * 🎓 REACT LESSON 8: Rendering Lists with .map()
           * 
           * Use .map() to render arrays of data as components.
           * Each item needs a unique "key" prop so React can track changes.
           */}
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.id)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.id)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

