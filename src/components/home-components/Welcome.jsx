import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import SnapshotButton from "../reusable/button-components/SnapshotButton"
import ToggleSwitch from "../reusable/button-components/ToggleSwitch"
import SideBar from "../../panels/SideBar"

const Welcome = () => {
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleTheme()
  }

  return (
    <div>
      <ToggleSwitch onClick={changeTheme} label=" "/>
      <div className="">
        <div className="message">
          <p className="name">
            Petar-Петър Tzonevski-Цоневски
          </p>
          <SnapshotButton theme={theme.theme} onClick= {changeTheme}/>
        </div>
        <SideBar></SideBar>
      </div>
    </div>
  )
}

export default Welcome