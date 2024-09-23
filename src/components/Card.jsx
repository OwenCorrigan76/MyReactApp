import React from 'react'

const Card = ( {children, bg = "bg-blue-700" } ) => {
  return <div className={`${ bg } p-6 roundd-lg shadow-md`}>
    {children}
  </div>
}

export default Card