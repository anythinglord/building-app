
interface Props {
  state: boolean
}

export const ArrowIcon = ({ state }: Props): JSX.Element => {
  return (
    <div>
      {state ?
        <i className="fa-solid fa-chevron-down" /> :
        <i className="fa-solid fa-chevron-right" />}
    </div>
  )
}
