import { useActive } from '../../hooks/useActive';
import { GeneralIcon } from '../../icons/GeneralIcon';
import { BuildingInterface } from '../../interfaces';
import './index.css';

interface Props {
  data: BuildingInterface[]
  blockIndex: number
  remove: (x: number, y: number) => void
}

export const Building = ({ data, blockIndex, remove }: Props): JSX.Element => {

  const { activeElement, changeActive } = useActive();
  const isActive = (index: number) => {
    return activeElement?.block === blockIndex && activeElement.building === index ? true : false
  }

  return (
    <div>
      {data.map((building, index) => (
        <div className={`smash-item smashup ${isActive(index) ? 'smash-active' : ''}`} onClick={() => { changeActive(blockIndex, index) }}>
          <div className="bui-name">
            {building.name}
          </div>
          <div className="bui-icons">
            <button className='general-btn' onClick={() => { remove(blockIndex, index) }}>
              <GeneralIcon name='trash' variant='primary' />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
