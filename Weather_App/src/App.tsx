import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev+1)
  }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App
