/* eslint-disable */
import React from 'react'
import Biography from '../components/home/Biography'
import Welcome from '../components/home/Welcome'
import Modal from "../components/reusable/Modal"
import SnapshotButton from "../components/reusable/buttons/SnapshotButton"
import SunOrMoon from "../components/reusable/buttons/SunOrMoon"
import {ThemeContext} from "../context/ThemeContext"
import { useContext, useEffect, useRef, useState } from 'react'
import SidePanel from '../components/reusable/SidePanel'
import Something from './Something'

const App = (props) => {
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleMode()
  }
  return (
    <>
    <div className='home-grid'>
    <div className='scroll-watcher'/>
      <SunOrMoon mode={theme.mode} onClick={changeTheme}></SunOrMoon>
      <Welcome/>
      <div id="scroll-panel" className='flex flex-row bottom-0 h-screen justify-center align-center'>
        <div className='absolute bottom-5 ml-6 justify-center align-center'>
          <svg id="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className='scroll-watcher2'/>
      <Something></Something>
      <SidePanel></SidePanel>

      <Modal/>
      <SnapshotButton theme={theme.mode} onClick={changeTheme}/>
      <Biography/>
      <Biography/>
      <Biography id="bio3"/>
    </div>
    </>

  )
}

export default App
