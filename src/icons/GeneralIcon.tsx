import './index.css';

interface Props {
  name: string
}

export const GeneralIcon = ({ name }: Props): JSX.Element => {
  return (
    <a className='icon-root'>
      <i className={`fa solid fa-${name}`} />
    </a>
  )
}