import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Piyush Kumar Singh </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            <br /> 
            I have completed my <span className="purple">MCA( Master of Computer Applications) </span> from  <span className="purple">PES University</span> in Bengaluru. It is a significant accomplishment, and I am proud of my achievement.
            <br />
            With my MCA degree, I have gained a strong foundation in various areas of computer science and applications, including programming, software development, database management, networking, and system analysis. This knowledge will be invaluable in pursuing a career in software engineering, application development, database administration, IT consulting, or research and development.
            <br />
            With my 1 year experience  as a skilled<span className="purple">Software Development Engineer (SDE)</span> with expertise in React.js, Angular, Next.js, and JavaScript, I have cultivated a profound understanding of these technologies. This proficiency empowers me to construct robust and scalable applications. I am a self-starter, quick learner, and adept problem-solver with a proven track record of delivering high-quality work in a timely manner.
            <br /> <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast"{" "}
          </p>
          <footer className="blockquote-footer">Piyush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
