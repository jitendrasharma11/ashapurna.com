import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

export default function Mediasection() {
    return (
        <section className="py-5 bg-white">
  <div className="container">
    <div className="row g-4">
      
      <div className="col-md-4">
        <div className="card h-100 shadow-sm"> 
          <img src="/images/Basera_Stapanna_Banner-1739016338.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="fs-6">Murti Pran Pratishtha Ceremony at Ashapurna...</h5>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaMapMarkerAlt className="icon-color" />
              <p className="mb-0">Ashapurna Basera</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaClock className="icon-color" />
              <p className="mb-0">2025-01-31</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 shadow-sm">
          <img src="/images/Republic_day_banner-1739014715.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="fs-6">Ashapurna Buildcon Celebrates Republic Day</h5>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaMapMarkerAlt className="icon-color" />
              <p className="mb-0">Ashapurna Buildcon</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaClock className="icon-color" />
              <p className="mb-0">2025-01-26</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 shadow-sm">
          <img src="/images/Doctors_meet_and_greet_event_banner-1735802820.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="fs-6">Doctor’s Meet & Greet Cocktail Party</h5>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaMapMarkerAlt className="icon-color" />
              <p className="mb-0">Ashapurna NRI</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaClock className="icon-color" />
              <p className="mb-0">2025-01-29</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    )
}
