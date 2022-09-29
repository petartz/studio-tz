const Biography = () => {


  return (
    <div className="bio">
      <h1 className="welcome">
        Bio
      </h1>
      <div className="biotext">
        <p>
          i was born in Sofia in 1998. since then  i've moved between corners
          of the world that stimulated my love for language, software, and art.
          reading philosophy of mind, dystopian novels, poetry, and short stories
          coaxed me into writing my own. in this website i compile some of my work
          including programming projects, NLP research, writing, art, photography,
          and other tidbits and gems from our communal web of consciousness.
        </p>

        <img className="biopic" src="https://i.imgur.com/A3Vtb2k.jpg" alt="petar-biopic" title="source: imgur.com" />
      </div>


      <div className="welcome-message">
        <div className="welcome">
          Welcome...
          <br/>
          Добре дошли...
          <br/>
          Bienvenidos!
          <br/>
        </div>
        <br/>
        <div className="welcome-continued">
          I've dedicated this little corner of the universe
          <br/>
          to the projects, passions, and works of
            <div className="petar">
              Petar-Петър Tzonevski-Цоневски.
            </div>
          Enjoy your time.
        </div>
      </div>

    </div>
  )
}

export default Biography