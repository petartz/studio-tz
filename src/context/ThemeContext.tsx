import { createContext, useState } from "react";

export const ThemeContext = createContext([{mode: [], function() {}}])

export function ThemeProvider({ children }: any){
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if(mode === "light") {
      document.body.setAttribute('id', 'dark')
    } else {
      document.body.setAttribute('id', 'light')
    }
    setMode((curr) => curr === "light" ? "dark" : "light")
  }

  const modeValue = {
    mode: mode,
    toggleMode: toggleMode
  }

  return (
    <>
      <ThemeContext.Provider value={modeValue}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}