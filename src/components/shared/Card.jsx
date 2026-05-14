import React from 'react'

function Card({children}) {
  return (
    <div className='bg-gray-500 w-100 m-10 p-5 rounded-lg border-4 border-transparent '>
      {children}
    </div>
  )
}

export default Card
