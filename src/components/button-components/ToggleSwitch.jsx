import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ToggleSwitch = ({ label }) => {
  const theme = useContext(ThemeContext)

  const changeTheme = () => {
    theme.toggleTheme()
  }
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input onClick={changeTheme} type="checkbox" className="checkbox"
              name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;