/*
 * 🎓 REACT LESSON 11: Simple Components
 * 
 * Not every component needs state! Simple components that
 * just display content are called "presentational" components.
 * They're easier to test and understand.
 */

import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              {/* You can replace this with your actual photo */}
              <div className="placeholder-avatar">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="experience-badge">
              <span className="exp-number">2+</span>
              <span className="exp-text">Years Experience</span>
            </div>
          </div>

          <div className="about-text">
            <p className="about-intro">
              Hi! I'm Sparsh Agarwal, a Software Developer at Amdocs with a passion for 
              building scalable backend solutions. I graduated from Thapar Institute of 
              Engineering and Technology with a B.E. in Electronics and Computer Engineering 
              (CGPA: 8.68/10).
            </p>

            <p>
              Currently, I build and maintain backend solutions using Java and Spring Boot, 
              supporting over 11M+ users with 99.9% system uptime. I've worked on payment 
              system migrations, GenAI-driven testing tools, and cloud-ready caching solutions 
              with AWS ElastiCache.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Problem Solver</h4>
                  <p>400+ coding problems solved on LeetCode & GFG, 3-star on CodeChef</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <div>
                  <h4>Backend Expert</h4>
                  <p>Specialized in Java, Spring Boot, Microservices & REST APIs</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <div>
                  <h4>Team Player</h4>
                  <p>Experienced in cross-functional Agile teams, mentored peers in DSA</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              {/* <div className="stat">
                <span className="stat-number">11M+</span>
                <span className="stat-label">Users Supported</span>
              </div> */}
              <div className="stat">
                <span className="stat-number">400+</span>
                <span className="stat-label">Problems Solved</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">System Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

