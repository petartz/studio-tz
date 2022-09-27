/* eslint-disable */
import React, { useContext } from 'react'
import Welcome from '../components/home-components/Welcome'
import { ThemeContext } from '../context/ThemeContext'

const App = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <Welcome/>
    </div>
  )
}

export default App
