import React from 'react'
import Header from './Header';
import FooterAbout from './FooterAbout';

import AboutMe from '../Asset/Me.jpg'
import '../CSS/About.css'

import signature from '../Asset/signature.png'

const About = () => {
  return (
    <>
        <div id='About'>
        <Header />
        </div>

        <div className="AbooutMe">
          <div className="MySelf">
            <img src={AboutMe} alt="About Me" />
            <h1>Krish Kalathiya</h1>
            <p><q>LOST IN DETAILS, FOUND IN ART.</q></p>
          </div>

          <p>
            Welcome to K2.CHARCOAL — a space where art is not merely observed, but deeply experienced.
            <br /><br />
            Founded in 2025, K2.CHARCOAL emerged from a personal pursuit shaped by self-belief, independent effort, and a commitment to meaningful creation. What began as a quiet side endeavor has evolved into a dedicated practice focused on authentic expression through charcoal and graphite.
            <br /><br />
            At K2.CHARCOAL, each artwork is guided by intention and depth. The practice explores deity, spirituality, symbolism, and artistic abstraction, favoring emotion, form, and concept over portraiture. Every piece is developed with patience, allowing the medium to speak in its own raw and honest language.
            <br /><br />
            The vision is clear and uncompromising: to deliver the highest quality of work to every client. Each artwork is approached as a responsibility—executed with precision, respect, and thoughtful craftsmanship for those who choose to live with it.
            <br /><br />
            K2.CHARCOAL is not driven by trends or mass production. It is rooted in fidelity to process, material, and meaning—embracing the quiet strength, depth, and subtle power that charcoal and graphite uniquely convey.
            <br /><br />
            K2.CHARCOAL represents self-made artistry, disciplined creativity, and purposeful expression—realized one sketch at a time.
            <br /><br />
            Soulfully,
            <br />
            Krish Kalathiya
            <br />
            <img src={signature} alt="Sugnasture" />
          </p>
        </div>
        <FooterAbout />
    </>
  )
}

export default About