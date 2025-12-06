/*
 * 🎓 REACT LESSON 16: Form Handling
 * 
 * Forms in React work differently than regular HTML:
 * - Use controlled components (state controls the input value)
 * - Handle onChange to update state
 * - Handle onSubmit to process the form
 */

import { useState } from 'react'
import './Contact.css'

function Contact() {
  /*
   * 🎓 REACT LESSON 17: Object State
   * 
   * You can store objects in state! This is useful for
   * grouping related data like form fields together.
   */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  /*
   * 🎓 REACT LESSON 18: Handling Multiple Inputs
   * 
   * Instead of creating separate handlers for each input,
   * we use one handler that reads the input's "name" attribute
   * to know which field to update.
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,      // Keep all existing fields
      [name]: value // Update only the changed field
    }))
  }

  /*
   * 🎓 REACT LESSON 19: API Calls with fetch()
   * 
   * We use the fetch() API to send data to external services.
   * Web3Forms is a free service that sends form data to your email.
   */
  const WEB3FORMS_ACCESS_KEY = '2a413337-40d1-40e1-8349-1b397504c446'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact from Portfolio',
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'sparsh1246@gmail.com',
      href: 'mailto:sparsh1246@gmail.com',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: null,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sparsh-agarwal',
      href: 'https://linkedin.com/in/sparsh-agarwal',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <p className="contact-intro">
          I'm currently available for freelance work and full-time positions.
          If you have a project that you want to get started, think you need 
          my help with something, or just want to say hello, feel free to reach out!
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an email directly or connect 
              with me on social media. I'll get back to you as soon as possible!
            </p>

            <div className="info-cards">
              {contactInfo.map((info) => (
                <div key={info.label} className="info-card">
                  <span className="info-icon">{info.icon}</span>
                  <div>
                    <span className="info-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="info-value">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <a href="https://github.com/sparsh1402" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/sparsh-agarwal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="form-status success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-status error">
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            Designed & Built with <span className="heart">❤️</span> using React
          </p>
          <p className="copyright">© {new Date().getFullYear()} Sparsh Agarwal. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact

