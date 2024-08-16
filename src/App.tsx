import { NavBar } from './components/NavBar/NavBar'
import { Block } from './components/Block/Block'
import { Floor } from './components/Floor/Floor'
import { Room } from './components/Room/Room'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import './App.css'

function App() {

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    console.log(destination, source)
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="item">
          <Block />
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd} /*onDragStart={handleOnDragStart}*/>
          <div className="item static-container">
            <Floor />
          </div>
          <div className="item static-container">
            <Room />
          </div>
        </DragDropContext>
        <div className="item static-container"></div>
      </div>
    </div>
  )
}

export default App
