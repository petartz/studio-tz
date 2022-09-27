import { createContext, useState } from "react";

export const ThemeContext = createContext([{theme: [], function() {}}])

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if(theme === "light") {
      document.body.setAttribute('id', 'dark')
    } else {
      document.body.setAttribute('id', 'light')
    }
    setTheme((curr) => curr === "light" ? "dark" : "light")
  }

  const themeValue = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return (
    <>
      <ThemeContext.Provider value={themeValue}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}