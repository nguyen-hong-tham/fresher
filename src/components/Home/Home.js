import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const CodeWorkspaceMockup = () => {
  return (
    <div className="code-workspace-mockup">
      <div className="workspace-header">
        <div className="window-controls">
          <span className="control-dot close"></span>
          <span className="control-dot minimize"></span>
          <span className="control-dot expand"></span>
        </div>
        <div className="window-title">tham-portfolio &mdash; currently-building.ts</div>
      </div>
      <div className="workspace-body">
        <div className="file-sidebar">
          <div className="sidebar-title">EXPLORER</div>
          <ul className="file-tree">
            <li className="folder-item">src</li>
            <li className="file-item active">currently-building.ts</li>
            <li className="folder-item">projects</li>
            <li className="file-item indent">MAYCoffee.ts</li>
            <li className="file-item indent">FoodFast.ts</li>
            <li className="file-item indent">Vinabook.ts</li>
          </ul>
        </div>
        <div className="code-editor">
          <pre className="code-content">
            <code>
              <span className="comment">{"// currently-building.ts"}</span><br /><br />
              <span className="keyword">export const</span> <span className="variable">projects</span> = {"{"}<br />
              {"  "}MAYCoffee:<br />
              {"    "}<span className="string">"Milk tea commerce platform"</span>,<br /><br />
              {"  "}FoodFast:<br />
              {"    "}<span className="string">"Multi-role ordering system"</span>,<br /><br />
              {"  "}Vinabook:<br />
              {"    "}<span className="string">"Fullstack bookstore platform"</span><br />
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize: "2.8em" }} className="heading">
                Hello, I'm <strong className="highlight-primary">Nguyễn Hồng Thắm</strong>
              </h1>

              <h2 className="heading-sub" style={{ paddingLeft: 50, textAlign: "left", fontSize: "1.8rem", color: "var(--text-secondary)", fontWeight: "500" }}>
                Final-Year IT Student
              </h2>
              <p style={{ paddingLeft: 50, textAlign: "left", fontSize: "1.2rem", color: "var(--text-primary)", fontWeight: "500", marginTop: "5px" }}>
                focused on Fullstack Web Development.
              </p>
              <p style={{ paddingLeft: 50, textAlign: "left", fontSize: "1.1rem", color: "var(--text-secondary)", marginTop: "10px", marginBottom: "15px", lineHeight: "1.6" }}>
                Currently building web applications with React, Next.js, NestJS, and PostgreSQL.
              </p>
              
              <div style={{ paddingLeft: 50, textAlign: "left", marginBottom: "20px" }}>
                <span className="status-badge live" style={{ display: "inline-block", padding: "6px 12px", fontSize: "0.85rem" }}>
                  Open to Web Development Internship opportunities.
                </span>
              </div>

              <div className="coding-badge-list" style={{ paddingLeft: 50, marginBottom: "30px" }}>
                <span className="coding-badge-item">React</span>
                <span className="coding-badge-item">Next.js</span>
                <span className="coding-badge-item">TypeScript</span>
                <span className="coding-badge-item">NestJS</span>
                <span className="coding-badge-item">PostgreSQL</span>
              </div>

              <div style={{ paddingLeft: 50, display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <Link 
                  to="/resume" 
                  className="cta-button-primary"
                >
                  Download CV
                </Link>
                <Link 
                  to="/projects" 
                  className="cta-button-secondary"
                >
                  View Projects
                </Link>
                <Link 
                  to="/about" 
                  className="cta-button-secondary"
                >
                  About Me
                </Link>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <CodeWorkspaceMockup />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Quick Stats Section */}
      <Container>
        <div className="quick-stats-section">
          <div className="quick-stats-grid">
            <div className="stat-card-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Production-Style Projects</div>
            </div>
            <div className="stat-card-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Core Technologies</div>
            </div>
            <div className="stat-card-item">
              <div className="stat-number">Seeking</div>
              <div className="stat-label">Web Development Internship</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Currently Building - Mini Project Teaser */}
      <Container>
        <div className="mini-projects-section" style={{ paddingTop: "60px", paddingBottom: "60px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "40px", fontWeight: "600" }}>Currently Building</h2>
          
          <div className="mini-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            <div className="mini-project-item" style={{ padding: "20px", backgroundColor: "rgba(0,0,0,0.02)", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>MAY Coffee</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "12px" }}>Milk tea commerce platform</p>
              <a href="/projects/may-coffee" onClick={(e) => { e.preventDefault(); navigate("/projects/may-coffee"); }} style={{ fontSize: "0.9rem", textDecoration: "none", color: "var(--accent)" }}>
                View Details →
              </a>
            </div>

            <div className="mini-project-item" style={{ padding: "20px", backgroundColor: "rgba(0,0,0,0.02)", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>FoodFast</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "12px" }}>Multi-role ordering system</p>
              <a href="/projects/foodfast" onClick={(e) => { e.preventDefault(); navigate("/projects/foodfast"); }} style={{ fontSize: "0.9rem", textDecoration: "none", color: "var(--accent)" }}>
                View Details →
              </a>
            </div>

            <div className="mini-project-item" style={{ padding: "20px", backgroundColor: "rgba(0,0,0,0.02)", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>Vinabook</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "12px" }}>Fullstack bookstore application</p>
              <a href="/projects/vinabook" onClick={(e) => { e.preventDefault(); navigate("/projects/vinabook"); }} style={{ fontSize: "0.9rem", textDecoration: "none", color: "var(--accent)" }}>
                View Details →
              </a>
            </div>
          </div>

          <Link 
            to="/projects" 
            className="cta-button-primary"
            style={{ marginBottom: "60px" }}
          >
            View Full Project Collection →
          </Link>
        </div>
      </Container>

      {/* Internship CTA Section */}
      <Container>
        <div className="internship-cta-section" style={{ paddingTop: "60px", paddingBottom: "80px", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "15px", fontWeight: "600" }}>Open to Web Development Internship Opportunities</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "35px", maxWidth: "600px", margin: "0 auto 35px" }}>
            Let's build something together. I'm looking for opportunities to contribute to real-world projects and learn from experienced developers.
          </p>
          
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", flexDirection: "column", alignItems: "center" }}>
            <Link 
              to="/resume" 
              className="cta-button-primary"
            >
              Download CV
            </Link>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginTop: "10px" }}>Connect via social links below or reach out directly.</p>
          </div>
        </div>
      </Container>

      {/* Social Find Me On Section */}
      <Container>
        <Row style={{ paddingTop: "20px", paddingBottom: "60px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="highlight-primary">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nguyen-hong-tham"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/hong.tham.744509"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nguyen-hong-tham-8b1a2523b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:nguyenhongtham@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+84901234567"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
