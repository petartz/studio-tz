import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import ToggleSwitch from "../button-components/ToggleSwitch"

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
        <button onClick={changeTheme} className={`custom-button my-button ${theme.theme}`}>
          <span>Button</span>
        </button>
        <ToggleSwitch onClick={changeTheme} label=" "/>
      </div>
    </div>
  )
}

export default Welcome