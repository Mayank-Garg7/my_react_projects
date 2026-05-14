import React from 'react'

function Button({ children, type = 'button' }) {
  return (
    <button
      type={type}
      className="w-full bg-cyan-600 hover:bg-cyan-700 transition text-white font-semibold py-3 rounded-lg"
    >
      {children}
    </button>
  )
}

export default Button