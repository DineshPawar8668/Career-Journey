import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Message sent! I'll get back to you soon.");
    e.target.reset();
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <p className="section-label">Contact</p>
            <h2 className="section-title">
              Let's build something
              <br />
              <span className="accent">great together</span>
            </h2>
            <p className="contact-sub">
              Open for full-time remote roles, freelance projects, and
              interesting collaborations. Drop me a message — I respond within
              24 hours.
            </p>
            <div className="contact-links">
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  val: "dineshpawar8696@gmail.com",
                  href: "mailto:dineshpawar8696@gmail.com",
                },
                {
                  icon: "📱",
                  label: "Phone",
                  val: "+91 8668300404",
                  href: "tel:+918668300404",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  val: "https://www.linkedin.com/in/dinesh-pawar-9a785923b/",
                  href: "#",
                },
                {
                  icon: "🐙",
                  label: "GitHub",
                  val: "https://github.com/DineshPawar8668",
                  href: "",
                },
              ].map((l) => (
                <a
                  href={l.href}
                  className="contact-link"
                  key={l.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-icon">{l.icon}</div>
                  <div>
                    <p className="contact-link-label">{l.label}</p>
                    <p className="contact-link-val">{l.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  placeholder="Remote opportunity / Freelance"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project or role..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary submit-full">
                Send Message →
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}