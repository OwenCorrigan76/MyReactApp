import React from 'react'

// eslint-disable-next-line react/prop-types
const Skills = ({title}) => {
  return (
    <>
        <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            { title }
          </h1>
          <p className="my-4 text-xl text-white">
            These are some of the skills I have acquired over the past few years:
          </p>
        </div>
      </div>
    </section>

    </>
  )
}

export default Skills

