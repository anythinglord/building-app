import { useState } from 'react'
import { BlockInterface } from '../../interfaces';
import { defaultBlocks } from '../../data';
import { Accordion } from '../Accordion/Accordion';
import './index.css'
import { Building } from '../Building/Building';
import { ArrowIcon } from '../../icons/ArrowIcon';

export const Block: React.FC = () => {

  const [blocks] = useState<Array<BlockInterface>>(defaultBlocks)
  const [activeKeys, setActiveKeys] = useState<Array<number>>([]);

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
          <div className='b-head' onClick={() => { showElements(index) }}>
            {block.name}
            <ArrowIcon state={activeKeys.includes(index)} />
          </div>
          {activeKeys.includes(index) && <Building />}
        </div>
      ))}
    </div>
  )
}
