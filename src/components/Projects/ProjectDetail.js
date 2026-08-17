import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../Particle";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const renderFormattedText = (text) => {
  if (!text) return "";
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} style={{ fontWeight: "700" }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// Scale-ready Project database with detailed engineering insights
const projectsData = [
  {
    slug: "school-management",
    title: "School Management — Microservices & Event-Driven System",
    techStack: [
      "ASP.NET Core 9",
      "Entity Framework Core",
      "Npgsql (PostgreSQL)",
      "ASP.NET Core MVC (Razor)",
      "Supabase Cloud",
      "MassTransit",
      "RabbitMQ (CloudAMQP)",
      "Docker & Compose",
      "Nginx Reverse Proxy",
      "Oracle Cloud VPS"
    ],
    ghLink: "https://github.com/nguyen-hong-tham/SchoolManagementSystem",
    overview: `Developed an **enterprise-grade School Management System** using **ASP.NET Core 9** and a **Microservices Architecture** to digitalize school operations, including user management, class organization, subject management, teaching schedules, and academic score management with automatic GPA calculation.

The system is built with **four independent microservices** that communicate asynchronously through **MassTransit and RabbitMQ**, reducing service coupling while improving scalability and fault tolerance. To optimize security and maintainability, the frontend adopts the **Backend-for-Frontend (BFF)** pattern with **ASP.NET Core MVC**, while the backend follows a **Layered Architecture** and **Repository Pattern**.

Data is managed using **Supabase PostgreSQL** with **schema isolation** for each service. The project also applies **efficient data loading strategies** (Eager Loading, Explicit Loading, and local cache synchronization through events) to improve query performance and avoid unnecessary cross-service communication. The entire system is containerized with **Docker** and deployed on **Oracle Cloud** behind **Nginx Reverse Proxy**.`,
    roleResponsibilities: "Sole System Architect & Backend Developer. Designed the microservices splitting boundaries, set up the Docker network and Nginx reverse proxy routing, integrated Supabase PostgreSQL with logical schemas, implemented asynchronous event pub/sub using MassTransit and CloudAMQP (RabbitMQ), designed composite unique indices for strict business constraints, and deployed the entire architecture to an Oracle Cloud VPS using Docker Compose.",
    challenges: "Deploying 5 separate Docker containers (4 services + 1 Frontend MVC) on a budget VPS with only 1GB of physical RAM. At start, .NET host processes would trigger Out Of Memory (OOM) exceptions and crash. Another challenge was preventing concurrent data corruption, such as students being assigned to multiple classes in the same school year, or invalid grades being inputted into the system.",
    lessons: "Mastered microservices partition patterns, logical database schema isolation in PostgreSQL, and real-time asynchronous communication via RabbitMQ. Acquired deep DevOps experience including containerization using lightweight Alpine Linux images, configuring Nginx API gateway, and VPS server optimization using Swap files to handle heavy memory workloads on constrained hardware.",
    roles: [
      {
        name: "Administrative Portal",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/schoolmanagement.png"),
        summary: [
          "Manage users, roles, and permissions (RBAC)",
          "Configure classes, grades, semesters, and subjects",
          "Assign homeroom teachers and teaching schedules"
        ],
        demoLink: "https://schoolmanagement-tham.duckdns.org/",
        credentials: [
          { label: "Username", value: "admin" },
          { label: "Password", value: "Admin@123" }
        ]
      },
      {
        name: "Teacher Portal",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/schoolmanagement.png"),
        summary: [
          "Manage student scores (15-minute, midterm, and final exams)",
          "View assigned classes and teaching schedules",
          "Monitor GPA calculations and academic performance"
        ],
        demoLink: "https://schoolmanagement-tham.duckdns.org/",
        credentials: [
          { label: "Username", value: "teacher.an" },
          { label: "Password", value: "Teacher@123" }
        ]
      },
      {
        name: "Student Portal",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/schoolmanagement.png"),
        summary: [
          "Access personalized profiles, academic transcripts, and historical class enrollments",
          "View daily class schedules, classroom locations, and teaching teacher contact details",
          "View GPA, academic results, and learning progress"
        ],
        demoLink: "https://schoolmanagement-tham.duckdns.org/",
        credentials: [
          { label: "Username", value: "student.cuong" },
          { label: "Password", value: "Student@123" }
        ]
      }
    ]
  },
  {
    slug: "may-coffee",
    title: "MAY Coffee — Milk Tea E-Commerce Platform",
    techStack: [
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/ui",
      "Zustand",
      "NestJS 11",
      "PostgreSQL (Supabase)",
      "Prisma ORM",
      "Socket.io",
      "Firebase OTP",
      "VNPay SDK",
      "OpenAI GPT-3.5"
    ],
    ghLink: "https://github.com/nguyen-hong-tham/MAY",
    overview: `**MAY Coffee** is a comprehensive monorepo E-commerce & Smart F&B Chain Management platform built with **React 19, TypeScript, NestJS 11, and PostgreSQL (Supabase)** with **Prisma ORM**.

The system comprises three coordinated sub-systems communicating via **REST API and WebSockets**:
1. **Customer App (React 19 + TailwindCSS v4):** Passwordless Firebase OTP login, deep drink customization (size, sugar/ice level, toppings), dual payment options (COD & VNPay Sandbox), real-time order tracking, loyalty point rewards, and an **OpenAI GPT-3.5 powered AI Assistant** for intelligent menu consultations.
2. **Staff Dashboard (React 19 + Shadcn/ui + Zustand):** Real-time order queue with instant WebSocket notifications, swift order state transitions, and store-level ingredient management.
3. **Admin Dashboard (React 19 + Shadcn/ui):** Centralized RBAC management, product & category CRUD, visual 30-day analytics charts, automated loyalty tier discounts, and one-click financial exports to **Excel (XLSX)** and **PDF invoices (html2pdf)**.`,
    roleResponsibilities: "Lead Full-Stack Developer. Architected the monorepo structure, designed the PostgreSQL schema and ACID transactions with Prisma, implemented JWT dual-token authentication & Firebase OTP verification, integrated VNPay checkout with IPN webhooks, created real-time Socket.io gateways, and embedded OpenAI GPT-3.5 with custom context filtering.",
    challenges: "Synchronizing real-time order statuses across Customer, Staff, and Admin interfaces without dropped connections. Ensuring zero payment data discrepancy by implementing secure SHA512 checksum validation and idempotent IPN webhooks with Prisma database transactions for rollback safety.",
    lessons: "Mastered NestJS modular architecture, Prisma transaction isolation, WebSocket lifecycle management, AI prompt contextual filtering for menu constraints, and building highly responsive dashboards with Zustand and Shadcn/ui.",
    roles: [
      {
        name: "Customer Experience",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/MAY-client.png"),
        summary: [
          "Browse menu & customize drinks (Size S/M/L, Sugar/Ice ratio, Custom Toppings)",
          "Dual flexible checkout: Cash on Delivery (COD) & Online Banking (VNPay Sandbox)",
          "Real-time order state tracking via Socket.io from preparation to delivery",
          "Passwordless phone authentication via Firebase OTP & Auto Account Provisioning",
          "Smart AI Assistant (OpenAI GPT-3.5) with calorie and caffeine filtering",
          "Loyalty rewards system: 10% cashback points & tier discounts (Silver, Gold, Platinum)"
        ],
        demoLink: "https://may-client-snowy.vercel.app/",
        credentials: [
          { label: "Phone", value: "0900000003" },
          { label: "OTP", value: "123456" }
        ],
        testPayment: {
          title: "Test VNPay Sandbox Account",
          details: [
            { label: "Ngân hàng", value: "NCB" },
            { label: "Số thẻ", value: "9704198526191432198" },
            { label: "Tên chủ thẻ", value: "NGUYEN VAN A" },
            { label: "Ngày phát hành", value: "07/15" },
            { label: "OTP", value: "123456" }
          ]
        }
      },
      {
        name: "Staff Dashboard",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/MAY-staff.png"),
        summary: [
          "Shop-level live order queue with instant push notifications via WebSockets",
          "Quick order workflow processing (Pending → In Progress → Completed → Delivery)",
          "Manage drink toppings, ingredients, and in-store product availability status",
          "Real-time customer status synchronization to prevent order duplication",
          "Responsive interface built with React 19, TypeScript, Shadcn/ui & Lucide Icons",
          "Secure role-based login with dual token mechanism (Access Token & Refresh Token)"
        ],
        demoLink: "https://may-admin-seven.vercel.app/",
        credentials: [
          { label: "Phone", value: "0900000004" },
          { label: "OTP", value: "123456" }
        ]
      },
      {
        name: "Admin Dashboard",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/MAY-admin.png"),
        summary: [
          "Centralized management: full CRUD for products, multi-level categories & toppings",
          "Staff & customer account management with strict Role-Based Access Control (RBAC)",
          "Real-time visual analytics: 30-day revenue charts, order volume & VIP customer insights",
          "One-click financial export: Excel (XLSX) revenue spreadsheets & PDF customer invoices",
          "State architecture powered by Zustand, React Hook Form, and Zod validation",
          "Automated Loyalty membership tier management (Normal, Silver, Gold, Platinum)"
        ],
        demoLink: "https://may-admin-seven.vercel.app/",
        credentials: [
          { label: "Phone", value: "0900000001" },
          { label: "OTP", value: "123456" }
        ]
      }
    ]
  },
  {
    slug: "vinabook",
    title: "Vinabook — Full-Stack Online Bookstore",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "MySQL/PostgreSQL",
      "JWT",
      "React Query"
    ],
    ghLink: "https://github.com/nguyen-hong-tham/vina_book",
    overview: "Vinabook is a full-stack online bookstore featuring smart search, catalog filtering, shopping carts, checkout workflows, and an integrated AI chatbot to assist users with book recommendations. It includes an Admin Dashboard for managing inventory (CRUD on books and categories), user profiles, and tracking sales analytics.",
    roleResponsibilities: "Full-stack Developer. Built responsive customer and admin interfaces with Next.js and TailwindCSS; implemented RESTful APIs using Node.js and Express; designed the PostgreSQL database schema; integrated the AI chatbot recommendations system; and managed client-side API state using React Query.",
    challenges: "Optimizing multi-criteria search and filter queries on large catalogs while configuring Next.js Server-Side Rendering (SSR) to speed up initial load times and improve SEO for individual book pages.",
    lessons: "Mastered hybrid rendering patterns (SSR & CSR) in Next.js, client-side API caching with React Query, and designing system prompts to align chatbot behavior with specific business logic.",
    roles: [
      {
        name: "Customer Experience",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/vina_users.png"),
        summary: [
          "Browse books, search, and category filtering workflows",
          "Manage shopping carts and complete checkout pipelines",
          "Track order histories and manage customer profiles",
          "AI chatbot integration for book recommendations & product help"
        ],
        demoLink: "https://vina-book.vercel.app/",
        credentials: null
      },
      {
        name: "Admin Dashboard",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/vina_admin.png"),
        summary: [
          "Manage products, categories, users, and orders",
          "Centralized dashboard with CRUD operations",
          "Role management and operational workflows",
          "Real-time statistics monitoring and analytics"
        ],
        demoLink: "https://vina-book.vercel.app/",
        credentials: [
          { label: "Email", value: "admin@gmail.com" },
          { label: "Password", value: "123456" }
        ]
      }
    ]
  },
  {
    slug: "foodfast",
    title: "FoodFast — Multi-Platform Food Delivery Ecosystem",
    techStack: [
      "React Native",
      "Expo",
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TailwindCSS",
      "Appwrite"
    ],
    ghLink: "https://github.com/nguyen-hong-tham/fast-food",
    overview: "FoodFast is a modern multi-role food ordering and delivery ecosystem. It includes a cross-platform mobile app for customers to explore restaurants, order meals, pay, and track drone deliveries; a Web Portal for restaurants to manage catalogs and order statuses; and a central Admin Console for platform oversight.",
    roleResponsibilities: "Full-stack Developer. Created the responsive customer mobile app with React Native and Expo; styled components using TailwindCSS; structured database collections, storage buckets, and user authentication on Appwrite Cloud; built the restaurant web portal using React + Vite; and managed global state using Zustand.",
    challenges: "Maintaining UI consistency across iOS and Android platforms via Expo. Synchronizing complex state transitions of active orders between the customer's mobile app and the restaurant's web portal in real-time.",
    lessons: "Acquired strong hands-on experience in cross-platform mobile development, lightweight global state management with Zustand, and integrating BaaS (Backend-as-a-Service) cloud architectures like Appwrite.",
    roles: [
      {
        name: "Customer Experience (Mobile App)",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/fast_food_mobile.png"),
        imageFit: "contain",
        isScan: true,
        summary: [
          "Customers can browse restaurants, explore menus, and manage carts",
          "Complete payments and track orders in real time",
          "Monitor drone delivery routes and manage profiles",
          "Cross-platform responsive mobile application workflows"
        ],
        demoLink: "https://github.com/nguyen-hong-tham/fast-food",
        credentials: null
      },
      {
        name: "Restaurant Portal",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/fast_food_restaurant .png"),
        summary: [
          "Manage menus, categories, and restaurant-level catalogs",
          "Process incoming orders with real-time order handling",
          "Operational workflows and dedicated business revenue analytics"
        ],
        demoLink: "https://foodfast-restaurant.vercel.app/",
        credentials: [
          { label: "Email", value: "nguyenvana@gmail.com" },
          { label: "Password", value: "123123123" }
        ]
      },
      {
        name: "Admin Dashboard",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/fast_food_admin.png"),
        summary: [
          "Centralized management interface for platform oversight",
          "Oversee users, restaurant accounts, and customer orders",
          "Monitor drone systems, analytics, and platform configurations"
        ],
        demoLink: "https://fast-food-admin-ruddy.vercel.app/",
        credentials: [
          { label: "Admin", value: "admin@gmail.com" },
          { label: "Password", value: "123123123" }
        ]
      }
    ]
  },
  {
    slug: "goodbookclub",
    title: "GoodBookClub — Online Bookstore Platform",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "LocalStorage API"
    ],
    ghLink: "https://github.com/nguyen-hong-tham/Bookstore-Website-",
    overview: "GoodBookClub is a lightweight, responsive online bookstore designed to provide a fast and minimalist shopping experience, complete with an offline-capable admin dashboard for managing product inventory.",
    roleResponsibilities: "Sole Frontend Developer. Crafted a highly responsive UI from scratch using HTML5 and Vanilla CSS; developed client-side search, filtering, cart workflows, and checkout pipelines using ES6+ JavaScript; used LocalStorage API to persist cart and order data without a database.",
    challenges: "Implementing complex state synchronization for shopping cart items (adding, updating quantities, deleting) and persisting order data using LocalStorage while maintaining high browser performance.",
    lessons: "Solidified core browser concepts including DOM manipulation, responsive layouts (CSS Flexbox/Grid), asynchronous JavaScript, and Client-Side Storage APIs.",
    roles: [
      {
        name: "Customer Experience",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/goodBookclub_users.png"),
        summary: [
          "Browse books, search, and filter products",
          "Manage shopping carts and complete checkout workflows",
          "Track purchase history through a responsive e-commerce interface"
        ],
        demoLink: "https://bookstore-website-gamma.vercel.app/",
        credentials: null
      },
      {
        name: "Admin Dashboard",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/goodBookclub_admin.png"),
        summary: [
          "Manage products, customers, and checkout order lists",
          "Dedicated dashboard with CRUD operations and account management",
          "Order processing capabilities and business statistics metrics"
        ],
        demoLink: "https://bookstore-website-gamma.vercel.app/",
        credentials: [
          { label: "Phone", value: "1234567890" },
          { label: "Password", value: "123456" }
        ]
      }
    ]
  },
  {
    slug: "bookept",
    title: "BOOKEPT — Online Bookstore Platform",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    ghLink: "https://github.com/nguyen-hong-tham/nguyen-hong-tham-Bookstore-Website_2",
    overview: "BOOKEPT is a classic e-commerce bookstore utilizing a traditional Client-Server architecture with PHP and MySQL, supporting book search, shopping carts, Cash-on-Delivery (COD) checkout pipelines, and a full catalog manager for administrators.",
    roleResponsibilities: "Full-stack Developer. Designed and normalized the MySQL database schema, wrote optimized SQL query statements, developed server-side request routing and page generation using raw PHP, and created interactive client interfaces with JavaScript.",
    challenges: "Hardening the raw PHP codebase against common vulnerabilities like SQL Injection using Prepared Statements, and XSS through thorough input validation and output escaping.",
    lessons: "Learned the foundational HTTP request-response cycle, database normalization techniques, user authentication mechanics via Session/Cookie, and writing secure server-side logic from scratch.",
    roles: [
      {
        name: "Customer Experience",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/bookept_users.png"),
        summary: [
          "Customer-facing online bookstore experience for end-to-end purchasing",
          "Browse books, search products, manage shopping carts, and place orders",
          "Billing generation, checkout processing, and order lifecycle tracking",
          "Authentication, profile management, and responsive UI with MySQL backend"
        ],
        demoLink: "https://bookeptdemo.freehosting.dev/",
        credentials: [
          { label: "Email", value: "joppyyy@gmail.com" },
          { label: "Password", value: "123123" }
        ]
      },
      {
        name: "Admin Dashboard",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/bookept_admin.png"),
        summary: [
          "Dedicated administrative dashboard for operational management",
          "Product management (CRUD operations) and catalog maintenance",
          "Inventory control, product stock, and platform content updates",
          "Order status processing, user administration, and analytics dashboard"
        ],
        demoLink: "https://bookeptdemo.freehosting.dev/login_admin.php",
        credentials: [
          { label: "Email", value: "admin@gmail.com" },
          { label: "Password", value: "123123" }
        ]
      }
    ]
  }
];

