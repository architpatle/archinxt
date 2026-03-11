import React from 'react'
import AboutHero from '../components/sections/About/AboutHero/AboutHero'
import Creation from '../components/sections/About/Creation/Creation'
import Philosophy from '../components/sections/About/Philosophy/Philosophy'
import Roadmap from '../components/sections/About/Roadmap/Roadmap'
import AboutCTA from '../components/sections/About/AboutCTA/AboutCTA'

const About = () => {
  return (
    <>
     <AboutHero />
     <Creation />
    <Philosophy />
    <Roadmap />
    <AboutCTA />
    </>
  )
}

export default About
