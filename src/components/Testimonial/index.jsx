import React from 'react'
import "./Testimonial.css"
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  
    name: 'John Doe',
    review: `Working with Fahad was an amazing experience. He was able to understand our needs and deliver beyond our expectations. Highly recommended!`
  },
  {
    
    name: 'Jane Doe',
    review: `Fahad is a very talented designer and developer. He helped us to build a stunning website for our business. We are very satisfied with his work.`
  },
  {
  
    name: 'Alice Smith',
    review: `I had a great experience working with Fahad. He is very professional, responsive, and skilled. I would definitely work with him again in the future.`
  },
  {
 
    name: 'Bob Johnson',
    review: `Fahad is a fantastic designer! He understood our requirements perfectly and delivered exactly what we wanted. I highly recommend him for any design projects.`
  }

];


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className='primary__title'>Testimonials</h2>
          <p className='text__muted description'>
            Here are some reviews from our clients
          </p>
        </div>

        <Swiper className="testimonial__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            }
          }}
        >

          {
            data.map(({  name, review }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
             

                  <h3 className='client__name'>{name}</h3>
                  <small className="client__review">
                    {review}
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
