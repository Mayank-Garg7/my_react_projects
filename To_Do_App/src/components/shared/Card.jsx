import React from 'react'

function Card({ children }) {
  return (
    <div className="bg-cyan-800 p-5 rounded-xl shadow-lg mb-5">
      {children}
    </div>
  )
}

export default Card