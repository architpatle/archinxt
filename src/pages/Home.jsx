import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import Explore from '../components/sections/Explore/Explore'
import Concepts from '../components/sections/Concepts/Concepts'
import DesignShowcase from '../components/sections/DesignShowcase/DesignShowcase'
import Insights from '../components/sections/Insights/Insights'
import Community from '../components/sections/Community/Community'
import Approach from '../components/sections/Approach/Approach'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Explore />
      <Concepts />
      <DesignShowcase />
      <Insights />
      <Community />
      {/* <Approach /> */}

    </div>
  )
}

export default Home
