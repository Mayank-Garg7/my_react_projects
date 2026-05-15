import React, { useEffect, useState } from 'react'
import CreateTo_Do from './CreateTo_Do'
import Show_To_Dos from './Show_To_Dos'
import To_Dos from '../Data/To-Do-data'

function ToDos() {
  const [work, setWork] = useState(() => {
    const storedWork = localStorage.getItem('work')
    return storedWork ? JSON.parse(storedWork) : To_Dos
  })

  useEffect(() => {
    localStorage.setItem('work', JSON.stringify(work))
  }, [work])

  const handleWork = (newWork) => {
    setWork((prev) => [newWork, ...prev])
  }

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?'
    )

    if (confirmed) {
      setWork((prev) => prev.filter((item) => item.id !== id))
    }
  }

  const handleStatusChange = (id, status) => {
    setWork((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    )
  }

  return (
    <div className="w-full max-w-xl">
      <CreateTo_Do handleWork={handleWork} />

      {work.length === 0 ? (
        <p className="text-center text-white mt-5">
          No tasks available.
        </p>
      ) : (
        work.map((item) => (
          <Show_To_Dos
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleStatusChange={handleStatusChange}
          />
        ))
      )}
    </div>
  )
}

export default ToDos