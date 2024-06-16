import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { HiMenu } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const scrollToProject = () => {
    scroll.scrollTo(window.innerHeight, {
      duration: 200,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  const scrollToAbout = () => {
    scroll.scrollTo(window.innerHeight, {
      duration: 200,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToEnd = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar className="bg-dark" expand="md">
        <HiMenu onClick={toggle} className="text-white fs-4 d-md-none" />
        <Collapse isOpen={open} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#" className="text-white">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#projects"
                onClick={scrollToProject}
                className="text-white"
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#about"
                onClick={scrollToEnd}
                className="text-white"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#contact"
                onClick={scrollToEnd}
                className="text-white"
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
