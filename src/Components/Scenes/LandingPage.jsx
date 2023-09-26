import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import AboutUs from '../AboutUs/AboutUs'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <AboutUs/>
    </div>
  )
}

export default LandingPage
