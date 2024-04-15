import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import SnapshotButton from "../reusable/button-components/SnapshotButton"
import Modal from "../../components/reusable/Modal"
import { SidePanel } from "../../panels/SidePanel"
import SunOrMoon from "../reusable/SunOrMoon"

const Welcome = () => {
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleMode()
  }

  return (
    <div>
      <SunOrMoon mode={theme.mode} onClick={changeTheme}></SunOrMoon>
      <SidePanel></SidePanel>
      <div className="">
        <div className="message">
          <p className="name">
            Пеtъr Цоnеvsки
          </p>
          <SnapshotButton theme={theme.mode} onClick={changeTheme}/>
        </div>
        <Modal></Modal>
      </div>
    </div>
  )
}

export default Welcome