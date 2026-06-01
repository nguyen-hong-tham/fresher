import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="highlight-primary"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body" style={{ lineHeight: "1.8" }}>
              <p style={{ marginBottom: "1.2rem" }}>
                I am a Software Engineer specializing in <span className="highlight-primary">Fullstack Web Development</span>, focused on building clean, robust, and scalable applications.
              </p>
              
              <p style={{ marginBottom: "1.2rem" }}>
                My core expertise spans modern frameworks and database systems:
                {" "}<span className="highlight-primary">React, Next.js, TypeScript, NestJS, Node.js</span>, and <span className="highlight-primary">PostgreSQL</span>.
              </p>
              
              <p style={{ marginBottom: "1.2rem" }}>
                I have hands-on experience designing complete multi-role software platforms, integrating payment systems, and implementing real-time functionality through projects like <span className="highlight-primary">MAY Coffee, FoodFast</span>, and <span className="highlight-primary">Vinabook</span>.
              </p>
              
              <p style={{ marginBottom: "1.2rem" }}>
                I am driven by creating high-performance architectures and clean, developer-friendly codebases that solve real-world problems.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
