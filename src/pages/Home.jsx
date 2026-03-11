import React from 'react'
import Hero from '../components/sections/Home/Hero/Hero'
import Explore from '../components/sections/Home/Explore/Explore'
import Concepts from '../components/sections/Home/Concepts/Concepts'
import DesignShowcase from '../components/sections/Home/DesignShowcase/DesignShowcase'
import Insights from '../components/sections/Home/Insights/Insights'
import Community from '../components/sections/Home/Community/Community'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Explore />
      <Concepts />
      <DesignShowcase />
      <Insights />
      <Community />

    </div>
  )
}

export default Home
