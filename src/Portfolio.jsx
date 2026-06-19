import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    { 
      id: 1, 
      title: 'AstroBio-Explorer', 
      tech: 'HTML, CSS, JS',
      description: 'A web application integrating a NASA database to explore complex data interactively.' 
    },
    { 
      id: 2, 
      title: 'Fire Store', 
      tech: 'React',
      description: 'A dynamic, front-end online shopping experience focusing on state management and UI.' 
    },
  ];

  const skills = [
    'React.js', 'JavaScript', 'HTML/CSS', 'Cyber Forensics', 'Linux (Zorin/Kali)', 'OSINT', 'SQL','PowerShell','BASH','Python'
  ];

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-content">
        <header className="header-container">
            <div className="header-text-block">
                <h1 className="name">Aby Alex Jays</h1>
                <p className="subtitle">Cyber Forensics student & pentester</p>
                <p className="tagline">Bridging the gap between secure systems and dynamic user interfaces.</p>
            </div>
        </header>

        <section className="tech-section">
          <h3 className="section-title">Technical Arsenal</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>


        <section className="projects-section">
          <h3 className="section-title">Featured Builds</h3>
          <div className="cards-grid">
            {projects.map((project) => (
              <div key={project.id} className="tech-card">
                <div className="card-header">
                  <h4>{project.title}</h4>
                  <span className="tech-label">{project.tech}</span>
                </div>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="tech-footer">
          <div className="social-links">
            <a href="mailto:abyjays1231@gmail.com" className="glow-link">Email</a>
            <a href="https://github.com/abyjays" target="_blank" rel="noopener noreferrer" className="glow-link">GitHub</a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;