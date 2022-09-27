import React from "react"

const Welcome = () => {

  return (
    <div>
      <div className="welcome-message">
        <div className="welcome">
          Welcome...
          <br/>
          Добре Дошли...
          <br/>
          Bienvenidos!
          <br/>
        </div>
        <br/>
        <div className="welcome-continued">
          I've dedicated this little corner of the universe to the projects, passions,
          and works of
            <div className="petar">
              Petar-Петър Tzonevski-Цоневски.
            </div>
          Enjoy your time.
        </div>

        <button className="custom-button my-button">
          <span>Button</span>
        </button>
      </div>

    </div>
  )
}

export default Welcome