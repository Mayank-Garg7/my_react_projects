import React, { useEffect, useState } from 'react'
import CreateTo_Do from './CreateTo_Do'
import Show_To_Dos from './Show_To_Dos'
import To_Dos from '../../Data/To-Do-data'

function ToDos() {
  const [work, setWork] = useState(() => {
    const getWork = localStorage.getItem("work")
    return getWork? JSON.parse(getWork) : To_Dos
  }
  )


  useEffect(() => {
    localStorage.setItem("work", JSON.stringify(work));
  }, [work])


  const handleWork = (newWork) => {
    if (newWork.task !== "") {
      setWork((prev) => [newWork, ...prev])
    }
  }


  const handleDelete = (id) => {
    console.log("object")
    if (window.confirm("Are you sure! to delete this task...")) {
      setWork(prev => prev.filter(item => item.id !== id))
    }
  }

  return (
    <div className='mt-30 '>
      <CreateTo_Do handleWork={handleWork} />
      {
        work.map((item) => (
          <Show_To_Dos item={item} key={item.id} handleDelete={handleDelete} />
        ))
      }
    </div>
  )
}

export default ToDos
