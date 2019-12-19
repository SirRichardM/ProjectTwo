import React from "react"
import { Link, Route } from "react-router-dom";

function Header() {
  return (
    <div>
      <h3 className="tar">HORRORFIED</h3>
      <div className="header">
        <h2> <Link className="head" to="/classics">The Classics</Link> </h2>
        <h2>  <Link className="head" to="/games">Movies with Games</Link> </h2>
        <h2><Link className="head" to="/HorrorGames">Horror Games</Link></h2>
      </div>
    </div>
  )
  

}

export default Header;