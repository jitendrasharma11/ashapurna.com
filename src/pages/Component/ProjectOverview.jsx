import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function ProjectOverview() {
    return (
        <div>
            <section className='overview container-fluid py-5 px-5'>
                <div className="d-flex gap-3 align-items-center mb-2">
                    <h5 className="text-about">PROJECT OVERVIEW</h5>
                    <span className="text-about-underline"></span>
                </div>

                <h3 className="fs-2">Ready & Nearing Completion Projects</h3>

                <p>
                    Meticulously crafted and emotionally designed, Ashapurna villas & flats are the perfect place to be in.<br />
                    A lifestyle benchmark in Rajasthan, today and tomorrow, our successful communities are our biggest achievement.
                </p>

                <div className="row px-5 mt-5">
                    <div className="col-4">
                        <div className="overview-section p-2 rounded-1 shadow-lg position-relative">
                            <img src="images/Gate_-_4-min-1716280216.jpg" className="img-fluid object-fit-cover fixed-image-height" alt="..." />
                            <div className="position-absolute overview-btn">
                                <button>Booking Open</button>
                            </div>
                            <div className="overview-hover rounded-1 shadow-lg position-absolute over">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="/images/mb_logo_a-1699176365.jpg" alt="" width={25} height={25} />
                                    <h5 className="fs-6 mb-0">Ashapurna Mohan Bagh</h5>
                                </div>
                                <div className="d-flex gap-1 mt-2 align-items-center">
                                    <FaLocationDot />
                                    <p className="mb-0">Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan</p>
                                </div>
                                <div className="hidden-div d-flex justify-content-between align-items-center mt-2 d-none">
                                    <div className="d-flex gap-1 align-items-center">
                                        <FaHome />
                                        <p className="mb-0">Booking Open</p>
                                    </div>
                                    <button className="booking-btn2 mb-0 rounded-1 bg-gradient">See All</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="overview-section p-2 rounded-1 shadow-lg position-relative">
                            <img src="images/premium-budget-villas-in-jodhpur-1681994380.webp" className="img-fluid object-fit-cover fixed-image-height" alt="..." />
                            <div className="position-absolute overview-btn">
                                <button className='bg-btn-red'>Few Units left</button>
                            </div>
                            <div className="overview-hover rounded-1 shadow-lg position-absolute">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="/images/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp" alt="" width={25} height={25} />
                                    <h5 className="fs-6 mb-0">Ashapurna Anmol I,II,III</h5>
                                </div>
                                <div className="d-flex gap-1 mt-2 align-items-center">
                                    <FaLocationDot />
                                    <p className="mb-0">Near New High Court , Jodhpur</p>
                                </div>
                                <div className="hidden-div d-flex justify-content-between align-items-center mt-2 d-none">
                                    <div className="d-flex gap-1 align-items-center">
                                        <FaHome />
                                        <p className="mb-0">Few Units Left</p>
                                    </div>
                                    <button className="booking-btn2 mb-0 rounded-1 bg-gradient">See All</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="overview-section p-2 rounded-1 shadow-lg position-relative">
                            <img src="images/nanomax-project-thumbnail-1681986809.webp" className="img-fluid object-fit-cover fixed-image-height" alt="..." />
                            <div className="position-absolute overview-btn">
                                <button className='bg-btn-red'>Few Units left</button>
                            </div>
                            <div className="overview-hover rounded-1 shadow-lg position-absolute">
                                <div className="d-flex align-items-center gap-2">
                                    <img src="/images/ashapurna-nanomax-ii-logo-1677494586.webp" alt="" width={25} height={25} />
                                    <h5 className="fs-6 mb-0">Ashapurna Nanomax II</h5>
                                </div>
                                <div className="d-flex gap-1 mt-2 align-items-center">
                                    <FaLocationDot />
                                    <p className="mb-0">Jodhpur, Rajasthan 342015, India</p>
                                </div>
                                <div className="hidden-div d-flex justify-content-between align-items-center mt-2 d-none">
                                    <div className="d-flex gap-1 align-items-center">
                                        <FaHome />
                                        <p className="mb-0">Booking Open</p>
                                    </div>
                                    <button className="booking-btn2 mb-0 rounded-1 bg-gradient">See All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
