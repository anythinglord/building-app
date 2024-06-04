import { useState } from 'react'
import { BlockInterface } from '../../interfaces';
import { defaultBlocks } from '../../data';
import { Building } from '../Building/Building';
import { GeneralIcon } from '../../icons/GeneralIcon';
import './index.css'
import { useHandler } from '../../hooks/useHandler';

export const Block: React.FC = () => {

  const [blocks, setBlocks] = useState<Array<BlockInterface>>(defaultBlocks)
  const { showElements, isOpen } = useHandler();

  const addBuilding = (blockIndex: number) => {
    const nextIndex = blocks[blockIndex].buildings.length + 1
    const newBuilding = { name: 'Building ' + nextIndex }
    const newBlocks = [...blocks];
    newBlocks[blockIndex].buildings.push(newBuilding)
    setBlocks(newBlocks)
  }

  const removeBuilding = (blockIndex: number, buildingIndex: number) => {
    const newBlocks = [...blocks];
    newBlocks[blockIndex].buildings.splice(buildingIndex, 1)
    setBlocks(newBlocks)
  }

  return (
    <div>
      {blocks.map((block, index) => (
        <div className='b-root' key={index}>
          <div className='b-head'>
            <div className="b-name" onClick={() => { showElements(index) }}>
              {block.name}
            </div>
            <div className='b-icons'>
              <button className='general-btn' onClick={() => { addBuilding(index) }}>
                <GeneralIcon name='plus' />
              </button>
              <GeneralIcon name='trash' />
              <GeneralIcon name={`chevron-${isOpen(index) ? 'down': 'right' }`} variant='primary'/>
            </div>
          </div>
          {isOpen(index) &&
            <Building
              data={block.buildings} remove={removeBuilding}
              blockIndex={index}
            />
          }
        </div>
      ))}
    </div>
  )
}
