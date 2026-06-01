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
        <p className="profile-card-title">Fullstack Developer</p>
      </div>
      <div className="profile-info-list">
        <div className="profile-info-item">
          <span className="profile-info-label">Education</span>
          <span className="profile-info-value">Saigon University</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">Focus</span>
          <span className="profile-info-value">Fullstack Web Development</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">Current Stack</span>
          <span className="profile-info-value">React / Next.js / NestJS</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">Interested In</span>
          <span className="profile-info-value">System Design / Clean Architecture</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">Seeking</span>
          <span className="profile-info-value">Web Internship</span>
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
                  I'm a final-year Information Technology student with a strong interest in Fullstack Development.
                </p>
                
                <p style={{ marginBottom: "1.5rem" }}>
                  I enjoy building applications that combine frontend experiences, backend workflows, and practical problem solving.
                </p>
                
                <p style={{ marginBottom: "1.5rem" }}>
                  Through projects such as <strong className="highlight-primary">MAY Coffee</strong>, <strong className="highlight-primary">FoodFast</strong>, and <strong className="highlight-primary">Vinabook</strong>, I've explored authentication systems, RESTful APIs, payment integration, real-time functionality, and multi-role application design.
                </p>
                
                <p style={{ marginBottom: "1.5rem" }}>
                  Outside of coding, I'm interested in UI inspiration, continuous learning, and building maintainable software systems.
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
