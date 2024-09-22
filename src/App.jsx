import React from 'react'
import Navbar from './components/Navbar'
import Skills from './Skills';
import SkillsCard from './SkillsCard';
import SkillListings from './components/SkillListings';
import { ViewAll } from './ViewAll';

const App = () => {
    
  return (
   <>
   <Navbar />
   <Skills title="My Curriculum Vitae"/>
   <SkillsCard education="Education" history="Red Hat" />
   <SkillListings />
   <ViewAll />
   </>
  );
};

export default App