import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import Explore from '../components/sections/Explore/Explore'
import Concepts from '../components/sections/Concepts/Concepts'
import DesignShowcase from '../components/sections/DesignShowcase/DesignShowcase'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Explore />
      <Concepts />
      <DesignShowcase />

    </div>
  )
}

export default Home
