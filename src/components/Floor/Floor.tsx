import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useHandler } from '../../hooks/useHandler'
import { GeneralIcon } from '../../icons/GeneralIcon'
import { Space } from '../Room/Space';
import { FloorInterface } from '../../interfaces';
import { defaultFloors } from '../../data';
import '../Block/index.css'

export const Floor: React.FC = () => {

  const [floors] = useState<FloorInterface[]>(defaultFloors)
  const { showElements, isOpen } = useHandler();

  return (
    <div>{floors.map((floor, index) => (
      <div className='b-root' key={index}>
        <div className="b-head">
          <div className="b-name" onClick={() => { showElements(index) }}>
            {floor.name}
          </div>
          <div className="b-icons">
            <GeneralIcon name='trash' />
            <GeneralIcon name={`chevron-${isOpen(index) ? 'down' : 'right'}`} variant='primary' />
          </div>
        </div>
        {isOpen(index) &&
          <Droppable droppableId={`spaceGroup-${index}`}>
            {(provided, snapshot) => (
              <div 
                ref={provided.innerRef} {...provided.droppableProps} 
                className={`${snapshot.isDraggingOver ? 'dragging-over' : null}`}
                >
                {floor.spaces.map((space, spaceIndex) => (
                  <Draggable key={spaceIndex} draggableId={`space-${index}-${spaceIndex}`} index={spaceIndex}>
                    {(providedDraggable) => (
                      <div className='draggable' ref={providedDraggable.innerRef} {...providedDraggable.dragHandleProps} {...providedDraggable.draggableProps}>
                        <Space  name={space.name} />                        
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        }
      </div>
    ))}</div>

  )
}
