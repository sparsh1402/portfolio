/*
 * 🎓 REACT LESSON 12: Data-Driven Components
 * 
 * Instead of hardcoding UI elements, we can define our data
 * as arrays/objects and map over them. This makes components:
 * - Easier to maintain
 * - Easier to update
 * - More reusable
 */

import './Skills.css'

function Skills() {
  // Define skills data - easy to update!
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 75 },
        { name: 'GoLang', level: 65 },
        { name: 'JavaScript', level: 70 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Frameworks',
      icon: '⚙️',
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Spring Framework', level: 90 },
        { name: 'Microservices', level: 88 },
        { name: 'REST APIs', level: 92 },
        { name: 'Spring Integration', level: 80 },
      ],
    },
    {
      title: 'Database & Cache',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'AWS ElastiCache', level: 78 },
        { name: 'Couchbase', level: 70 },
        { name: 'Kafka', level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'Jenkins/CI-CD', level: 80 },
        { name: 'Git', level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>

        <p className="skills-intro">
          I've worked with a variety of technologies in the web development world.
          Here's an overview of my technical toolkit:
        </p>

        <div className="skills-grid">
          {/*
           * 🎓 REACT LESSON 13: Nested .map()
           * 
           * You can nest .map() calls to render nested data structures.
           * Just make sure each level has its own unique key!
           */}
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="skill-card"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ '--progress': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons */}
        <div className="tech-icons">
          <div className="tech-track">
            {['☕ Java', '🍃 Spring Boot', '🔗 Microservices', '🐍 Python', 
              '🐹 GoLang', '🗃️ MySQL', '⚡ Redis', '🐳 Docker',
              '☸️ Kubernetes', '☁️ AWS', '📨 Kafka', '🔧 Jenkins'].map((tech) => (
              <span key={tech} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

