import React, { useState } from 'react';
import { Carousel, Modal, Form, Button } from 'react-bootstrap';
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
import AboutSection from './Component/Aboutsection';
import WhyUs from './Component/WhyUs';
import OurWork from './Component/OurWork';
import ProjectOverview from './Component/ProjectOverview';


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <section className='container-fluid p-0'>
      {/* Carousel Section */}
      <Carousel className='slid-banner'>
        <Carousel.Item>
          <img src="images/awards_banner-min-1714394299.jpg" className='img-fluid w-100' alt="Awards banner" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/WhatsApp_Image_2025-01-02_at_16.48.35_(1)-1735816827.jpeg" className='img-fluid w-100' alt="WhatsApp image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/web_banner_heritage_3_(1)-1724664835.jpg" className='img-fluid w-100' alt="Heritage banner" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/nri_web_banner_(1)-1724664784.jpg" className='img-fluid w-100' alt="NRI banner" />
        </Carousel.Item>
      </Carousel>

      {/* Form Section */}
      <section className='form-section shadow py-3 px-3 my-2'>
        <form action="" className='d-flex gap-3 '>
          <input type="text" placeholder='Name' className='form-width ' />
          <input type="email" placeholder='Email' className='form-width ' />
          <input type="tel" placeholder='Number' className='form-width ' />
          <select className='form-width ' aria-label="Property selection">
            <option>Select Property</option>
            <option value="1">Ashapurna NRI</option>
            <option value="2">Ashapurna Township</option>
          </select>
          <input type="text" placeholder='Explain Your Query' className='form-width ' />
          <button className='form-btn'>Submit</button>
        </form>
      </section>

      {/* Enquire Button */}
      <button className='window-btn' onClick={handleShow}>
        ENQUIRE
      </button>

      {/* Modal Form */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className='d-flex container'>
          <div>
            <img src="images/360_F_762684605_iNXUXTV1gnWma7v4DJdPHnPxgsEWCPIf.jpg" className='img-fluid' alt="" />
          </div>
          <div>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Title className="fw-bold">Enquire Now</Modal.Title>
            <p className="text-muted mb-4">
              Feel free to connect with us. We will contact with you shortly.
            </p>

            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formProperty">
                <Form.Label>Select Property</Form.Label>
                <Form.Select>
                  <option>Select Property</option>
                  <option>Ashapurna NRI</option>
                  <option>Ashapurna Township</option>
                  <option>Ashapurna Heights</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formQuery">
                <Form.Label>Explain Your Query</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" className="px-4">
                  SUBMIT
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <AboutSection/>
      <WhyUs/>
      <OurWork/>
      <ProjectOverview/>
    </section>
  );
}