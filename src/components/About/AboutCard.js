import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "left", lineHeight: "1.8" }}>
            <p style={{ marginBottom: "1.2rem" }}>
              I am <span className="highlight-primary">Nguyễn Hồng Thắm</span>, a senior <span className="highlight-primary">Information Technology</span> student at <span className="highlight-primary">Saigon University</span> in Ho Chi Minh City, Vietnam.
            </p>
            
            <p style={{ marginBottom: "1.2rem" }}>
              My technical focus is on <span className="highlight-primary">Fullstack Web Development</span>. I specialize in building complete, high-performance web systems using <span className="highlight-primary">React, Next.js, TypeScript, NestJS</span>, and <span className="highlight-primary">PostgreSQL</span>.
            </p>
            
            <p style={{ marginBottom: "1.5rem" }}>
              I have practical experience designing database schemas, integrating third-party APIs (like payment gateways and real-time Socket.io), and developing multi-role platforms through projects such as <span className="highlight-primary">MAY Coffee, FoodFast</span>, and <span className="highlight-primary">Vinabook</span>.
            </p>
            
            <p style={{ marginBottom: "1rem" }}>
              Outside of coding, I enjoy:
            </p>
          </div>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Taking Photos 
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 
            </li>
          </ul>

          <p style={{ color: "var(--text-secondary)" }}>
            "Building end-to-end solutions that connect user experience with business logic."{" "}
          </p>
          <footer className="blockquote-footer">Thắm</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
