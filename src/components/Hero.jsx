import { CountUp } from "../Modules/CountUp";


export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner container">
        {/* Left Content */}
        <div className="hero-left fade-up">
          <div className="available-badge">
            <span className="green-dot"></span>
            Available for remote opportunities
          </div>

          <h1 className="hero-title">
            Dinesh 
            <br />
            <span className="accent">Pawar</span>
          </h1>

          <p className="hero-sub">Senior MERN Stack Developer</p>

         <p className="hero-tagline">
  Full-stack engineer with 3+ years of experience building scalable 
  React & Node.js applications powered by TypeScript and AWS. 
  Specialized in designing robust backend architectures, developing 
  performant frontend systems, integrating third-party services, 
  and delivering production-ready solutions from concept to deployment.
</p>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects ↗
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me →
            </a>
          </div>
          

        
        </div>

        {/* Right Card */}
        <div className="hero-right fade-up-delay">
          {/* <div className="hero-blob"></div> */}
          <div className="profile-card">
            <div className="card-glow"></div>
            <div className="avatar-initials">DP</div>
            <h3 className="card-name">Dinesh Pawar</h3>
            <p className="card-role">Senior MERN Stack Developer</p>
            <div className="card-tags">
              {["React", "Node.js", "TypeScript", "AWS"].map((t) => (
                <span className="card-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p className="card-location">📍 Nashik, Maharashtra</p>

            <div className="floating-chip chip-top">⚡ 3+ yrs exp</div>
            <div className="floating-chip chip-bottom">🟢 Open to work</div>
          </div>
        </div>
      </div>
        <div className="hero-stats">
            <div className="stat-item">
              <h3 className="accent">
                <CountUp target={3} suffix="+" />
              </h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="accent">
                <CountUp target={10} suffix="+" />
              </h3>
              <p>Projects Shipped</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="accent">
                <CountUp target={2} />
              </h3>
              <p>Companies</p>
            </div>
          </div>
    </section>
  );
}