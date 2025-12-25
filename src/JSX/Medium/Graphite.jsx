import React from 'react'
import { useNavigate } from "react-router-dom";


import Header from '../Header'
import FooterAbout from '../FooterAbout'
import MCGM from './MCGM'

import '../../CSS/Medium/CharcoalGraphiteMix.css'

import { FaWhatsapp } from "react-icons/fa6"

import FC1 from '../../Asset/GRAPHITE/1.jpg'
import FC2 from '../../Asset/GRAPHITE/2.jpg'
import FC3 from '../../Asset/GRAPHITE/3.jpg'

import FC4 from '../../Asset/GRAPHITE/4.jpg'
import FC5 from '../../Asset/GRAPHITE/5.jpg'
import FC6 from '../../Asset/GRAPHITE/6.jpg'

import FC7 from '../../Asset/GRAPHITE/7.jpg'
import FC8 from '../../Asset/GRAPHITE/8.jpg'
import FC9 from '../../Asset/GRAPHITE/9.jpg'

import FC10 from '../../Asset/GRAPHITE/10.jpg'
import FC11 from '../../Asset/GRAPHITE/11.jpg'


const Graphite = () => {
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
                <button onClick={() => navigate("/GThor")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC2} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GCaption")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC3} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GSpiderman")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC4} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GFlash")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC5} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GTomAndJerry")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC6} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GHanumanji")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC7} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GGroot")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC8} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GMrBean")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC9} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GHorse")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC10} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GGojo")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>

            <div className="ArtCard">
                <img src={FC11} alt="" />
                <div className="ButtonOfImg">
                <button onClick={() => navigate("/GIronman")}>Details</button>
                <button><a href="https://wa.me/8160956010?text=Hello%20K2.charcoal"><FaWhatsapp /> Whatsapp</a></button>
                </div>
            </div>
        </div>
      
        <FooterAbout />
    </>
  )
}

export default Graphite
