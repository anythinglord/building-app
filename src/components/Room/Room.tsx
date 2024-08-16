
import { useHandler } from '../../hooks/useHandler'
import { GeneralIcon } from '../../icons/GeneralIcon'
import { Model } from './Model';
import '../Floor/index.css'
import { useState } from 'react';
import { defaultSpaces } from '../../data';

export const Room: React.FC = () => {

  const [spaces] = useState(defaultSpaces);
  const {showElements, isOpen } = useHandler();

  return (
    <div className='f-root'>
      <div className='f-head'>
        <div className='f-name' onClick={() => { showElements(1) }}>
          Rooms
        </div>
        <div className="f-icons">
          <GeneralIcon name={`chevron-${isOpen(1) ? 'down' : 'right'}`} variant='primary' />
        </div>
      </div>
      {isOpen(1) && <Model data={spaces}/>}
    </div>
  )
}
