import React from 'react'
import { LuQuote } from "react-icons/lu";
import Carousel from 'react-bootstrap/Carousel';

export default function Testimonial() {
    return (
        <section className='container-fluid bg-dark py-5 my-5'>
            <div className='row container py-5 px-5'>
                <div className='col-5'>
                    <div className='d-flex gap-3 align-items-center mb-2'>
                        <h5 className='text-about'>OUR TESTIMONIALS</h5>
                        <span className='text-about-underline'></span>
                    </div>
                    <h2 className='text-white fs-1 fw-bold mb-3'>What They're Saying About Ashapurna?</h2>
                    <p className="text-white">
                    With 28+ years of experience, we have delivered quality projects that bring joy to our customers. Each testimonial reflects our commitment to excellence, transparency, and customer satisfaction. Join the Ashapurna family and experience a life built on trust and happiness.
                    </p>
                    <button className='px-5 testimonial-btn'> See All</button>
                </div>

                <div className='col-7 position-relative'>
                    
                    <div className='dark-circle position-absolute'></div>
                    <div className='bg-white position-absolute white-bg'>
                        <div className='position-absolute text-p'>
                        <h5 className='fw-bold mb-0'>Col GR Choudhary</h5>
                        <p className='fw-medium'>Ashapurna MohanBagh</p>
                        </div>    
                        <LuQuote className='position-absolute quote-icon' />
                    </div>
                    <p className='position-absolute p-setup'>Owning a home at Ashapurna MohanBagh has been a wonderful experience. Modern amenities and well-planned infrastructure create the perfect living environment. I couldn’t have asked for a better place to call home. Thank you, Ashapurna, for making my dream a reality!"</p>
                    <div className='position-absolute brown-circle'>
                        <img src="/images/WhatsApp_Image_2025-02-08_at_18.20.04-1739353783.jpeg" className='img-round position-absolute' alt="" />
                    </div>  
                </div>
            </div>
        </section>
    )
}
