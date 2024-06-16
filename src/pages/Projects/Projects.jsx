import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Projects.css"

const Projects = () => {
  return (
    <Container className="text-white mt-5 pt-5">
        <p className="text-white fs-4 fw-bold" style={{textDecoration: "underline"}}>Contributed Projects</p>
      <Row  className="mt-5">
        <Col
          lg="6"
          md="12"
          sm="12"
          style={{ border: "1px solid white", borderRadius: "10px",marginLeft: "20px" }}
         className="project-card-1"
        >
          <Container className="p-2">
            <div className="d-flex justify-content-center">
              <div>
                <h4>Organease</h4>
                <ul>
                  <li className="mt-3">
                    Collaborated with Capgemini to develop the frontend for a
                    Organ Transplant system
                  </li>
                  <li className="mt-3">
                    Technologies: HTML, CSS, JavaScript, ReactJS, Bootstrap, AWS
                  </li>
                  <li className="mt-3">Responsibilities: UI development, API Integration</li>
                </ul>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end mt-5">
        <Col
          lg="6"
          md="12"
          sm="12"
          style={{ border: "1px solid white", borderRadius: "10px", marginRight: "20px" }}
          className="project-card-2"
        >
          <Container className="p-2">
            <div className="d-flex justify-content-center">
              <div>
                <h4>Hospital Management System</h4>
                <ul>
                  <li  className="mt-3">
                    Developed a comprehensive web application for managing
                    patient records digitally and securely.
                  </li>
                  <li  className="mt-3">
                    Technologies: ReactJS, NodeJS, Bootstrap, MUI, Firebase,
                    Axios, AWS
                  </li>
                  <li  className="mt-3">Responsibilities: Frontend development, maintenance</li>
                </ul>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          lg="6"
          md="12"
          sm="12"
          style={{ border: "1px solid white", borderRadius: "10px", marginLeft: "20px" }}
          className="project-card-3"
        >
          <Container className="p-2">
            <div className="d-flex justify-content-center">
              <div>
                <h4>Freelance Projects</h4>
                <ul>
                  <li className="mt-3">Worked For a Private Organization</li>
                  <li className="mt-3">
                    Technologies: ReactJS, Tailwind CSS, Firebase
                    Authentication, NodeJS, Express.js, MongoDB
                  </li>
                  <li className="mt-3">
                    Responsibilities: Full project lifecycle from planning to
                    deployment.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
