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
    <div>
      <div className='smash-title'>
        <h3>Floors</h3>
        <button className='general-btn'>
          <GeneralIcon name='plus' />
        </button>
      </div>
      <div>{floors.map((floor, index) => (
        <div className='b-root' key={index}>
          <div className={`smash-box ${isOpen(index) ? 'smash-box-open': ''}`}>
            <div className="b-name" onClick={() => { showElements(index) }}>
              {floor.name}
            </div>
            <div className="smash-icons">
              <button className='general-btn'>
                <GeneralIcon name='trash' />
              </button>
              <div className='flex-all'>
                <i className={`fa solid fa-chevron-${isOpen(index) ? 'down': 'up' }`}/>
              </div>
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
                        <div className='smash-item draggable' ref={providedDraggable.innerRef} {...providedDraggable.dragHandleProps} {...providedDraggable.draggableProps}>
                          <Space name={space.name} />
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
      ))}
      </div>
    </div>


  )
}
