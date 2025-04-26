import React from 'react'
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <section>
      <footer className='container-fluid m-0'>
        <div class="container">
          <div class="row gap-1">
            <div class="col-lg-3 col-sm-12 col-md-6 custom-border-end m-0 p-0" >
              <figure className='m-0 p-0'>
                <img style={{ width: '150px', height: '100px' }} src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/footer_logo/New_logo_with_iso__(1)-1744808650.svg" alt="" />
              </figure>
              <div className='d-flex align-items-center gap-2 border-1 border-white'>
                <div className='border border-1 border-white p-2 text-white f-icon rounded-1'>
                  <MdCall className='text-white fs-3' />
                </div>
                <div className='p-0'>
                  <h3 className='fs-6 text-white fw-medium'>9314041747</h3>
                  <h3 className='fs-6 text-white fw-medium'>0291-2514747,9610383747</h3>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 border-1 border-white mt-4'>
                <div className='border border-1 border-white p-2 text-white f-icon rounded-1'>
                  <MdEmail className='text-white fs-3' />
                </div>
                <div className='p-0'>
                  <h3 className='fs-6 text-white fw-medium'>marketing@ashapurna.com</h3>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 border-1 border-white mt-4 pb-4'>
                <div className='border border-1 border-white p-2 text-white f-icon rounded-1 '>
                  <FaLocationDot className='text-white fs-3' />
                </div>
                <div className=''>
                  <h3 className='fs-6 text-white fw-medium'>4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12 col-md-6 ">
              <h3 className='text-white fs-4 '>Useful Links</h3>
              <div className='d-flex align-items-center'>
                <div className='usefull-bb'></div>
                <div className='usefull-br'></div>
              </div>
              <div className='d-flex align-item-center flex-wrap mt-2 gap-3'>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize   text-decoration-none text-gray  fw-semibold" href="">Residential Project</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    Commercial projects</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    Investors Club</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    NRI corner</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">Career</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    Become a Partner</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    Our Testimonials</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    Privacy Policy</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">Terms & Conditions</a>
                </div>
              </div>
              <h3 className='text-white fs-4 mt-4 '>Important Links</h3>
              <div className='d-flex align-items-center'>
                <div className='usefull-bb'></div>
                <div className='usefull-br'></div>
              </div>
              <div className='d-flex align-item-center flex-wrap mt-2 gap-3'>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize   text-decoration-none text-gray  fw-semibold" href="">Social Responsibility</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    Corporate Profile</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    Why invest in jodhpur?</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">

                    RERA Disclaimer</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">EMI Calculator</a>
                  <span className=' text-white'>|</span>
                </div>
                <div class="d-flex gap-2 align-content-center">
                  <a class="text-capitalize  text-decoration-none text-gray  fw-semibold" href="">
                    referral Scheme</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='f-bb container'></div>
        <div className='container mt-4'>
          <h3 className='text-white fw-bold fs-4 text-center'>Follow Us On
          </h3>
          <div className='d-flex justify-content-center align-items-center gap-2'>
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light circle-icon">
              <FaFacebookF className="text-dark" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light circle-icon">
              <FaInstagram className="text-dark" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light circle-icon">
              <FaYoutube className="text-dark" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light circle-icon">
              <FaTwitter className="text-dark" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light circle-icon">
              <FaPinterestP className="text-dark" />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light circle-icon">
              <FaLinkedinIn className="text-dark" />
            </div>
          </div>
        </div>
      </footer>
      <section className='container-fluid footer-2-c '>
        <div className='container d-flex align-item-center flex-wrap gap-3 py-5 justify-content-center'>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">real estate developer in jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">top builders in jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">top residental projects in jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              Commercial property in jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              Houses in Rajasthan</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              Flats In Jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              Villas In Jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              Plots In Jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              2BHK Flats In Jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              JDA Property In Jodhpur</a>
            <span className='text-text-dark'>|</span>
          </div>
          <div class="d-flex gap-4 align-content-center">
            <a class="text-capitalize   text-decoration-none text-gray  fw-semibold text-dark" href="">
              Property Type</a>
          </div>
        </div>
        <div className='footer2nd-border ' >
        </div>
        <div className='container'>
          <p className='text-center py-4 mb-0'>The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, if so warranted.</p>
        </div>
      </section>
      <div className='footer3-bg py-3 container-fluid'>
        <div className='container'>
          <h5 className='fs-6'>Copyright © 2023 Ashapurna Buildcon Limited</h5>
        </div>
      </div>
    </section>
  )
}
