import { useState } from 'react'
import './App.css'
import Stopwatch from './Componets/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='yeah'>
      <h1>Set Go!</h1>
      <Stopwatch />
      </div>
    </>
  )
}

export default App
