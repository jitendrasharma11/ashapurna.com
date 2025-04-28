import React, { useState } from 'react';
import { Carousel, Modal, Form, Button } from 'react-bootstrap';
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
import AboutSection from './Component/Aboutsection';
import WhyUs from './Component/WhyUs';
import OurWork from './Component/OurWork';
import ProjectOverview from './Component/ProjectOverview';
import { RxCross1 } from "react-icons/rx";
import Testimonial from './Component/Testimonial';
import Mediasection from './Component/Mediasection';


export default function Home() {

  const [showModal, setShowModal] = useState(false);

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
      <button className='window-btn' onClick={()=>{
        setShowModal(!showModal)
      }} >
        ENQUIRE
      </button>

      {/* Modal Form */}
      <section className={`model ${ showModal ? 'showmodelcss' : '' } `}>
        <div className='row '>
          <div className='col-6'>
            <img src="images/pop-image.jpg" className='img-fluid object-fit-cover w-100 h-100' alt="" />
          </div>
          <div className='col-6 px-4 py-2'>
            <div className='d-flex justify-content-between cursor-pointer'>
              <h3>Enquire Now</h3>
              <RxCross1 className='fw-bold fs-5 cursor-pointer' onClick={()=>{
                setShowModal(false)
              }} />
            </div>
            <p>Feel free to connect with us. We will contact with you shortly.</p>
            
              <Form  style={{ maxWidth: "600px", margin: "auto" }}>
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
      <AboutSection />
      <WhyUs />
      <OurWork />
      <ProjectOverview />
      <Testimonial/>
      <Mediasection/>
    </section>
  );
}