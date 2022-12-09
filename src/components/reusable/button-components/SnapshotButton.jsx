const SnapshotButton = ({theme, onClick, styles}) => {

  return (
    <button onClick={onClick} className={`my-button snapshot-button ${theme} ${styles}`}>
      <span>Button</span>
    </button>
  )
}

export default SnapshotButton