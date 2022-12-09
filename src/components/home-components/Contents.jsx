import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import BookmarkDropdown from "../reusable/dropdowns/BookmarkDropdown"

const Contents = () => {
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleTheme()
  }

  return (
    <div className={"bookmark-container"}>
      <BookmarkDropdown theme={theme.theme}/>
    </div>
  )
}

export default Contents