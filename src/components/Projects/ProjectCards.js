import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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

function ProjectCards(props) {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate(`/projects/${props.slug}`);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Card.Title style={{ 
          color: "#5F7D66", 
          fontWeight: "700", 
          fontSize: "1.45rem", 
          marginBottom: "15px",
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          {props.title}
        </Card.Title>
        <div style={{ flexGrow: 1, marginBottom: "20px" }}>
          {(() => {
            const parts = props.description ? props.description.split("\n\n") : [""];
            const intro = parts[0];
            const details = parts.slice(1).join("\n\n");
            return (
              <>
                <div style={{ 
                  fontSize: "1.05rem", 
                  fontWeight: "600", 
                  color: "#1F2722", 
                  marginBottom: "15px",
                  lineHeight: "1.5"
                }}>
                  {renderFormattedText(intro)}
                </div>
                {details && (
                  <div style={{ 
                    fontSize: "0.92rem", 
                    color: "#555555", 
                    lineHeight: "1.6", 
                    whiteSpace: "pre-line",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "12px",
                    marginTop: "12px"
                  }}>
                    {renderFormattedText(details)}
                  </div>
                )}
              </>
            );
          })()}
        </div>
        <div style={{ display: "flex", gap: "12px", marginTop: "auto", width: "100%" }}>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            style={{ 
              flex: 1, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "8px",
              padding: "10px 0",
              fontWeight: "600",
              fontSize: "0.95rem"
            }}
          >
            <BsGithub size={16} />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.slug && (
            <Button
              variant="primary"
              onClick={handleDemoClick}
              className="demo-btn-highlight"
              style={{ 
                flex: 1, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "8px",
                padding: "10px 0",
                fontWeight: "600",
                fontSize: "0.95rem"
              }}
            >
              <CgWebsite size={16} />
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
