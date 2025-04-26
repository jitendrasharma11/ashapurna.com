import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './Product'

import Header from './Header'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';



function App() {


  return (
    <>
      <Header />

      <Container fluid className='border border-1 border-danger py-5'>
        <Carousel>
          <Carousel.Item>
            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/awards_banner-min-1714394299.jpg" className='img-fluid' alt="" />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/awards_banner-min-1714394299.jpg" className='img-fluid' alt="" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/awards_banner-min-1714394299.jpg" className='img-fluid' alt="" />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Container>

      <h1 className='text-danger text-center py-4'>home</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nobis eum facere possimus non voluptas officiis? Vitae doloribus ipsa eveniet maiores aperiam aspernatur dolorem repellat, fuga dolorum ea temporibus eum.
          </div>

          <div className='col-lg-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nobis eum facere possimus non voluptas officiis? Vitae doloribus ipsa eveniet maiores aperiam aspernatur dolorem repellat, fuga dolorum ea temporibus eum.
          </div>
          <div className='col-lg-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nobis eum facere possimus non voluptas officiis? Vitae doloribus ipsa eveniet maiores aperiam aspernatur dolorem repellat, fuga dolorum ea temporibus eum.
          </div>
          <div className='col-lg-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nobis eum facere possimus non voluptas officiis? Vitae doloribus ipsa eveniet maiores aperiam aspernatur dolorem repellat, fuga dolorum ea temporibus eum.
          </div>
        </div>
      </div>
      <Product />
    </>
  )
}

export default App
