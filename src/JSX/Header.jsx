import React from 'react'
import { Link } from "react-router-dom";

import '../CSS/Header.css'
import logo from '../Asset/logo1.jpg'

import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"

const Header = () => {
  return (
    <>
      <div className='MainHeader'>
        <div className="EmailID">
          <a href="mailto:k2.charcoal@gmail.com">k2.charcoal@gmail.com</a>
        </div>

          <div className="InstaWhatsParent">
          <div className="InstagramID">
              <a href="https://www.instagram.com/k2.charcoal/"target="_blank"rel="noopener noreferrer" >
              <FaInstagram />
              </a>
          </div>

          <div className="Whatsapp">
              <a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"target="_blank"rel="noopener noreferrer" >
              <FaWhatsapp />
              </a>
          </div>
          </div>
      </div>

      <div className="MiddleHeader">
        <div className="LeftBrand">
          <div className="Image">
            <img src={logo} alt="Logo" />
          </div>
          <div className="Name">
            <h1>K2CHARCOAL</h1>
          </div>
        </div>

        <nav className="NavMenu">
          <Link to="/Home">HOME</Link>
          <Link to="/MediumHome">MEDIUM</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/OrderProcess">ORDER PROCESS</Link>
          <Link to="/MyAllWork">WORK</Link>
        </nav>
      </div>

    </>
  )
}

export default Header
