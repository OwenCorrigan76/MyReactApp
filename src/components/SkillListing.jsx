import React from 'react'
import { useState } from 'react'
import {FaMapMarker } from 'react-icons/fa'
import { FaMusic } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SkillListing = ( {skill} ) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  let description = skill.description;

  if (!showFullDescription){
    description = description.substring(0, 90) + '...';
  }

  
  return (
<div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{ skill.type }</div>
                <h3 className="text-xl font-bold">{ skill.title }</h3>
              </div>

              <div className="mb-5">
                { description } </div>
              
              <button onClick={() => setShowFullDescription((prevState) => !prevState)}  className="text-indigo-500 mb-5 hover:text-indigo-60">
              { showFullDescription ? 'Less' : 'More' }
              </button>
             
              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-red-700 mb-3">
                  <FaMapMarker className='inline text-lg mb-1 mr-'/>
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  { skill.location }
                </div>
                <Link
                  to={ `/skill/${skill.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>  )
}

export default SkillListing