import { useRef, useState } from "react";
import { PROJECTS } from "../constants";

export function Projects() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  // update dot on scroll
  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 0;
    const gap = 24;
    const idx = Math.round(el.scrollLeft / (cardWidth + gap));
    setActive(Math.min(idx, PROJECTS.length - 1));
  };

  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth || 0;
    const gap = 24;
    el.scrollTo({ left: idx * (cardWidth + gap), behavior: "smooth" });
    setActive(idx);
  };

  const prev = () => scrollTo(Math.max(active - 1, 0));
  const next = () => scrollTo(Math.min(active + 1, PROJECTS.length - 1));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header row with arrows */}
        <div className="proj-header reveal">
          <div>
            <p className="section-label">Projects</p>
            <h2 className="section-title">
              Things I've built that <span className="accent">matter</span>
            </h2>
          </div>
          <div className="proj-arrows">
            <button
              className={`proj-arrow ${active === 0 ? "disabled" : ""}`}
              onClick={prev}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className={`proj-arrow ${active === PROJECTS.length - 1 ? "disabled" : ""}`}
              onClick={next}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div className="proj-scroll-track" ref={scrollRef} onScroll={onScroll}>
          {PROJECTS.map((p, i) => (
            <div className="project-card proj-scroll-card" key={p.name}>
              <div className="project-thumb" style={{ background: p.gradient }}>
                <span className="thumb-icon">{p.icon}</span>
                <span className="thumb-name">{p.name}</span>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={p.live} className="proj-btn proj-btn-primary">
                    Live Demo ↗
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn-outline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="proj-dots">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`proj-dot ${i === active ? "active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}