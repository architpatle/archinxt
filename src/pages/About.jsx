import React from 'react'
import AboutHero from '../components/sections/About/AboutHero/AboutHero'
import Creation from '../components/sections/About/Creation/Creation'
import Inside from '../components/sections/About/Inside/Inside'
import Philosophy from '../components/sections/About/Philosophy/Philosophy'
import Signature from '../components/sections/About/Signature/Signature'
import Roadmap from '../components/sections/About/Roadmap/Roadmap'
import ClosingCTA from '../components/sections/About/ClosingCTA/ClosingCTA'
import AboutCTA from '../components/sections/About/AboutCTA/AboutCTA'

const About = () => {
  return (
    <>
     <AboutHero />
     <Creation />
    <Philosophy />
    <Roadmap />
    {/* <ClosingCTA /> */}
    <AboutCTA />
    </>
  )
}

export default About
