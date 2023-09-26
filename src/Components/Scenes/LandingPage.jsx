import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import AboutUs from '../AboutUs/AboutUs'
import Practices from '../Practices/Practices'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Practices/>
    </div>
  )
}

export default LandingPage
