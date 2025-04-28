import React from 'react'

export default function Testimonial() {
    return (
        <section className='container-fluid bg-dark py-5'>
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
            </div>
        </section>
    )
}
