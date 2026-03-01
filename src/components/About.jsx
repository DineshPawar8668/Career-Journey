export function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building products that
              <br />
              scale &amp; perform
            </h2>
            <p className="about-text">
              I'm a MERN Stack Developer with 3+ years of hands-on experience
              building and deploying scalable web applications for real-world
              clients across e-commerce, healthcare, HR, and social platforms.
            </p>
            <p className="about-text">
              Currently at Maxdigi Solutions, Nashik, I architect full-stack
              solutions using React.js, TypeScript, Node.js, and AWS — with a
              strong focus on performance, code quality, and developer
              experience.
            </p>
            <p className="about-text">
              I thrive in fast-paced environments, have led small teams, and
              take pride in delivering end-to-end solutions from concept to
              production deployment.
            </p>
            <div className="about-highlights">
              {[
                { n: "3+", l: "Years in MERN" },
                { n: "10+", l: "Projects Shipped" },
                { n: "2", l: "Companies" },
                { n: "AWS", l: "Cloud Deploy" },
              ].map((h) => (
                <div className="highlight-card" key={h.l}>
                  <h4 className="accent">{h.n}</h4>
                  <p>{h.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay">
            <div className="code-card">
              <div className="code-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <pre className="code-body">
                <code>
                  {`const developer = {
  name: "Dinesh Pawar",
  role: "Senior MERN Dev",
  experience: "3+ years",
  stack: [
    "React", "Node.js",
    "TypeScript", "AWS"
  ],
  available: true,
  remote: true
}

developer.buildNextBigThing();`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
