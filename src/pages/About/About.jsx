import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./About.css"; // Import the CSS file for custom styles

const About = () => {
  return (
    <Row className>
      <Col lg="12" md="12" sm="12">
        <Container className="p-2" style={{marginTop: '8%'}}>
            <p className="fs-4 fw-bold text-white" style={{textDecoration: "underline"}}>About Me</p>
          <div
            className="text-white p-4 glowing-border mt-5"
            style={{ borderRadius: "10px" }}
          >
            <p>
              Hello! I'm Abishek, a frontend developer with over 1.5 years of
              experience in building responsive and user-centric web
              applications. Skilled in HTML, CSS, JavaScript, ReactJS, and AWS,
              I have a strong academic background with a Master of Computer
              Application from Vellore Institute of Technology and a Bachelor of
              Computer Science from St. Joseph’s College of Arts and Science. I
              have collaborated on significant projects like Organease with
              Capgemini and have developed a hospital management system using
              ReactJS and MUI Frameworks along with AWS deployment. Currently, I am expanding my skills in backend development
              with Node.js, Express, MongoDB, and NestJS, while also learning
              TypeScript and TSX. I'm fluent in Tamil and English and am
              committed to continuous learning and innovation. Let's connect and
              create something amazing together!
            </p>
            <p>
              Feel free to explore my projects on{" "}
              <a href="https://github.com/bvabishek">GitHub</a> or connect with
              me on
              <a href="https://www.linkedin.com/in/abishek-b-3a164b1ab/">
                {" "}
                LinkedIn
              </a>
              . Let's build something amazing together!
            </p>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default About;
