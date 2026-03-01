import { MARQUEE, SKILLS } from "../rawdata";

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((sk, i) => (
            <div
              className="skill-card reveal"
              key={sk.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-icon">{sk.icon}</div>
              <h3 className="skill-title">{sk.title}</h3>
              <div className="skill-tags">
                {sk.tags.map((t) => (
                  <span className="skill-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="marquee-wrap reveal">
          <div className="marquee-track">
            {[<div ></div>, ...MARQUEE].map((item, i) => (
              <span className="marquee-item" key={i}>
                <span className="accent">◆</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}