/* eslint-disable */
import { EyeTracker } from '../components/EyeTracker'
import Biography from '../components/home/Biography'
import Welcome from '../components/home/Welcome'
import Modal from "../components/reusable/Modal"
import SnapshotButton from "../components/reusable/buttons/SnapshotButton"
import SunOrMoon from "../components/reusable/buttons/SunOrMoon"
import {ThemeContext} from "../context/ThemeContext"
import { useContext, useEffect, useRef } from 'react'

const App = () => {
  const welcomeRef = useRef(document.createElement('div'));
  const bioRef = useRef(document.createElement('div'));
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleMode()
  }
  useEffect(() => {
  }, [])

  return (
    <>
    <div className='home-grid'>
        <SunOrMoon mode={theme.mode} onClick={changeTheme}></SunOrMoon>
        <EyeTracker></EyeTracker>
        <Welcome bioRef={bioRef} welcomeRef={welcomeRef}/>
        <Biography bioRef={bioRef} welcomeRef={welcomeRef}/>
        <Modal/>
        {/*  */}
        <SnapshotButton theme={theme.mode} />
        <SnapshotButton theme={theme.mode} onClick={changeTheme}/>
        <Biography/>
        <Biography id="bio3"/>
        {/* Scrollbar watchers  */}
        <div className='scroll-watcher'/>
        <div className='scroll-watcher2'/>
    </div>
    </>

  )
}

export default App
