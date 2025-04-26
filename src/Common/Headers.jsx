import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (menu) => {
    if (!isMobile) setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setOpenMenu("");
  };

  const handleClick = (menu) => {
    if (isMobile) setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-sm  ">
        <div className="container">
          <Navbar.Brand href="/"><img src="/images/New_logo_with_iso_-1744808958.webp" width={120} alt="" /></Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Button variant="light" className="d-lg-none border-0" onClick={() => setShow(true)}>
            <FaBars size={28} />
          </Button>

          {/* Desktop Nav */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end d-none d-lg-flex">
            <Nav className="align-items-center gap-4">
              <Nav.Link href="/">Home</Nav.Link>

              {/* About Us Dropdown */}
              <div
                className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="nav-link dropdown-toggle">About Us</span>
                <div className={`dropdown-menu ${openMenu === "about" ? "show" : ""}`}>
                  <Nav.Link href="/about">About Us</Nav.Link>
                  <Nav.Link href="/journey">Our Journey</Nav.Link>
                  <Nav.Link href="/team">Our Team</Nav.Link>
                </div>
              </div>

              {/* Projects Dropdown */}
              <div
                className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter("projects")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="nav-link dropdown-toggle">Projects</span>
                <div className={`dropdown-menu ${openMenu === "projects" ? "show" : ""}`}>
                  <Nav.Link href="/projects">All Projects</Nav.Link>
                  <Nav.Link href="/ongoing">Ongoing</Nav.Link>
                  <Nav.Link href="/completed">Completed</Nav.Link>
                </div>
              </div>

              <Nav.Link href="/media">Media</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start" className="w-75">
        <Offcanvas.Header>
          <Offcanvas.Title>LOGO</Offcanvas.Title>
          <Button variant="light" onClick={() => setShow(false)} className="border-0">
            <FaTimes size={28} />
          </Button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link href="/" onClick={() => setShow(false)}>Home</Nav.Link>

            {/* Mobile Clickable About Us */}
            <div>
              <div onClick={() => handleClick("about")} className="d-flex justify-content-between">
                About Us <span>{openMenu === "about" ? "-" : "+"}</span>
              </div>
              {openMenu === "about" && (
                <div className="ps-3">
                  <Nav.Link href="/about" onClick={() => setShow(false)}>About Us</Nav.Link>
                  <Nav.Link href="/journey" onClick={() => setShow(false)}>Our Journey</Nav.Link>
                  <Nav.Link href="/team" onClick={() => setShow(false)}>Our Team</Nav.Link>
                </div>
              )}
            </div>

            {/* Mobile Clickable Projects */}
            <div>
              <div onClick={() => handleClick("projects")} className="d-flex justify-content-between">
                Projects <span>{openMenu === "projects" ? "-" : "+"}</span>
              </div>
              {openMenu === "projects" && (
                <div className="ps-3">
                  <Nav.Link href="/projects" onClick={() => setShow(false)}>All Projects</Nav.Link>
                  <Nav.Link href="/ongoing" onClick={() => setShow(false)}>Ongoing</Nav.Link>
                  <Nav.Link href="/completed" onClick={() => setShow(false)}>Completed</Nav.Link>
                </div>
              )}
            </div>

            <Nav.Link href="/media" onClick={() => setShow(false)}>Media</Nav.Link>
            <Nav.Link href="/blogs" onClick={() => setShow(false)}>Blogs</Nav.Link>
            <Nav.Link href="/contact" onClick={() => setShow(false)}>Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}