import React from 'react'
import Card from './components/Card'

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
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Education
            </a>
          </Card>
         <Card bg='bg-red-600'>
           <h2 className="text-2xl font-bold">{history}</h2>
            <p className="mt-2 mb-4">
              Current Role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Browse Tasks
            </a>
         </Card>
        </div>
      </div>
    </section>
    </>
  )
}

export default SkillsCard