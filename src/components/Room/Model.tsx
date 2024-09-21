import { Droppable, Draggable } from 'react-beautiful-dnd'
import { SpaceInterface } from '../../interfaces'
import '../Building/index.css'

interface Props {
  data: SpaceInterface[]
}

export const Model = ({ data }: Props): JSX.Element => {
  return (
    <Droppable droppableId={`spaceGroupModel`}>
      {(provided, snapshot) => (
        <div 
          ref={provided.innerRef} {...provided.droppableProps} 
          className={`${snapshot.isDraggingOver ? 'dragging-over' : null}`}
          >
          {data.map((model, spaceIndex) => (
            <Draggable key={spaceIndex} draggableId={'spaceModel-'+spaceIndex.toString()} index={spaceIndex}>
              {(providedDraggable) => (
                <div className='smash-item draggable' ref={providedDraggable.innerRef} {...providedDraggable.dragHandleProps} {...providedDraggable.draggableProps}>
                  <div className="bui-name">
                    {model.name}
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
