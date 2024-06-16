import React from "react";
import { Col, Container, Row } from "reactstrap";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import './Home.css'; // Import the CSS file for animations

const Home = () => {
  return (
    <div className="bg-dark" style={{ height: '100%' }}>
      <Container className="pt-5 mt-4">
        <Row className="text-start">
          <Col lg="6" md="12" sm="12">
            <h4 className="text-white">
              <span className="text-secondary">&lt;p&gt;</span> Hi, I'm Abishek
              B <span className="text-secondary">&lt;/p&gt;</span>
            </h4>
            <h5 className="text-warning ps-3 fs-2">
              <b>
                <span className="grow-shrink-text">A</span>
                <span className="grow-shrink-text ms-2"> Web</span>
                <span className="grow-shrink-text ms-2"> Developer</span>
              </b>
            </h5>
          </Col>
          <Col lg="6" md="12" sm="12" className="pt-5 mt-5">
            <div className="d-flex justify-content-end">
              <h5 className="text-white">
                <em>What I Know?</em>
              </h5>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <IoLogoReact className="text-primary fs-1 animate-icon" />
              <IoLogoHtml5 className="text-danger fs-1 ms-3 animate-icon" />
              <IoLogoCss3 className="text-primary fs-1 ms-3 animate-icon" />
              <IoLogoJavascript className="text-warning fs-1 ms-3 animate-icon" />
              <BiLogoTailwindCss
                className="fs-1 ms-3 animate-icon"
                style={{ color: "aqua" }}
              />
            </div>
            <div className="d-flex justify-content-end mt-4 ms-1">
              <FaNode
                className="text-success animate-icon"
                style={{ fontSize: "50px" }}
              />
              <FaGitAlt className="fs-1 ms-3 animate-icon" style={{ color: "orange" }} />
              <FaAws className="fs-1 ms-3 text-white animate-icon" />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-3 mb-5">
          <Col lg="12" md="12" sm="12">
            <p className="text-white fs-4 fw-bold" style={{textDecoration: "underline"}}>Published Package</p>
            <div style={{ backgroundColor: 'black', borderRadius: '5px' }} className="p-1 mt-4">
              <p className="text-success text-center fs-4 typed-text">npx abishek-baskar</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
