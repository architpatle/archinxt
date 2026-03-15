import React from 'react'
import ConceptsHero from '../components/sections/Concepts/ConceptsHero/ConceptsHero'
import ConceptGrid from '../components/sections/Concepts/conceptGrid/conceptGrid'
import ConceptsCTA from '../components/sections/Concepts/ConceptsCTA/ConceptsCTA'

const Concepts = () => {
  return (
    <div>
      <ConceptsHero />
      <ConceptGrid />
      <ConceptsCTA />
    </div>
  )
}

export default Concepts
