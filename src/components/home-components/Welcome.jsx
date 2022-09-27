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
      <div className="welcome-message">
        <div className="welcome">
          Welcome...
          <br/>
          Добре Дошли...
          <br/>
          Bienvenidos!
          <br/>
        </div>
        <br/>
        <div className="welcome-continued">
          I've dedicated this little corner of the universe to the projects, passions,
          and works of
            <div className="petar">
              Petar-Петър Tzonevski-Цоневски.
            </div>
          Enjoy your time.
        </div>

        {/* className="custom-button my-button" */}

        <button onClick={changeTheme} className={`custom-button my-button ${theme.theme}`}>
          <span>Button</span>
        </button>
        <ToggleSwitch label=" "/>
      </div>

    </div>
  )
}

export default Welcome