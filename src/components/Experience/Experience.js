import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCode } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "VNA Group",
      role: "Backend Developer Intern",
      duration: "March 2026 - May 2026 (3 Months)",
      description: "Contributed directly to production corporate software as a Backend Developer Intern. Collaborated closely with the development team under Agile/Scrum workflows, writing backend REST APIs and optimizing database models.",
      highlights: [
        "API Development & Maintenance: Designed and maintained RESTful APIs for user accounts, corporate profiles, and reporting features, improving data response times.",
        "Authentication & Security: Built secure user login and password recovery modules using JWT (JSON Web Tokens), data hashing, and secure session management.",
        "Advanced CRUD Implementation: Implemented comprehensive CRUD operations for user and company entities, maintaining strict relational database constraints.",
        "Role-Based Access Control (RBAC): Contributed to designing and implementing granular RBAC permissions to control feature access levels for various user roles.",
        "Enterprise Standards: Followed Gitflow for version control, wrote clean, maintainable code following internal style guides, and actively participated in daily Agile standups."
      ],
      techStack: ["NestJS", "PostgreSQL", "React", "JWT", "REST API", "Git / GitHub", "Agile / Scrum"]
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color: "var(--text-primary)", textAlign: "center", marginBottom: "40px" }}>
          Work <strong className="highlight-primary">Experience</strong>
        </h1>
        <p style={{ color: "var(--text-secondary)", textAlign: "center", marginBottom: "60px", fontSize: "1.1rem" }}>
          Hands-on experience in corporate environments with standardized software development workflows.
        </p>

        <Row className="justify-content-center">
          <Col md={10}>
            <div className="timeline-container">
              {experiences.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-badge">
                    <FaBriefcase />
                  </div>
                  
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <h3 className="role-title">
                        <FaCode className="icon-accent" /> {exp.role}
                      </h3>
                      <div className="company-info">
                        <span className="company-name">
                          <FaBuilding /> {exp.company}
                        </span>
                        <span className="duration">
                          <FaCalendarAlt /> {exp.duration}
                        </span>
                      </div>
                    </div>

                    <div className="timeline-card-body">
                      <p className="exp-description">{exp.description}</p>
                      
                      <h4 className="section-subtitle">Key Responsibilities & Achievements:</h4>
                      <ul className="highlights-list">
                        {exp.highlights.map((point, idx) => {
                          const [title, desc] = point.split(":");
                          return (
                            <li key={idx}>
                              <strong>{title}:</strong> {desc}
                            </li>
                          );
                        })}
                      </ul>

                      <div className="tech-tags">
                        {exp.techStack.map((tech, idx) => (
                          <span className="tech-tag-pill" key={idx}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
