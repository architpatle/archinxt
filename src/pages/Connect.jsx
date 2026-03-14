import React from 'react'
import ConnectHero from '../components/sections/Connect/ConnectHero/ConnectHero'
import ConnectOptions from '../components/sections/Connect/ConnectOptions/ConnectOptions'
import ContactSection from '../components/sections/Connect/ContactSection/ContactSection'
import FinalCTA from '../components/sections/Connect/FinalCTA/FinalCTA'

const Connect = () => {
  return (
    <div>
      <ConnectHero />
      <ConnectOptions />
      <ContactSection />
      <FinalCTA />
    </div>
  )
}

export default Connect
