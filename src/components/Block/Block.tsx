import { useState } from 'react'
import { ActiveElement, BlockInterface } from '../../interfaces';
import { defaultBlocks } from '../../data';
import { Building } from '../Building/Building';
import { GeneralIcon } from '../../icons/GeneralIcon';
import { useHandler } from '../../hooks/useHandler';
import './index.css'

export const Block = () => {

  const [blocks, setBlocks] = useState<Array<BlockInterface>>(defaultBlocks)
  const { showElements, isOpen } = useHandler();

  const addBlock = () => {
    setBlocks(prevBlocks => {
      const newBlocks = structuredClone(prevBlocks)
      const newIndex = prevBlocks.slice(-1)[0].index + 1; 
      const newBlock: BlockInterface = {
        name: `Block ${newIndex}`,
        index: newIndex,
        buildings: [
          { name: 'Building 1' },
          { name: 'Building 2' }
        ]
      }
      newBlocks.push(newBlock)
      return newBlocks
    })
  }

  const removeBlock = (blockIndex: number) => {
    setBlocks(prevBlocks => {
      const newBlocks = structuredClone(prevBlocks)
      newBlocks.splice(blockIndex, 1)
      return newBlocks
    })
  }

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
      <div className='smash-title'>
        <h3>Blocks</h3>
        <button className='general-btn' onClick={addBlock}>
          <GeneralIcon name='plus' />
        </button>
      </div>
      {blocks.map((block, index) => (
        <div className='b-root' key={index}>
          <div className={`smash-box ${isOpen(index) ? 'smash-box-open': ''}`}>
            <div className="b-name" onClick={() => { showElements(index) }}>
              {block.name}
            </div>
            <div className='smash-icons'>
              <button className='general-btn' onClick={() => { addBuilding(index) }}>
                <GeneralIcon name='plus' />
              </button>
              <button className='general-btn' onClick={() => { removeBlock(index) }}>
                <GeneralIcon name='trash'  />
              </button>
              <div className='flex-all'>
                <i className={`fa solid fa-chevron-${isOpen(index) ? 'down': 'up' }`}/>
              </div>
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
