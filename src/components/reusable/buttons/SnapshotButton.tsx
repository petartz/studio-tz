const SnapshotButton = ({theme, onClick}: any) => {

  return (
    <button onClick={onClick} className={`snapshot-button ${theme}`}>
      <span>Button</span>
    </button>
  )
}

export default SnapshotButton