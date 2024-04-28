import React from 'react'
import { menu } from '../../data'
import "./Footer.css"
import { socialHandles } from '../../data'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <footer id="footer">
      <div className="section__wrapper">
        <ul className='nav__link__container'>
          {
            menu.map((list,index)=>(
              <li key={index}>
                <Link
                  className='nav__link'
                  to={list.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >              
                  {list.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="social__handles__container">
          {
            socialHandles.map((list,index)=>(
              <a href={list.link} className="icon__container social__handle" target='_blank' rel='noreferrer' key={index}>
                {list.icon}
              </a>
            ))
          }
        </div>
        <div className="copyright__container">
          <p>&copy; 2024 Fahad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
