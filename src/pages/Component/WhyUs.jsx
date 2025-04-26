import React from 'react'

export default function WhyUs() {
    return (
        <div>
            <section className='why-us container-fluid py-5 px-5 '>
                <div className='row gap-5'>
                    <div className='col-4'>
                        <div className='d-flex gap-3 align-items-center mb-2'>
                            <h5 className='text-about'>ABOUT US</h5>
                            <span className='text-about-underline'></span>
                        </div>
                        <h2 className='text-dark fs-1 fw-bold mb-3'>Why Ashapurna Is The Best Choice?</h2>
                        <p className="text-muted">
                            We are the leading Real Estate Builder and Developers in Jaipur, Jodhpur & Rajasthan, offering an unparalleled property development experience with a proven track record of excellence and a commitment to customer satisfaction, For those who are seeking quality, affordability, and reliability we are the best choice whether you're looking for a Dream Home or a thriving commercial space, Ashapurna Buildcon has the expertise, resources, and dedication to make your dream into a reality.
                        </p>
                    </div>
                    <div className='col-7 '>
                        <div className='row gap-4'>
                            <div className='col-5  rounded-1 shadow-lg p-4 box-border-b box-color'>
                                <div>
                                    <img src="/images/property.svg" alt="" width={50} height={50} />
                                </div>
                                <span className='icon-border my-2'></span>
                                <h3 className='fs-5 fw-bold'>Property Care Service</h3>
                                <p className='p-whyus-box'>We take care of your home like a true custodian. Our support team is usually there that will help...</p>
                                <a href="#" className='text-decoration-none box-btn'>Read More</a>
                            </div>
                            <div className='col-5  rounded-1 shadow-lg p-4 box-border-b box-color'>
                                <div>
                                    <img src="/images/81a99801-36a5-47ea-b817-151c75ed88a8-1669190370.svg" alt="" width={50} height={50} />
                                </div>
                                <span className='icon-border my-2'></span>
                                <h3 className='fs-5 fw-bold'>Transparent Dealing</h3>
                                <p className='p-whyus-box'>We practice all transparency of the highest order to deal with our customers to achieve different...</p>
                                <a href="#" className='text-decoration-none box-btn'>Read More</a>
                            </div>
                            <div className='col-5  rounded-1 shadow-lg p-4 box-border-b box-color'>
                                <div>
                                    <img src="/images/0e4e1cb5-d8a1-4563-aae9-06ed141ea957-1669190411.svg" alt="" width={50} height={50} />
                                </div>
                                <span className='icon-border my-2'></span>
                                <h3 className='fs-5 fw-bold'>Hospitality</h3>
                                <p className='p-whyus-box'>A warm welcome to our valuable customers is what we take on as the supreme priority.</p>
                                <a href="#" className='text-decoration-none box-btn'>Read More</a>
                            </div>
                            <div className='col-5  rounded-1 shadow-lg p-4 box-border-b box-color'>
                                <div>
                                    <img src="/images/da0c8c7a-33fd-4ef3-b7dc-d402fbe3a19b-1669190444.svg" alt="" width={50} height={50} />
                                </div>
                                <span className='icon-border my-2'></span>
                                <h3 className='fs-5 fw-bold'>Sustainable Homes</h3>
                                <p className='p-whyus-box'>In the present world, Our Aim is to deliver environmental - friendly homes in the city for you...</p>
                                <a href="#" className='text-decoration-none box-btn'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
