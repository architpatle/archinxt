import React from 'react'
import BuildsHero from '../components/sections/Builds/BuildsHero/BuildsHero'
import BuildsGrid from '../components/sections/Builds/BuildsGrid/BuildsGrid'
import BuildsCTA from '../components/sections/Builds/BuildsCTA/BuildsCTA'

const Builds = () => {
  return (
    <div>
      <BuildsHero />
      <BuildsGrid />
      <BuildsCTA />
    </div>
  )
}

export default Builds
