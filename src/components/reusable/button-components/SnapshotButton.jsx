const SnapshotButton = ({theme, onClick}) => {

  return (
    <button onClick={onClick} className={`my-button snapshot-button ${theme}`}>
      <span>Button</span>
    </button>
  )
}

export default SnapshotButton