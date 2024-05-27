import { useState } from 'react'
import './index.css'
import { BlockInterface } from '../../interfaces';
import { defaultBlocks } from '../../data';

export const Block: React.FC = () => {

  const [blocks, setBlocks] = useState<Array<BlockInterface>>(defaultBlocks)
  const BlocksComponent = blocks.map((block)=>{
    return (
      <div className='b-root'>{block.name}</div>
    )
  })
  return (
    <div>{BlocksComponent}</div>
  )
}
