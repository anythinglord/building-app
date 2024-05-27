import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className="item">a</div>
      <div className="item">b</div>
      <div className="item">c</div>
      <div className="item">d</div>
    </div>
  )
}

export default App
