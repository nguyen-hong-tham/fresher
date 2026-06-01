import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "var(--text-primary)",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="highlight-primary">Code</strong>
      </h1>
      <GitHubCalendar
        username="nguyen-hong-tham"
        blockSize={15}
        blockMargin={5}
        color="#5F7D66"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
