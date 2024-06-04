
import { useHandler } from '../../hooks/useHandler'
import { GeneralIcon } from '../../icons/GeneralIcon'
import '../Floor/index.css'

export const Room: React.FC = () => {

  const {isOpen } = useHandler();

  return (
    <div className='f-root'>
      <div className='f-head'>
        <div className='f-name'>
          Rooms
        </div>
        <div className="f-icons">
          <GeneralIcon name={`chevron-${isOpen(1) ? 'down' : 'right'}`} variant='primary' />
        </div>
      </div>

    </div>
  )
}
