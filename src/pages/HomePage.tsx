/* eslint-disable */
import { EyeTracker } from '../components/EyeTracker'
import Biography from '../components/home/Biography'
import Welcome from '../components/home/Welcome'
import Modal from "../components/reusable/Modal"
import SidePanel from '../components/reusable/SidePanel'
import SnapshotButton from "../components/reusable/buttons/SnapshotButton"
import ThemeSwitch from "../components/reusable/buttons/ThemeSwitch"
import {ThemeContext} from "../context/ThemeContext"
import { useContext, useEffect, useRef } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const App = () => {
  const welcomeRef = useRef(null);
  const bioRef = useRef(null);
  const theme = useContext(ThemeContext)

  const { setTargetRef } = useScrollObserver();

  const changeTheme = () => {
    theme.toggleMode()
  }
  useEffect(() => {
    setTargetRef(welcomeRef.current);
  }, [])

  return (
    <>
    <div className='home-grid'>
        <ThemeSwitch mode={theme.mode} onClick={changeTheme}></ThemeSwitch>
        <EyeTracker></EyeTracker>
        <Welcome setTarget={setTargetRef} bioRef={bioRef} welcomeRef={welcomeRef}/>
        <Biography setTarget={setTargetRef} bioRef={bioRef} welcomeRef={welcomeRef}/>
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
