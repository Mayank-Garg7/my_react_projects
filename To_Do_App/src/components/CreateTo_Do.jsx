import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function CreateTo_Do({ handleWork }) {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (text.trim().length < 10) {
      setError(true)
      return
    }

    const newWork = {
      id: Date.now(),
      task: text,
      status: 'pending',
    }

    handleWork(newWork)

    setText('')
    setError(false)
  }

  const handleTextChange = (event) => {
    const value = event.target.value

    setText(value)

    setError(value.trim().length < 10)
  }

  return (
    <Card>
      <h1 className="text-white text-3xl font-bold text-center mb-5">
        To-Do App
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-3 rounded-lg border border-gray-300 bg-cyan-900 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          type="text"
          placeholder="Write your task..."
          value={text}
          onChange={handleTextChange}
        />

        {error && (
          <p className="text-red-300 text-sm mt-2">
            Task must contain at least 10 characters.
          </p>
        )}

        <div className="mt-4">
          <Button type="submit">
            Add Task
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default CreateTo_Do