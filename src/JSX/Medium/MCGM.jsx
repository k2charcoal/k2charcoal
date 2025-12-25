import React from 'react'
import { Link } from "react-router-dom";

const MCGM = () => {
  return (
    <>
    <div className="MediumMain">
        <nav className="NavMenu">
            <Link to="/Charcoal">CHARCOAL</Link>
            <Link to="/Graphite">GRAPHITE</Link>
            <Link to="/Mixed">CHARCOAL + GRAPHITE</Link>
            {/* <Link to="/Mixed">PHONE COVER</Link> */}
        </nav>
      </div>
    </>
  )
}

export default MCGM
