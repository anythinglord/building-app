import { useState } from 'react'
import { BlockInterface } from '../../interfaces';
import { defaultBlocks } from '../../data';
import { Building } from '../Building/Building';
import './index.css'
import { GeneralIcon } from '../../icons/GeneralIcon';

export const Block: React.FC = () => {

  const [blocks, setBlocks] = useState<Array<BlockInterface>>(defaultBlocks)
  const [activeKeys, setActiveKeys] = useState<Array<number>>([]);

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

  const showElements = (key: number): void => {
    const newActiveKeys = [...activeKeys];
    if (activeKeys.includes(key)) {
      const keyIndex = activeKeys.indexOf(key);
      newActiveKeys.splice(keyIndex, 1);
      setActiveKeys(newActiveKeys)
    } else {
      newActiveKeys.push(key);
      setActiveKeys(newActiveKeys)
    }
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
            </div>
          </div>
          {activeKeys.includes(index) &&
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
