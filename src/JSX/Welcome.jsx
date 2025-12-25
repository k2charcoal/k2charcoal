import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Welcome.css'

import logo from  '../Asset/logo1.jpg'

const Welcome = () => {
  const navigate = useNavigate()
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true)  
    }, 2500)

    const navTimer = setTimeout(() => {
      navigate('/home')
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(navTimer)
    }
  }, [navigate])

  return (
    <div className={`Welcome ${fade ? 'fade-out' : ''}`}>
      <img src={logo} alt="logo" />
      <h1>WELCOME</h1>
      <h3>TO</h3>
      <h2>k2charcoal</h2>
    </div>
  )
}

export default Welcome
