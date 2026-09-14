import React, { useState } from "react";

const services = [
  {
    number: "01",
    icon: "✎",
    title: "Drawing Classes",
    text: "Build strong fundamentals in sketching, observation, shading and creative expression."
  },
  {
    number: "02",
    icon: "⌁",
    title: "Graphic Design",
    text: "Learn practical design thinking, visual composition, branding and digital creative skills."
  },
  {
    number: "03",
    icon: "</>",
    title: "Web Services",
    text: "Modern, responsive websites designed around your brand, business goals and audience."
  },
  {
    number: "04",
    icon: "✦",
    title: "Creative Solutions",
    text: "From concepts to campaigns, get creative support that turns ideas into visual experiences."
  }
];

const highlights = [
  "Practical & project-based learning",
  "Creative thinking + technical skills",
  "Personal guidance for every learner",
  "Design solutions for individuals & businesses"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="RJ Creative Hub home">
          <span className="brand-mark">RJ</span>
          <span className="brand-name">
            <strong>Creative</strong>
            <b>Hub</b>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Services", "#services"],
            ["Learning", "#learning"],
            ["Contact", "#contact"]
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get Started <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-art art-left" />
          <div className="hero-art art-right" />

          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Art Meets Digital</div>
              <h1>
                Create.<br />
                <span>Learn.</span> Grow.
              </h1>
              <p className="hero-lead">
                A creative space where <strong>art, design, learning and digital</strong> come together to turn ideas into possibilities.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#services">Explore Services <span>→</span></a>
                <a className="text-link" href="#about">Discover RJ Creative Hub <span>↗</span></a>
              </div>

              <div className="hero-meta">
                <div><strong>Art</strong><span>Express</span></div>
                <div><strong>Design</strong><span>Build</span></div>
                <div><strong>Digital</strong><span>Transform</span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="paint-card">
                <img src="/assets/rj-creative-hub-banner.png" alt="RJ Creative Hub art and design banner" />
              </div>
              <div className="floating-note note-one">IDEAS <span>+</span></div>
              <div className="floating-note note-two">CREATE <span>✦</span></div>
            </div>
          </div>

          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section id="about" className="about section">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <div>
              <p className="kicker">Where imagination becomes skill.</p>
              <h2>Creative minds.<br /><em>Brighter futures.</em></h2>
            </div>
            <div className="about-copy">
              <p>
                RJ Creative Hub is a creative learning and digital service space built for students, aspiring designers, creators and businesses.
              </p>
              <p>
                We combine traditional artistic thinking with modern digital skills — helping people learn, create and present ideas with confidence.
              </p>
              <a href="#contact" className="arrow-link">Let’s create something meaningful <span>→</span></a>
            </div>
          </div>

          <div className="highlight-grid">
            {highlights.map((item, index) => (
              <div className="highlight" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="services section">
          <div className="section-label light">02 / SERVICES</div>
          <div className="services-heading">
            <div>
              <p className="kicker light">What we do</p>
              <h2>One hub.<br /><span>Many possibilities.</span></h2>
            </div>
            <p className="services-intro">
              Learn a new skill, build your brand, launch your website or bring your next creative idea to life.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section id="learning" className="learning section">
          <div className="learning-visual">
            <div className="palette">
              <span className="dot blue" />
              <span className="dot orange" />
              <span className="dot red" />
              <span className="dot green" />
              <span className="dot purple" />
              <span className="dot white" />
              <i className="brush" />
            </div>
            <div className="mini-card">SKETCH<br /><b>DESIGN</b><br />CREATE<br /><span>GROW</span></div>
          </div>

          <div className="learning-copy">
            <div className="section-label">03 / LEARNING</div>
            <p className="kicker">Skills that stay with you.</p>
            <h2>From first sketch<br />to <em>digital creation.</em></h2>
            <p>
              Our approach keeps creativity at the centre while introducing practical tools, techniques and real-world projects.
            </p>
            <div className="steps">
              <div><span>01</span><p><b>Learn</b> — Understand the fundamentals.</p></div>
              <div><span>02</span><p><b>Practice</b> — Turn concepts into projects.</p></div>
              <div><span>03</span><p><b>Create</b> — Build work you are proud to show.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-paint" />
          <div className="contact-inner">
            <div className="section-label light">04 / CONTACT</div>
            <h2>Have an idea?<br /><span>Let’s create it.</span></h2>
            <p>Join a class, discuss a project or tell us what you want to build.</p>
            <div className="contact-actions">
              <a className="btn btn-orange" href="mailto:rjcreativehub@gmail.com">rjcreativehub@gmail.com <span>↗</span></a>
              <a className="btn btn-outline" href="tel:+919999999999">Call Us <span>→</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">RJ</span>
          <div><strong>Creative Hub</strong><small>ART • DESIGN • LEARN • CREATE • DIGITAL</small></div>
        </div>
        <p>© {new Date().getFullYear()} RJ Creative Hub. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Instagram</a>
          <a href="#home">Facebook</a>
          <a href="#home">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;