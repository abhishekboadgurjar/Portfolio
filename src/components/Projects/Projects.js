import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import medicare from "../../Assets/Projects/medicare.png";
import agblog from '../../Assets/Projects/AgBlog.png'
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={medicare}
              isBlog={false}
              title="Medicare"
              description="Medicare is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to help users book appointments with doctors. This project enables patients to browse available doctors, view profiles, and schedule appointments based on doctor availability."
              ghLink="https://github.com/abhishekgurjar-in/Medicare"
              demoLink="https://github.com/abhishekgurjar-in/Medicare"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={agblog}
              isBlog={false}
              title="Abhishek Blog"
              description="About
Welcome to Abhishek Blog – a full-stack MERN (MongoDB, Express, React, Node.js) application where an admin can post blogs, and users can like and comment on each blog post. This project is designed to create a seamless and interactive blogging experience."
              ghLink="https://github.com/abhishekgurjar-in/Abhishek-Blog"
              demoLink="https://abhishek-blog.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
