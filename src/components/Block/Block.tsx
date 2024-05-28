import { useState } from 'react'
import { BlockInterface } from '../../interfaces';
import { defaultBlocks } from '../../data';
import { Building } from '../Building/Building';
import { ArrowIcon } from '../../icons/ArrowIcon';
import './index.css'
import { GeneralIcon } from '../../icons/GeneralIcon';

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
            <div className="b-name">{block.name}</div>
            <div className='b-icons'>
              <GeneralIcon name='plus' />
              <GeneralIcon name='trash'/>
              {/* <ArrowIcon state={activeKeys.includes(index)} />*/}
            </div>
          </div>
          {activeKeys.includes(index) && <Building />}
        </div>
      ))}
    </div>
  )
}