function ProjectDetail() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === projectSlug);

  const handleBackClick = () => {
    try {
      navigate("/projects");
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  if (!project) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ color: "white", marginTop: "50px" }}>
            Project not found
          </h1>
          <Button
            variant="primary"
            onClick={handleBackClick}
            style={{ marginTop: "20px" }}
          >
            <AiOutlineArrowLeft /> Back to Projects
          </Button>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Premium Header Section */}
        <div className="project-detail-header">
          <div className="header-nav-wrapper">
            <Button
              variant="primary"
              onClick={handleBackClick}
              className="project-back-btn"
            >
              <AiOutlineArrowLeft /> Back to Projects
            </Button>
          </div>

          <h1 className="project-detail-title">{project.title}</h1>

          <div className="project-tech-badges">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-badge-pill">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-header-actions">
            {project.ghLink && (
              <Button
                variant="primary"
                href={project.ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-gh-btn"
              >
                <BsGithub /> &nbsp; GitHub
              </Button>
            )}
          </div>
        </div>

        {/* Project Overview Card */}
        <Row style={{ marginBottom: "40px" }}>
          <Col md={12}>
            <div className="project-overview-card" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "30px", textAlign: "left" }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", marginBottom: "15px", color: "var(--text-primary)" }}>
                Project Overview
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: 0, whiteSpace: "pre-line" }}>
                {renderFormattedText(project.overview)}
              </p>
            </div>
          </Col>
        </Row>

        {/* Roles Showcase Title & Grid */}
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", marginBottom: "25px", textAlign: "left", color: "var(--text-primary)" }}>
          Key Features & Demos
        </h3>
        <Row className="justify-content-center">
          {project.roles.map((role, index) => {
            // Determine column widths based on number of roles for premium scaling
            let colVal = 12;
            if (project.roles.length === 1) {
              colVal = 6;
            } else if (project.roles.length === 2) {
              colVal = 6;
            } else {
              colVal = 4;
            }

            return (
              <Col
                key={index}
                xs={12}
                md={colVal}
                className="project-role-col"
                style={{ marginBottom: "40px" }}
              >
                <div className="project-role-card">
                  {/* Role Badge */}
                  <div className="project-role-card-header">
                    <span className="project-role-name">{role.name}</span>
                    <span className={`status-badge ${role.status.toLowerCase().replace(" ", "-")}`}>
                      {role.status}
                    </span>
                  </div>

                  {/* Screenshot Preview */}
                  <div className={`project-role-image-container ${role.imageFit === "contain" ? "contain-fit" : ""}`}>
                    <img
                      src={role.imgPath}
                      alt={role.name}
                      className="project-role-image"
                    />
                  </div>

                  {/* Feature Summary */}
                  <div className="project-role-summary">
                    <ul className="project-summary-list">
                      {role.summary.map((point, idx) => (
                        <li key={idx}>• {point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Credentials Box */}
                  <div className="project-credentials-container">
                    {role.credentials && role.credentials.length > 0 ? (
                      <div className="project-credentials-box">
                        {role.credentials.map((cred, idx) => (
                          <div key={idx} className="cred-row">
                            <span className="cred-label">{cred.label}:</span>
                            <span className="cred-value">{cred.value}</span>
                          </div>
                        ))}
                      </div>
                    ) : role.isScan ? (
                      <div className="project-credentials-box public-demo scan-instruction" style={{ textAlign: "center" }}>
                        <div style={{ fontWeight: "600", marginBottom: "4px" }}>Scan QR code with Expo Go to run the app</div>
                        <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Note: Download Expo Go first.</div>
                      </div>
                    ) : (
                      <div className="project-credentials-box public-demo">
                        Public Demo Available
                      </div>
                    )}

                    {role.testPayment && (
                      <div className="project-credentials-box" style={{ marginTop: "10px", borderColor: "rgba(95, 125, 102, 0.4)" }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--accent)", marginBottom: "8px", borderBottom: "1px dashed var(--border)", paddingBottom: "4px", textAlign: "left" }}>
                          💳 {role.testPayment.title || "VNPay Test Sandbox"}
                        </div>
                        {role.testPayment.details.map((item, idx) => (
                          <div key={idx} className="cred-row">
                            <span className="cred-label">{item.label}:</span>
                            <span className="cred-value">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Deploy Button */}
                  {!role.isScan && (
                    <div className="project-action-container">
                      <Button
                        className="project-go-btn"
                        href={role.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        disabled={role.status === "COMING SOON" || role.status === "PRIVATE"}
                      >
                        {role.status === "COMING SOON" ? "COMING SOON" : (role.status === "PRIVATE" ? "PRIVATE" : "GO →")}
                      </Button>
                    </div>
                  )}
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Engineering Insights Section */}
        <Row style={{ marginTop: "20px" }}>
          <Col md={12} style={{ marginBottom: "40px" }}>
            <div className="engineering-insights-card" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "30px", textAlign: "left" }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "700", marginBottom: "25px", color: "var(--text-primary)", borderBottom: "1px solid var(--border)", paddingBottom: "15px" }}>
                Engineering Depth & Insights
              </h3>

              <Row>
                <Col md={4} style={{ marginBottom: "20px" }}>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", color: "var(--accent)", marginBottom: "12px" }}>
                    Role & Responsibilities
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
                    {project.roleResponsibilities}
                  </p>
                </Col>

                <Col md={4} style={{ marginBottom: "20px" }}>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", color: "var(--accent)", marginBottom: "12px" }}>
                    Challenges Faced
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
                    {project.challenges}
                  </p>
                </Col>

                <Col md={4} style={{ marginBottom: "20px" }}>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: "600", color: "var(--accent)", marginBottom: "12px" }}>
                    Lessons Learned
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: "1.7", color: "var(--text-secondary)" }}>
                    {project.lessons}
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default ProjectDetail;
