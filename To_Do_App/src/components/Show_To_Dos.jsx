import React from 'react'
import Card from './shared/Card'

function Show_To_Dos({ item, handleDelete, handleStatusChange}) {

  
  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p
            className={`text-white text-lg ${item.status === 'completed'
                ? 'line-through opacity-50'
                : ''
              }`}
          >
            {item.task}
          </p>

          <p className="text-sm text-gray-300 mt-1">
            Status: {item.status}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            className="bg-white rounded-md p-1"
            value={item.status}
            onChange={(e) =>
              handleStatusChange(item.id, e.target.value)
            }
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  )
}

export default Show_To_Dos