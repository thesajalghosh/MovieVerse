import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import ContentWrapper from '../contentWrapper/ContentWrapper'

const Footer = () => {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className='footer__menuItems'>
          <li className='footer__menuItem'>Terms Of Use</li>
          <li className='footer__menuItem'>Privacy Policy</li>
          <li className='footer__menuItem'>About</li>
          <li className='footer__menuItem'>Blog</li>
          <li className='footer__menuItem'>FAQ</li>
        </ul>
        <div className='infoText'>
          A movie is an electronic signal of moving graphics, pictures, or text used to combine a steady stream of images used for entertainment, education, or other uses. This term describes content that's longer than ten minutes, or something you would watch on your TV or at the theater. Whereas video describes short clips or files on the Internet, see the video definition for further information and online example.

        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebook />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
