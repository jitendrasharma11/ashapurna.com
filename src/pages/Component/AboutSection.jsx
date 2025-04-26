import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

export default function AboutSection() {
    return (
        <div>
            <section>
                {/* About Section */}
                <div className='container-fluid py-5 px-5 position-relative'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <img src="images/aboutus.webp" className='img-fluid rounded' alt="About Us" />
                        </div>
                        <div className='col-md-7 mt-5'>
                            <div className='d-flex gap-3 align-items-center mb-2'>
                                <h5 className='text-about'>ABOUT US</h5>
                                <span className='text-about-underline'></span>
                            </div>
                            <h2 className='text-dark fs-1 fw-bold mb-3'>Welcome to Ashapurna</h2>
                            <p className="text-muted">
                                Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.
                            </p>
                            <p className="text-muted">
                                In a relatively short period, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories, Mix segments, and affordable homes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Counter Section */}
                <div className="count-section py-3 position-absolute">
                    <Container>
                        <Row className="text-center justify-content-center gy-4">
                            {/* Years of Experience */}
                            <Col className="d-flex flex-column align-items-center justify-content-center ">
                                <div className="count-icon d-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px" }}>
                                    <img src="/images/experience-check.png" alt="Experience" className="img-fluid" style={{ maxHeight: "50px" }} />
                                </div>
                                <h3 className="fw-bold">
                                    <CountUp end={28} duration={5} />+
                                </h3>
                                <p className="text-muted small">Years Of Experience</p>
                            </Col>

                            {/* Projects */}
                            <Col className="d-flex flex-column align-items-center justify-content-center ">
                                <div className="count-icon d-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px" }}>
                                    <img src="/images/property.svg" alt="Experience" className="img-fluid" style={{ maxHeight: "50px" }} />
                                </div>
                                <h3 className="fw-bold">
                                    <CountUp end={45} duration={5} />+
                                </h3>
                                <p className="text-muted small">Projects</p>
                            </Col>

                            {/* Happy Families */}
                            <Col className="d-flex flex-column align-items-center justify-content-center ">
                                <div className="count-icon d-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px" }}>
                                    <img src="/images/happy (5).png" alt="Experience" className="img-fluid" style={{ maxHeight: "50px" }} />
                                </div>
                                <h3 className="fw-bold">
                                    <CountUp end={30000} duration={5} />+
                                </h3>
                                <p className="text-muted small">Happy Families</p>
                            </Col>

                            {/* Lakh Sq.Ft Delivered */}
                            <Col className="d-flex flex-column align-items-center justify-content-center ">
                                <div className="count-icon d-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px" }}>
                                    <img src="/images/measuring-tape.png" alt="Experience" className="img-fluid" style={{ maxHeight: "50px" }} />
                                </div>
                                <h3 className="fw-bold">
                                    <CountUp end={140} duration={5} />+
                                </h3>
                                <p className="text-muted small">Lakh Sq.Ft Delivered</p>
                            </Col>

                            {/* Units */}
                            <Col className="d-flex flex-column align-items-center justify-content-center ">
                                <div className="count-icon d-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px" }}>
                                    <img src="/images/units.png" alt="Experience" className="img-fluid" style={{ maxHeight: "50px" }} />
                                </div>
                                <h3 className="fw-bold">
                                    <CountUp end={13500} duration={5} />+
                                </h3>
                                <p className="text-muted small">Units</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}
