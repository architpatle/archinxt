import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import Explore from '../components/sections/Explore/Explore'
import Concepts from '../components/sections/Concepts/Concepts'
import DesignShowcase from '../components/sections/DesignShowcase/DesignShowcase'
import Insights from '../components/sections/Insights/Insights'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Explore />
      <Concepts />
      <DesignShowcase />
      <Insights />

    </div>
  )
}

export default Home
