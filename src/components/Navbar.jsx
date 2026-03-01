import { useEffect, useState } from "react";

export function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${dark ? "dark" : "light"}`}
    >
      <div className="nav-logo">
        D<span className="accent">.</span>Pawar
      </div>
      <ul className="nav-links">
        {["About", "Skills", "Projects", "Experience", "Contact"].map((s) => (
          <li key={s}>
            <a href={`#${s.toLowerCase()}`}>{s}</a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button className="theme-btn" onClick={() => setDark((d) => !d)}>
          {dark ? "☀️" : "🌙"}
        </button>
        <a href="mailto:dineshpawar8696@gmail.com" className="hire-btn">
          Hire Me
        </a>
      </div>
    </nav>
  );
}