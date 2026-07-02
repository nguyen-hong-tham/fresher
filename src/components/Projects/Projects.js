import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import goodBookclub_users from "../../Assets/Projects/goodBookclub_users.png";
import vina_users from "../../Assets/Projects/vina_users.png";
import fast_food_restaurant from "../../Assets/Projects/fast_food_restaurant .png";
import MAY_client from "../../Assets/Projects/MAY-client.png";
import bookept_users from "../../Assets/Projects/bookept_users.png";
import schoolmanagement from "../../Assets/Projects/schoolmanagement.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color: "var(--text-primary)" }}>
          My Recent <strong className="highlight-primary">Works </strong>
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Here are the projects I have developed, showcasing full-stack capabilities, database design, and real-time workflows.
        </p>

        {/* Featured Projects (Dự án nổi bật) */}
        <h2 className="project-heading-sub" style={{ color: "var(--text-primary)", fontSize: "1.8em", marginTop: "40px", marginBottom: "20px", borderBottom: "1px solid var(--border)", paddingBottom: "10px", textAlign: "left" }}>
          Featured <strong className="highlight-primary">Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolmanagement}
              isBlog={false}
              title="School Management"
              description={"A school management platform built with ASP.NET Core 9, Docker, RabbitMQ, and Supabase PostgreSQL.\n\n• Microservices Architecture: Split into 4 independent services (UserService, ClassService, SubjectService, ScoreService) communicating asynchronously via MassTransit & CloudAMQP.\n• DevOps Deployment: Dockerized and deployed on Oracle Cloud VPS using Nginx Reverse Proxy and optimized Swap RAM to run stably on a 1GB host at $0 cost."}
              ghLink="https://github.com/nguyen-hong-tham"
              slug="school-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MAY_client}
              isBlog={false}
              title="MAY Coffee"
              description={"A full-stack milk tea e-commerce platform built with React, NestJS, and PostgreSQL.\n\n• Customer Experience: browse products, customize drink sizes/toppings, loyalty rewards, VNPay payment, real-time order tracking (Socket.io), and AI chatbot support.\n• Admin & Staff Dashboard: manage products, operational workflows, and export daily/monthly business reports (Excel/PDF)."}
              ghLink="https://github.com/nguyen-hong-tham/MAY"
              slug="may-coffee"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vina_users}
              isBlog={false}
              title="Vinabook"
              description={"A full-stack bookstore platform built with Next.js, React, and PostgreSQL.\n\n• Customer Experience: catalog browsing, advanced book search, category filtering, cart management, and integrated AI chatbot for recommendations.\n• Administrative Dashboard: complete control panel for product catalog (CRUD), category organization, user accounts, and real-time order management."}
              ghLink="https://github.com/nguyen-hong-tham/vina_book"
              slug="vinabook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fast_food_restaurant}
              isBlog={false}
              title="FoodFast"
              description={"A multi-role food delivery platform built with React Native (Expo), React, and Appwrite.\n\n• Customer Mobile App: browse restaurants, select items, track deliveries with GPS, and process payment.\n• Restaurant & Admin Portals: manage menus, handle real-time order states, and oversee accounts with operational analytics."}
              ghLink="https://github.com/nguyen-hong-tham/fast-food"
              slug="foodfast"
            />
          </Col>
        </Row>

        {/* Other Projects (Dự án khác) */}
        <h2 className="project-heading-sub" style={{ color: "var(--text-primary)", fontSize: "1.8em", marginTop: "40px", marginBottom: "20px", borderBottom: "1px solid var(--border)", paddingBottom: "10px", textAlign: "left" }}>
          Other <strong className="highlight-primary">Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goodBookclub_users}
              isBlog={false}
              title="GoodBookClub"
              description={"A clean, responsive online bookstore platform built with HTML5, CSS3, JS (ES6+), and LocalStorage.\n\n• Customer Portal: search & filter books, cart management, and checkout tracking.\n• Admin Dashboard: CRUD operations for products, order lists, customer accounts, and revenue stats."}
              ghLink="https://github.com/nguyen-hong-tham/Bookstore-Website-"
              slug="goodbookclub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookept_users}
              isBlog={false}
              title="BOOKEPT"
              description={"An online bookstore application built with HTML, CSS, PHP, and MySQL.\n\n• Features: product search, cart workflows, checkout, billing, and profile management.\n• Dashboard: inventory management (CRUD), catalog updates, and order processing workflows."}
              ghLink="https://github.com/nguyen-hong-tham"
              slug="bookept"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
