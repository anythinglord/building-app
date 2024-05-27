import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Block } from './components/Block/Block'
import { Floor } from './components/Floor/Floor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="item">
          <Block/>
        </div>
        <div className="item">
          <Floor/>
        </div>
        <div className="item">c</div>
        <div className="item">d</div>
      </div>
    </div>
  )
}

export default App
