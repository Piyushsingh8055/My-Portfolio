import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pooja from "../../Assets/Projects/pooja.png";
import QUEUES from "../../Assets/Projects/QUEUES.png";
import hubnex from "../../Assets/Projects/Hubnex.png";
import sidtech from "../../Assets/Projects/sidtech.png";
import master11 from "../../Assets/Projects/mymaster11.png";

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
              imgPath={master11}
              isBlog={false}
              title={<span className="purple">MyMaster11</span>}
              description="MyMaster11 is a legal online fantasy sports gaming platform, recognized as a 'Game of Skill.' In this game, success is determined by the participants' skills, knowledge, and strategic choices, rather than luck. MyMaster11 offers services and contests in fantasy cricket, football, kabaddi, volleyball, basketball, and hockey. Users create their teams before matches, earning points based on players' real-life performances. The individual with the highest team score wins. MyMaster11's emphasis on skills and knowledge makes it a 100% legal and engaging fantasy sports platform."
              ghLink="https://www.mymaster11.com/"
              demoLink="https://mymaster11.com/?invite_code=Rolex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sidtech}
              isBlog={false}
              title={<span className="purple">Management Information System</span>}
              description="For the frontend, we utilized React.js and Tailwind CSS, known for their flexibility and responsiveness. This combination not only makes our Management Information System (MIS) powerful but also ensures a user-friendly, intuitive, and engaging interface. Our backend is secure and scalable, built on the versatility of Node.js. APIs  seamless communication between the database and user interface, enhancing the overall user experience. For database management, we opted for Microsoft SQL Server (MSSQL), providing a reliable and efficient solution for handling the complexities of your business information."
              ghLink="https://github.com/Piyushsingh8055/Vikrant-Dashboard"
              demoLink="https://sidtech.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hubnex}
              isBlog={false}
              title={<span className="purple">Hubnex</span>}
              description="During my internship, I served as a Frontend Developer on a project with Hubnex, a dynamic team of experienced professionals dedicated to supporting business success. At Hubnex, we recognize the uniqueness of each business and customize our services to address specific client needs. Hubnex is committed to delivering exceptional solutions. In my role, I honed my skills as a Frontend Developer, specializing in React.js for dynamic user interfaces and Tailwind CSS for efficient styling. This experience allowed me to contribute to the creation of engaging and responsive web applications. "
              ghLink="https://github.com/Piyushsingh8055/hubnex_labs"
              demoLink="https://hubnex.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pooja}
              isBlog={false}
              title={<span className="purple">Online Pooja Samagri</span>}
              description="Online Pooja Samagri is a cutting-edge web app with a user-friendly interface developed using React.js and Bootstrap. Users can easily purchase items for Hindu rituals online. The platform allows booking a priest for home worship, and shopkeepers can sell their products. 
              On the backend, Node.js ensures a robust foundation, while MongoDB serves as the flexible and scalable database solution. This tech stack enables secure online payments and wallet transactions for user convenience and safety. Email notifications keep users informed about their orders, ensuring a reliable transaction process. "
              ghLink="https://github.com/Piyushsingh8055/E-COMMERCE-WEBSITE-Online-Pooja-Samagri-"
              demoLink="https://onlinepoojasamagri.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QUEUES}
              isBlog={false}
              title={<span className="purple">Queue Implementation</span>}
              description="Users can engage in hands-on learning and practice the fundamentals of queues on this platform. They can visually observe how elements are sequentially deleted from the queue, gaining practical insights into the Push and Pop operations. The frontend, skillfully developed using HTML, CSS, and JavaScript, ensures an interactive and visually appealing user interface. PHP is seamlessly integrated into the backend for server-side functionalities, and it's used in conjunction with JavaScript for connecting to the database. The platform provides comprehensive information about WHAT QUEUES ARE, TYPES OF QUEUES, and BASIC QUEUE FEATURES."
              ghLink="https://github.com/Piyushsingh8055/Queue-Implementation"
              demoLink="https://queuepiyush.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
