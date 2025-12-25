import React from 'react'
import { useNavigate } from "react-router-dom";

import Header from '../Header'
import FooterAbout from '../FooterAbout'

import '../../CSS/Medium/MCGM.css'

import { FaWhatsapp } from "react-icons/fa6"

import FCharcoal from '../../Asset/CHARCOAL/12.jpg'
import FGraphite from '../../Asset/GRAPHITE/1.jpg'
import FMixed from '../../Asset/CHARCOAL + GRAPHITE/17.jpg'

import SCharcoal from '../../Asset/CHARCOAL/13.jpg'
import SGraphite from '../../Asset/GRAPHITE/2.jpg'
import SMixed from '../../Asset/CHARCOAL + GRAPHITE/18.jpg'
import MCGM from './MCGM'


const MediumHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id='Home'>
        <Header />
      </div>

      <MCGM />

      <div className="SomeImg">
              <div className="ArtCard">
                <img src={FCharcoal} alt="Charcoal Art" />
                <div className="ButtonParent">
                  <button onClick={() => navigate("/CVenom")}>Details</button>
                  <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
              </div>
      
              <div className="ArtCard">
                <img src={FGraphite} alt="Graphite Art" />
                <div className="ButtonParent">
                  <button onClick={() => navigate("/GThor")}>Details</button>
                  <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
              </div>
      
              <div className="ArtCard">
                <img src={FMixed} alt="Mixed Art" />
                <div className="ButtonParent">
                  <button onClick={() => navigate("/MFirstEye")}>Details</button>
                  <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
              </div>
      
              <div className="ArtCard">
                <img src={SCharcoal} alt="Ink Art" />
                <div className="ButtonParent">
                  <button onClick={() => navigate("/CHanumanji")}>Details</button>
                  <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
              </div>
      
              <div className="ArtCard">
                <img src={SGraphite} alt="Oil Art" />
                <div className="ButtonParent">
                  <button onClick={() => navigate("/GCaption")}>Details</button>
                  <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
              </div>
      
              <div className="ArtCard">
                <img src={SMixed} alt="Pencil Art" />
                <div className="ButtonParent">
                  <button onClick={() => navigate("/MSecondEye")}>Details</button>
                  <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
              </div>
            </div>

      <FooterAbout />
    </>
  )
}

export default MediumHome
