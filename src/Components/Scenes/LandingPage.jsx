import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import AboutUs from '../AboutUs/AboutUs'
import Practices from '../Practices/Practices'
import Reviews from '../../Reviews/Reviews'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Practices/>
      <Reviews/>
    </div>
  )
}

export default LandingPage
