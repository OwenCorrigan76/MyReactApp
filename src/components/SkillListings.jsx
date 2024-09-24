import React from 'react';
import skills from '../previousSkills.json';
import SkillListing from './SkillListing';  // Capitalized component name

const SkillsListings = ( { isHome = false } ) => {
  const skillListings = isHome ? skills.slice(0,3) : skills;
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { isHome ? 'Browse Employment' : 'Previous Employment' }
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillListings.map((skill) => (
                        <SkillListing key={skill.id} skill={skill} />  
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsListings;
