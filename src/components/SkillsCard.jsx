import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const SkillsCard = ({education, history}) => {
  return (<>
        <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
             <h2 className="text-2xl font-bold">{education}</h2>
            <p className="mt-2 mb-4">
              Education to date
            </p>
            <Link
              to="/education"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Education
            </Link>
          </Card>
         <Card bg='bg-indigo-200'>
           <h2 className="text-2xl font-bold">{history}</h2>
            <p className="mt-2 mb-4">
              Current Role
            </p>
            <Link
              to="/add-skill"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Browse Tasks
            </Link>
         </Card>
        </div>
      </div>
    </section>
    </>
  )
}

export default SkillsCard