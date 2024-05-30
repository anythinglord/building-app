import './index.css';

interface Props {
  name: string
  variant?: string
}

export const GeneralIcon = ({ name, variant = 'secondary' }: Props): JSX.Element => {
  return (
    <a className={`icon-root icon-${variant}`}>
      <i className={`fa solid fa-${name}`} />
    </a>
  )
}