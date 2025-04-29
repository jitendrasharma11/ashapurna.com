import React, { useState } from 'react';
import { Carousel, Modal, Form, Button } from 'react-bootstrap';
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
import AboutSection from './Component/Aboutsection';
import WhyUs from './Component/WhyUs';
import OurWork from './Component/OurWork';
import ProjectOverview from './Component/ProjectOverview';
import Testimonial from './Component/Testimonial';
import Mediasection from './Component/Mediasection';


export default function Home() {


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
      <AboutSection />
      <WhyUs />
      <OurWork />
      <ProjectOverview />
      <Testimonial/>
      <Mediasection/>
    </section>
  );
}