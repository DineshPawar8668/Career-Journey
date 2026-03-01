import { EXPERIENCE } from './../constants';

export function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div
              className="timeline-item reveal"
              key={exp.company}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-left">
                <p className="exp-period accent">{exp.period}</p>
                <p className="exp-company">{exp.company}</p>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-right">
                <h3 className="exp-role">{exp.role}</h3>
                <ul className="exp-points">
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}