import React, { useEffect, useRef } from 'react';
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Services.css";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

  useEffect(() => {
    const el = container.current;

    gsap.fromTo('.service__head',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
        }
      });

    gsap.fromTo('.service',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "-100% bottom",
          end: "bottom 20%",
          scrub: true,
        }
      });
  }, []);

  return (
    <section ref={container} id='services'>
      <div className="section__wrapper services__container">
        <div className="section__header center">
          <h2 className='primary__title service__head'>Services</h2>
          <h3 className="text__muted description service__head">
            I transform your ideas, and consequently your desires, into a distinctive web project that both inspires you and captivates your customers.
          </h3>
        </div>
        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <FaPaintBrush className='icon' />
              </div>
              <h3 className='title'>UI/UX Design</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                I provide creative and intuitive UI/UX designs that enhance user experience and engagement.
              </p>
            </div>
            <div className="service__bottom">
              <button className='btn btn__primary'>Read more</button>
            </div>
          </article>
          {/* END UI/UX */}

          <article className="service" style={{ "--color-primary": 'var(--color-success)' }}>
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className='icon' />
              </div>
              <h3 className='title'>Web Development</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                I specialize in developing responsive, user-friendly, and scalable web applications using modern technologies.
              </p>
            </div>
            <div className="service__bottom">
              <button className='btn btn__primary'>Read more</button>
            </div>
          </article>
          {/* END WEB DEVELOPMENT */}

          <article className="service" style={{ "--color-primary": 'blueviolet' }}>
            <div className="service__top">
              <div className="icon__container">
                <TfiWrite className='icon' />
              </div>
              <h3 className='title'>Content Creation</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                I create engaging and relevant content that resonates with your target audience, helping you achieve your business goals.
              </p>
            </div>
            <div className="service__bottom">
              <button className='btn btn__primary'>Read more</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
