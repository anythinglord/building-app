import { NavBar } from './components/NavBar/NavBar'
import { Block } from './components/Block/Block'
import { Floor } from './components/Floor/Floor'
import { Room } from './components/Room/Room'
import { DragDropContext } from 'react-beautiful-dnd'
import './App.css'

function App() {

  const handleOnDragEnd = () => {
    
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="item">
          <Block />
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="item static-container">
            <Floor />
          </div>
          <div className="item">
            <Room />
          </div>
        </DragDropContext>
        <div className="item static-container"></div>
      </div>
    </div>
  )
}

export default App
