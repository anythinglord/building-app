import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="item">a</div>
        <div className="item">b</div>
        <div className="item">c</div>
        <div className="item">d</div>
      </div>
    </div>
  )
}

export default App
