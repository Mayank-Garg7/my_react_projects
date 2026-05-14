import React, { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button';

function Show_To_Dos({item, handleDelete}) {
  const {id, task} = item;
  const [status, setStatus] = useState('pending')

  return (
    <Card>
      <div className="text-white">
        <span>{task}</span>
        <button onClick={() => handleDelete(item.id)}>
          <span className="mr-0 pr-0">Del</span>
        </button>
          <select name="" id="" className='text-black'>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
      </div>
    </Card>
  )
}

export default Show_To_Dos
