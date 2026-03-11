import React from 'react'
import AboutHero from '../components/sections/About/AboutHero/AboutHero'
import Creation from '../components/sections/About/Creation/Creation'
import Inside from '../components/sections/About/Inside/Inside'
import Philosophy from '../components/sections/About/Philosophy/Philosophy'

const About = () => {
  return (
    <>
     <AboutHero />
     
     <Creation />
  
     {/* <Inside /> */}
    <Philosophy />
    </>
  )
}

export default About
