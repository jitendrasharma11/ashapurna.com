import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Button, NavDropdown, Form, Row, Col } from "react-bootstrap";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [btnShow, setBtnShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setBtnShow(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    if (!isMobile) {
      if (menu === "about") setAboutDropdown(true);
      if (menu === "projects") setProjectsDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setAboutDropdown(false);
      setProjectsDropdown(false);
    }
  };

  const handleClick = (menu) => {
    if (isMobile) {
      if (menu === "about") setAboutDropdown(!aboutDropdown);
      if (menu === "projects") setProjectsDropdown(!projectsDropdown);
    }
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="bg-white shadow-lg">
        <Navbar.Brand href="/">
          <img src="/images/New_logo_with_iso_-1744808958.webp" width={100} alt="Logo" />
        </Navbar.Brand>
        <Button
          variant="light"
          className="d-lg-none border-0"
          onClick={() => setShowOffcanvas(true)}
        >
          <CiMenuBurger className="fs-2" />
        </Button>

        <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
          <Nav className="gap-4 align-items-center">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown
              title="About Us"
              id="about-us-dropdown"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
              show={aboutDropdown}
            >
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/journey">Our Journey</NavDropdown.Item>
              <NavDropdown.Item href="/management">Management Speaks</NavDropdown.Item>
              <NavDropdown.Item href="/team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/csr">CRS Social Responsibility</NavDropdown.Item>
              <NavDropdown.Item href="/newsletter">Newsletter</NavDropdown.Item>
              <NavDropdown.Item href="/nri-corner">NRI Corner</NavDropdown.Item>
              <NavDropdown.Item href="/invest-jodhpur">Why Invest in Jodhpur</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Projects"
              id="projects-dropdown"
              onMouseEnter={() => handleMouseEnter("projects")}
              onMouseLeave={handleMouseLeave}
              show={projectsDropdown}
            >
              <NavDropdown.Item href="/residential">Residential</NavDropdown.Item>
              <NavDropdown.Item href="/commercial">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="/rental">Rental & Lease</NavDropdown.Item>
              <NavDropdown.Item href="/hospitality">Hospitality</NavDropdown.Item>
              <NavDropdown.Item href="/education">Education</NavDropdown.Item>
              <NavDropdown.Item href="/windmills">Windmills</NavDropdown.Item>
              <NavDropdown.Item href="/nri-township">NRI Township</NavDropdown.Item>
              <NavDropdown.Item href="/upcoming">Upcoming Projects</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/media">Media and Events</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>

            <Button className="bg-[#be8553] border-0 text-uppercase fw-semibold px-4 py-2">
              Enquire
            </Button>
          </Nav>
        </Navbar.Collapse>

        {/* Mobile Menu */}
        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          placement="start"
          className="w-75"
        >
          <Offcanvas.Header>
            <Offcanvas.Title>
              <img src="/images/New_logo_with_iso_-1744808958.webp" width={135} alt="Logo" />
            </Offcanvas.Title>
            <Button variant="light" onClick={() => setShowOffcanvas(false)} className="border-0">
              <IoMdClose size={28} />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column gap-3">
              <Nav.Link href="/" onClick={() => setShowOffcanvas(false)}>Home</Nav.Link>

              <div>
                <div onClick={() => handleClick("about")} className="d-flex justify-content-between">
                  About Us <span>{aboutDropdown ? "-" : "+"}</span>
                </div>
                {aboutDropdown && (
                  <div className="ps-3">
                    <Nav.Link href="/about" onClick={() => setShowOffcanvas(false)}>About Us</Nav.Link>
                    <Nav.Link href="/journey" onClick={() => setShowOffcanvas(false)}>Our Journey</Nav.Link>
                    <Nav.Link href="/management" onClick={() => setShowOffcanvas(false)}>Management Speaks</Nav.Link>
                    <Nav.Link href="/team" onClick={() => setShowOffcanvas(false)}>Our Team</Nav.Link>
                  </div>
                )}
              </div>

              <div>
                <div onClick={() => handleClick("projects")} className="d-flex justify-content-between">
                  Projects <span>{projectsDropdown ? "-" : "+"}</span>
                </div>
                {projectsDropdown && (
                  <div className="ps-3">
                    <Nav.Link href="/residential" onClick={() => setShowOffcanvas(false)}>Residential</Nav.Link>
                    <Nav.Link href="/commercial" onClick={() => setShowOffcanvas(false)}>Commercial</Nav.Link>
                    <Nav.Link href="/rental" onClick={() => setShowOffcanvas(false)}>Rental & Lease</Nav.Link>
                    <Nav.Link href="/hospitality" onClick={() => setShowOffcanvas(false)}>Hospitality</Nav.Link>
                  </div>
                )}
              </div>

              <Nav.Link href="/media" onClick={() => setShowOffcanvas(false)}>Media</Nav.Link>
              <Nav.Link href="/blogs" onClick={() => setShowOffcanvas(false)}>Blogs</Nav.Link>
              <Nav.Link href="/contact" onClick={() => setShowOffcanvas(false)}>Contact Us</Nav.Link>

              {/* Social Media Links */}
              <div className="pt-3 border-top">
                <p className="fw-bold text-uppercase text-[#be8553] mb-2">Social Connect</p>
                <div className="d-flex gap-2">
                  <div className="bg-dark text-white rounded-circle p-2"><FaFacebookF /></div>
                  <div className="bg-dark text-white rounded-circle p-2"><FaTwitter /></div>
                  <div className="bg-dark text-white rounded-circle p-2"><FaInstagram /></div>
                  <div className="bg-dark text-white rounded-circle p-2"><FaLinkedinIn /></div>
                  <div className="bg-dark text-white rounded-circle p-2"><FaYoutube /></div>
                </div>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>

      {/* Enquire Button and Modal */}
      {btnShow && (
        <>
          <button className="window-btn" onClick={() => setShowModal(!showModal)}>
            ENQUIRE
          </button>

          <section className={`model ${showModal ? "showmodelcss" : ""}`}>
            <div className="row m-0">
              <div className="col-12 col-md-6 p-0">
                <img
                  src="/images/pop-image.jpg"
                  className="img-fluid object-fit-cover w-100 h-100"
                  alt="Enquiry"
                />
              </div>
              <div className="col-12 col-md-6 px-4 py-2">
                <div className="d-flex justify-content-between">
                  <h3>Enquire Now</h3>
                  <RxCross1 className="fw-bold fs-5 cursor-pointer" onClick={() => setShowModal(false)} />
                </div>
                <p>Feel free to connect with us. We will contact you shortly.</p>

                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formPhone">
                        <Form.Control type="text" placeholder="Phone" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formSelectProperty">
                        <Form.Select>
                          <option>Select Property</option>
                          <option value="1">Property 1</option>
                          <option value="2">Property 2</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="formQuery">
                        <Form.Control as="textarea" rows={4} placeholder="Explain Your Query" />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="text-center">
                      <Button
                        type="submit"
                        className="px-4 py-2"
                        style={{ backgroundColor: "#b97a45", borderColor: "#b97a45" }}
                      >
                        SUBMIT
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}