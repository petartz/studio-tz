import { createContext, useState } from "react";

interface ThemeContextType {
  mode: string;
  toggleMode: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  mode: '',
  toggleMode: () => {}
})

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