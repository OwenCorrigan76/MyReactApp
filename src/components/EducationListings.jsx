import React from 'react';
import education from '../education.json';
import EducationListing from './EducationListing';  

const EducationListings = ( { isHome = false } ) => {
  const educationListings = isHome ? education.slice(0,3) : education;
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Previous Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {educationListings.map((education) => (
                        <EducationListing key={education.id} education={education} />  
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationListings;
