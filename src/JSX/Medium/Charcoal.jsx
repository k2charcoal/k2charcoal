import React from 'react'
import { useNavigate } from "react-router-dom";

import Header from '../Header'
import FooterAbout from '../FooterAbout'
import MCGM from './MCGM'

import '../../CSS/Medium/CharcoalGraphiteMix.css'

import { FaWhatsapp } from "react-icons/fa6"

import FC1 from '../../Asset/CHARCOAL/12.jpg'
import FC2 from '../../Asset/CHARCOAL/13.jpg'
import FC3 from '../../Asset/CHARCOAL/14.jpg'

import FC4 from '../../Asset/CHARCOAL/15.jpg'
import FC5 from '../../Asset/CHARCOAL/16.jpg'
import FC6 from '../../Asset/CHARCOAL/19.jpg'

import FC7 from '../../Asset/CHARCOAL/21.jpg'
import FC8 from '../../Asset/CHARCOAL/20.jpg'

const Charcoal = () => {
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
                <button onClick={() => navigate("/CVenom")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC2} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/CHanumanji")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC3} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/CRadhaKrishnaEye")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC4} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/CCuteKrishna")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC5} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/CKrishnaji")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC6} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/CChhava")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC7} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/CDarkKrishnaji")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC8} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/CMahadev")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>
        </div>
      
        <FooterAbout />
    </>
  )
}

export default Charcoal
