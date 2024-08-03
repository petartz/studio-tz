/* eslint-disable */
import React from 'react'
import Biography from '../components/home/Biography'
import Welcome from '../components/home/Welcome'
import Modal from "../components/reusable/Modal"
import SnapshotButton from "../components/reusable/buttons/SnapshotButton"
import SunOrMoon from "../components/reusable/buttons/SunOrMoon"
import {ThemeContext} from "../context/ThemeContext"
import { useContext } from 'react'

const App = (props) => {
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleMode()
  }

  return (
    <div className='home-grid' >
      <SunOrMoon mode={theme.mode} onClick={changeTheme}></SunOrMoon>
      <Welcome/>
      <Modal/>
      <SnapshotButton theme={theme.mode} onClick={changeTheme}/>
      <Biography/>
      <Biography/>
      <Biography/>
    </div>

  )
}

export default App
