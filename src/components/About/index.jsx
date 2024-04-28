import React,{useEffect, useRef} from 'react'
import "./About.css"
import {profile2} from '../../images'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const About = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo('.about__container',{
      scale:0.7,
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
        markers:false,
      }
    }
  )
  },[])
  




  return (
    <section ref={container} id='about'>
      <div className="section__wrapper about__container">
      
          <div className="section__header">
              <h4 className='primary__title'>About Me</h4>
              <h1 className='title'>I am <span className='color__primary'>
                fahad 
                </span></h1>
              <p className="text__muted description">
                  I am a full-stack web developer with a passion for creating
                  responsive,
                interactive, and user-friendly applications. I specialize in React,
                  Node, Express, and MongoDB. I am always looking for new challenges and 
                  opportunities to expand my skill set. I am a quick learner and a team player

              </p>
              <button className="btn btn__primary">Read more</button>
          </div>
      </div>
    </section>
  )
}

export default About
