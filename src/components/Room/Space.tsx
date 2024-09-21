import '../Building/index.css';

interface Props {
  //ref: (element: HTMLElement | null) => void
  name: string
}

export const Space = ({ name }: Props): JSX.Element => {
  return (
    <div className='smash-item' /*ref={ref}*/>
      <div className="bui-name">
        {name}
      </div>
    </div>
  )
}