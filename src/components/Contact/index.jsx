import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className='primary__title'>Contact Me</h2>
          <div className="text__muted description">
            <p>Do you have a project you would like to discuss, or need help with your existing project?</p>
            <p>Feel free to reach out to me using any of the options below.</p>
          </div>
        </div>

       <div className="contact__group">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__icon'/>
            <h3>Email</h3>
            <h5>
              fahad@gmail.com
            </h5>
            <a href="mailto:fahad@gmail.com" target='_blank' className='btn'>
              Send an email
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__icon'/>
            <h3>Messenger</h3>
            <h5>
              <a href="https://m.me/yourpage" target='_blank'>
                Click here to send a message
              </a>
            </h5>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__icon'/>
            <h3>
              Whatsapp
            </h3>
              
            <h5>
              <a href="https://wa.me/yournumber" target='_blank'>
                Click here to send a message
              </a>
            </h5>
            <a href="https://wa.me/yournumber" target='_blank' className='btn'>Send a message</a>
          </article>
        </div>

        <form className="contact__form">
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' required/>
          <button type='submit' className='btn btn__primary'>Send Message</button>
        </form>
       </div>
      </div>
    </section>
  )
}

export default Contact
