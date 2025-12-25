import React from 'react'
import { useNavigate } from "react-router-dom";

import Header from '../Header'
import FooterAbout from '../FooterAbout'
import MCGM from './MCGM'

import '../../CSS/Medium/CharcoalGraphiteMix.css'

import { FaWhatsapp } from "react-icons/fa6"

import FC1 from '../../Asset/CHARCOAL + GRAPHITE/17.jpg'
import FC2 from '../../Asset/CHARCOAL + GRAPHITE/18.jpg'
import FC3 from '../../Asset/CHARCOAL + GRAPHITE/22.jpg'

import FC4 from '../../Asset/CHARCOAL + GRAPHITE/23.jpg'
import FC5 from '../../Asset/CHARCOAL + GRAPHITE/24.jpg'

const Mixed = () => {
    const navigate = useNavigate();
  return (
    <>
        <div id='Home'>
            <Header />
        </div>
        <MCGM />
        
        <div className="AllCharcoalImg">
            <div className="ArtCard">
                <img src={FC1} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/MFirstEye")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC2} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/MSecondEye")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC3} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/MMatsyaAvtar")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC4} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/MGaneshji")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC5} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/MRadhaji")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

        </div>
      
        <FooterAbout />
    </>
  )
}

export default Mixed
