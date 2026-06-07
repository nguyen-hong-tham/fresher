import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import fullstackPdf from "../../Assets/fullstack.pdf";
import backendPdf from "../../Assets/BE.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [selectedCv, setSelectedCv] = useState("fullstack"); // "fullstack" or "backend"

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const currentPdf = selectedCv === "fullstack" ? fullstackPdf : backendPdf;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* CV Selection Buttons */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="resume-toggle-container">
            <button
              className={`resume-toggle-btn ${selectedCv === "fullstack" ? "active" : "inactive"}`}
              onClick={() => setSelectedCv("fullstack")}
            >
              Fullstack
            </button>
            <button
              className={`resume-toggle-btn ${selectedCv === "backend" ? "active" : "inactive"}`}
              onClick={() => setSelectedCv("backend")}
            >
              Backend
            </button>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={currentPdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={currentPdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={currentPdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
