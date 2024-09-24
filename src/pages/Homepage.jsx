import React from 'react'
import Skills from '../components/Skills'
import SkillListings from '../components/SkillListings'
import SkillsCard from '../components/SkillsCard'
import ViewAll from '../components/ViewAll'
const Homepage = () => {
  return (
<>
<Skills />
<SkillsCard />
<SkillListings isHome={true} />
<ViewAll />
</>
  );
}

export default Homepage