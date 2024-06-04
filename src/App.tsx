import { NavBar } from './components/NavBar/NavBar'
import { Block } from './components/Block/Block'
import { Floor } from './components/Floor/Floor'
import { Room } from './components/Room/Room'
import './App.css'

function App() {
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
        <div className="item">
          <Room />
        </div>
        <div className="item">d</div>
      </div>
    </div>
  )
}

export default App
