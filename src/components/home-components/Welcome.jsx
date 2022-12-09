import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import SnapshotButton from "../reusable/button-components/SnapshotButton"
import ToggleSwitch from "../reusable/button-components/ToggleSwitch"

const Welcome = () => {
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleTheme()
  }

  return (
    <div>
      <h1 className="welcome">
        welcome...
        <br/>
        добре дошли...
        <br/>
        bienvenidos!
        <br/>
      </h1>
      <div className="message">
        <p className="hook">
          un trocito, трошичка?, de
        </p>
        <p className="name">
          Petar-Петър Tzonevski-Цоневски
        </p>
        <ToggleSwitch onClick={changeTheme} label=" "/>
        <SnapshotButton theme={theme.theme} onClick = {changeTheme}/>
      </div>
    </div>
  )
}

export default Welcome