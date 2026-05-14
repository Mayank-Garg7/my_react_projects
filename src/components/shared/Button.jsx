import React from 'react'

function Button({children, type= ''}) {
  return (
    <button type={type} className='justify-self-center border border-white p-2 text-white cursor-pointer bg-cyan-800 rounded-sm'>
      {children}
    </button>
  )
}

export default Button
