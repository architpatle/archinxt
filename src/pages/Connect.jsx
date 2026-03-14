import React from 'react'
import ConnectHero from '../components/sections/Connect/connectHero/connectHero'
import ConnectOptions from '../components/sections/Connect/ConnectOptions/ConnectOptions'
import ContactSection from '../components/sections/Connect/ContactSection/ContactSection'

const Connect = () => {
  return (
    <div>
      <ConnectHero />
      <ConnectOptions />
      <ContactSection />
    </div>
  )
}

export default Connect
