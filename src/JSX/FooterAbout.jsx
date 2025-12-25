import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"

import logo from '../Asset/logo1.jpg'
import '../CSS/FooterAbout.css'

const FooterAbout = () => {
    const navigate = useNavigate();
  return (
    <div className="AboutOfHome">
        <div className="CompanyLogo">
            <img src={logo} alt="logo" onClick={() => navigate("/home")}/>
            <div className="IconInstaWhats">
                <div className="InstaIcon">
                    <a href="https://www.instagram.com/k2.charcoal/"target="_blank"rel="noopener noreferrer" >
                    <FaInstagram />
                    </a>
                </div>
                <div className="WhatsappIcon">
                    <a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"target="_blank"rel="noopener noreferrer" >
                    <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
        <div className="TalkToUs">
            <h2>TALK TO US</h2>
            <h3>We are always here for you.</h3>
            <h3>Talk to us on Whatsapp : +91 8160956010</h3>
            <h3>Email us - k2.charcoal@gmail.com</h3>
        </div>
        <div className="Information">
            <h2>INFORMATION</h2>
            <Link to="/About">About Us</Link>
        </div>
    </div>
  )
}

export default FooterAbout
