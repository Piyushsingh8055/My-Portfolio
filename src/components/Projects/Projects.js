import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pooja from "../../Assets/Projects/pooja.png";
import QUEUES from "../../Assets/Projects/QUEUES.png";
import hubnex from "../../Assets/Projects/Hubnex.png";
// import foodorder from "../../Assets/Projects/food-order.png";

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
            <ProjectCard
              imgPath={pooja}
              isBlog={false}
              title="Online Pooja Samagri"
              description="Online Pooja samagri is a web application for the
              worship product. This website is a platform where users
              can purchase all the necessary items for performing
              Hindu religious rituals and prayers from the convenience
              of their own home. Here Customer can book priest for home worship also. Shopkeeper can sell there products. Online payment , Wallet. Security, Get mail on orders. "
              ghLink="https://github.com/Piyushsingh8055/E-COMMERCE-WEBSITE-Online-Pooja-Samagri-"
              demoLink="https://onlinepoojasamagri.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QUEUES}
              isBlog={false}
              title="Queue Implementation"
              description="From here users can learn about do practice. Users can check one by one  how element delete one by from queue with visual. Users can learn about Push Pop of element.  they can know about WHAT ARE QUEUES, TYPES OF QUEUES, BASIC FEATURES OF QUEUES. They can do DEMO, PRACTICE & LEARN. It is helpfull for those who want to learn about Queue form basics. "
              ghLink="https://github.com/Piyushsingh8055/Queue-Implementation"
              demoLink="https://queuepiyush.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hubnex}
              isBlog={false}
              title="HUBNEX"
              description="In Internship I have worked on this project as Frontend Developer. Hubnex is a team of experienced professionals who are passionate about helping businesses succeed. They understand that every business is unique, and they tailor their services to meet the specific needs of each client.HUBNEX is a technology and business branding agency based in Gurugram, India. "
              ghLink="https://github.com/Piyushsingh8055/hubnex_labs"
              demoLink="https://hubnex.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
