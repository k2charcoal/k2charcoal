import React from 'react'
import { useNavigate } from "react-router-dom";

import '../../../CSS/MainDetails.css'
import FooterAbout from '../../FooterAbout'

import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import FC1 from '../../../Asset/CHARCOAL + GRAPHITE/23.jpg'
import logo from '../../../Asset/logo2.jpg'

const MGaneshji = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="GThorMain">

        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>LOST IN DETAILS, FOUND IN ART.</h2>
        </div>

        <div className="Detail">

          <div className="ThorImgBox">

            <div className="BackBtn" onClick={() => navigate("/Mixed")}>
              <IoArrowBackCircleOutline />
            </div>

            <img src={FC1} alt="FC1" />
          </div>

          <div className="ThorDetails">
            <p>
                <strong>ART DETAILS — GANESHJI (CHARCOAL + GRAPHITE SKETCH)</strong><br />
                Name: Ganeshji Sketch <br />
                Medium: Charcoal + Graphite <br />
                Size: A4 <br />
                Price: ₹799 <br />
                Disc: 10% OFF <br />
                <b>Final Price: ₹719</b> <br />
                📩 For booking or order, please reply.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="Button">
          <a
            className="Whatsapp"
            href="https://wa.me/8160956010?text=Hello%20K2.charcoal"
          >
            <FaWhatsapp /> Whatsapp
          </a>

          <a
            className="Instagram"
            href="https://www.instagram.com/k2.charcoal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

      </div>
      <FooterAbout />
    </>
  )
}

export default MGaneshji
