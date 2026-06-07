import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import profileImage from "../../Assets/about_me.jpg";

const DeveloperProfileCard = () => {
  return (
    <div className="developer-profile-card">
      <div className="profile-card-header">
        <img src={profileImage} alt="Profile" className="profile-avatar-image" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} />
        <h3 className="profile-card-name">Nguyễn Hồng Thắm</h3>
        <p className="profile-card-title">Backend-Focused Full-stack Developer</p>
      </div>
      <div className="profile-info-list">
        <div className="profile-info-item">
          <span className="profile-info-label">Education</span>
          <span className="profile-info-value">Saigon University</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">Core Focus</span>
          <span className="profile-info-value">
            Backend Development / REST API Design / Database Design / Auth & Auth / Real-time Systems
          </span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">Current Stack</span>
          <span className="profile-info-value">React / Next.js / NestJS / PostgreSQL</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">Career Objective</span>
          <span className="profile-info-value">Fresher Backend Developer / Fresher Full-stack Developer</span>
        </div>
      </div>
    </div>
  );
};

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
                textAlign: "left"
              }}
            >
              <h1 style={{ fontSize: "2.5em", paddingBottom: "25px" }} className="project-heading">
                About <strong className="highlight-primary">Me</strong>
              </h1>
              
              <div style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  I am a final-year Information Technology student at Saigon University. Driven by a deep passion for <strong>Software Engineering</strong> and <strong>Backend Development</strong>, I focus on building high-quality, scalable, and easily maintainable web applications.
                </p>
                
                <p style={{ marginBottom: "1.5rem" }}>
                  I have recently completed a 3-month internship at <strong>VNA Group</strong> as a <strong>Backend Developer Intern</strong>, where I collaborated on production software, worked with large-scale databases, and adhered to enterprise-level coding standards.
                </p>
                
                <p style={{ marginBottom: "1.5rem" }}>
                  Throughout my academic and professional journey, I have built notable applications like <strong>MAY Coffee</strong>, <strong>VinaBook</strong>, and <strong>FoodFast</strong>, mastering critical technical concepts including:
                </p>

                <ul style={{ paddingLeft: "20px", marginBottom: "1.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>Designing and developing standardized, robust <strong>RESTful APIs</strong>.</li>
                  <li style={{ marginBottom: "0.5rem" }}>Designing, building, and managing relational databases (PostgreSQL, MySQL, Prisma ORM).</li>
                  <li style={{ marginBottom: "0.5rem" }}>Implementing secure authentication and authorization systems (JWT, Role-Based Access Control / <strong>RBAC</strong>).</li>
                  <li style={{ marginBottom: "0.5rem" }}>Integrating online payment gateways (VNPay) and managing transaction lifecycles.</li>
                  <li style={{ marginBottom: "0.5rem" }}>Building real-time data sync features using <strong>Socket.io</strong>.</li>
                  <li style={{ marginBottom: "0.5rem" }}>Developing end-to-end <strong>Full-stack</strong> web applications connecting interactive frontend views with solid backend systems.</li>
                </ul>

                <p style={{ marginBottom: "1.5rem" }}>
                  Armed with a solid foundation, analytical problem-solving skills, and real-world corporate internship experience, I am ready to join development teams and deliver immediate value as a <strong>Fresher Backend Developer</strong> or <strong>Fresher Full-stack Developer</strong>.
                </p>
              </div>
            </Col>
            
            <Col
              md={5}
              style={{ paddingTop: "30px", paddingBottom: "50px" }}
            >
              <DeveloperProfileCard />
            </Col>
          </Row>
          
          <h1 className="project-heading">
            Professional <strong className="highlight-primary">Skillset </strong>
          </h1>

          <Techstack />



          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
