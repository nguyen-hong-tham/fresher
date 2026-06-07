import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../Particle";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

// Scale-ready Project roles database
const projectsData = [
  {
    slug: "may-coffee",
    title: "MAY Coffee — Milk Tea E-Commerce Platform",
    techStack: [
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "NestJS 11",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Firebase OTP",
      "VNPay"
    ],
    ghLink: "https://github.com/nguyen-hong-tham/MAY",
    roles: [
      {
        name: "Customer Experience",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/MAY-client.png"),
        summary: [
          "Users can browse products and customize drink sizes & toppings",
          "Manage shopping carts and complete checkout via VNPay/COD",
          "Track orders in real time using Socket.io integration",
          "Firebase OTP authentication and loyalty rewards program",
          "Personalized recommendations and integrated AI chatbox for support"
        ],
        demoLink: "https://may-client-snowy.vercel.app/",
        credentials: [
          { label: "Phone", value: "0900000003" },
          { label: "OTP", value: "123456" }
        ]
      },
      {
        name: "Staff Dashboard",
        status: "LIVE",
        imgPath: require("../../Assets/Projects/MAY-staff.png"),
        summary: [
          "Shop-level order monitoring with quick order status updates",
          "Real-time notifications for incoming customer orders"
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
          "Centralized dashboard with RBAC permissions and real-time sync",
          "Manage products, categories, customers, and operational workflows",
          "Business analytics dashboards and visual revenue monitoring",
          "Excel/PDF report exports by day, month, quarter, and year"
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
    roles: [
      {
        name: "Customer Experience (Mobile App)",
        status: "COMING SOON",
        imgPath: require("../../Assets/Projects/fast_food_mobile.png"),
        imageFit: "contain",
        summary: [
          "Customers can browse restaurants, explore menus, and manage carts",
          "Complete payments and track orders in real time",
          "Monitor drone delivery routes and manage profiles",
          "Cross-platform responsive mobile application workflows"
        ],
        // demoLink: "https://github.com/nguyen-hong-tham/fast-food",
        // credentials: null
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
    ghLink: "https://github.com/nguyen-hong-tham",
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

        {/* Roles Showcase Grid */}
        <Row className="justify-content-center" style={{ marginTop: "40px" }}>
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
                    ) : (
                      <div className="project-credentials-box public-demo">
                        Public Demo Available
                      </div>
                    )}
                  </div>

                  {/* Deploy Button */}
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
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetail;
