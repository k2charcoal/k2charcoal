import React from 'react'

import Header from './Header';
import FooterAbout from './FooterAbout';
import '../CSS/OrderProcess.css'

import { FaWhatsapp } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const OrderProcess = () => {
  return (
    <>
        <div id='Home'>
            <Header />
        </div>
        <div className='OrderProcess'>
            <p>📌 CUSTOM ARTWORK DETAILS <br /> <br />

                🖼 Custom Orders Accepted <br />
                🎨 Medium: Charcoal / Graphite Sketches <br /><br />

                📐 Available Sizes: <br />
                A1 | A3 | A4 | A5 <br /><br />

                ⏳ Time Required: <br />
                5–7 working days (depends on size & detailing) <br /> <br />

                🚫 Note: <br />
                Human/people portraits are not accepted. <br />
                Only deity, spiritual, symbolic & artistic sketches are accepted. <br /><br />

                💳 Payment Terms: <br />
                * 30% advance payment required to confirm the order <br />
                * 70% payment after order complete <br />
                * Online payment available <br />
                * Cash on Delivery available only within Surat <br /> <br />

                📩 To place an order, please send: <br />
                * Artwork reference <br />
                * Preferred size (A1 | A3 | A4 | A5) <br />
                * Any specific requirements <br /><br />

                <div class="ButtonGroup">
                  <button>
                    <a href="https://wa.me/8160956010?text=Hello%20K2.charcoal">
                      <FaWhatsapp /> Whatsapp
                    </a>
                  </button>

                  <button>
                    <a href="https://www.instagram.com/k2.charcoal/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram /> Instagram
                    </a>
                  </button>
                </div>

            </p>

            
        </div>
        <FooterAbout />
    </>
  )
}

export default OrderProcess
