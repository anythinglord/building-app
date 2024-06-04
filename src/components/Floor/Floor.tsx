import { useHandler } from '../../hooks/useHandler'
import { GeneralIcon } from '../../icons/GeneralIcon'
import './index.css'

export const Floor: React.FC = () => {

  const { showElements, isOpen } = useHandler();

  return (
    <div className='f-root'>
      <div className="f-head">
        <div className="f-name" onClick={() => { showElements(1) }}>
          Floor 1
        </div>
        <div className="f-icons">
          <GeneralIcon name='trash' />
          <GeneralIcon name={`chevron-${isOpen(1) ? 'down': 'right' }`} variant='primary'/>
        </div>
      </div>
      {isOpen(1) && <h2>rooms</h2>}
    </div>
  )
}
