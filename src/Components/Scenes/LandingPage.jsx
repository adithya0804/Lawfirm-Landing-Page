import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import AboutUs from '../AboutUs/AboutUs'
import Practices from '../Practices/Practices'
import Reviews from '../../Reviews/Reviews'
import Team from '../Team/Team'
import FaqSection from '../FaqSection/FaqSection'
import NewsLetterSection from '../NewsLetterSection/NewsLetterSection'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Practices/>
      <Reviews/>
      <Team/>
      <FaqSection/>
      <NewsLetterSection/>
    </div>
  )
}

export default LandingPage
