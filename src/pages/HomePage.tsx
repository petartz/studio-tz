/* eslint-disable */
import Biography from '../components/home/Biography'
import Welcome from '../components/home/Welcome'
import Modal from "../components/reusable/Modal"
import SnapshotButton from "../components/reusable/buttons/SnapshotButton"
import SunOrMoon from "../components/reusable/buttons/SunOrMoon"
import {ThemeContext} from "../context/ThemeContext"
import { useContext, useEffect, useRef } from 'react'

const App = () => {
  const welcomeRef = useRef(null);
  const bioRef = useRef(null);
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
        <Welcome bioRef={bioRef} welcomeRef={welcomeRef}/>
        {/* <div onClick={scrollInto} id="scroll-panel" className='flex flex-row bottom-0 h-screen justify-center align-center'>
          <div className='absolute bottom-5 ml-6 justify-center align-center'>
            <svg id="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div> */}
        <Modal/>
        {/* Scrollbar watchers  */}
        <div className='scroll-watcher'/>
        <div className='scroll-watcher2'/>
        {/*  */}
        <SnapshotButton theme={theme.mode} />
        <SnapshotButton theme={theme.mode} onClick={changeTheme}/>
        <Biography bioRef={bioRef} welcomeRef={welcomeRef}/>
        <Biography/>
        <Biography id="bio3"/>
    </div>
    </>

  )
}

export default App
