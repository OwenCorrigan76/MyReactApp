import React from 'react'
import { Link } from 'react-router-dom';
import image from "../assets/images/me.jpg";

const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-800 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
                        <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-14 w-auto"
                src={ image }
                alt="Skills and Courses"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >My Skills</span
              >
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</Link>
                <Link
                  to="/skills"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Skills</Link>
                <Link
                  to="/add-skill"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Courses Complete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar