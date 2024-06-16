import React from "react";
import { Col, Container, Row } from "reactstrap";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import './Contact.css'; 

const Contact = () => {
  const email = "bv.abishek@gmail.com";
  const whatsappNumber = "9962313564";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  return (
    <Row className="mt-5 pt-5 pb-5">
      <Col lg="12" md="12" sm="12">
        <div className="d-flex justify-content-center">
          <h4 className="text-white">Contact Me</h4>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <MdOutlineMailOutline
            className="fs-2 text-white grow-shrink-icon-1"
            onClick={handleEmailClick}
            style={{ cursor: "pointer" }}
          />
          <IoLogoWhatsapp
            className="fs-2 text-white grow-shrink-icon-2 ms-4"
            onClick={handleWhatsAppClick}
            style={{ cursor: "pointer" }}
          />
        </div>
          <p className="text-white text-center mt-4 fs-5">Lets connect!🤗</p>
      </Col>
    </Row>
  );
};

export default Contact;
