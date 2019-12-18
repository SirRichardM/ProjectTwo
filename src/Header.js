import React from "react"
import { Link, Route } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1 className="tar">Chamber of Chills</h1>
      <div className="header">
     <h2> <Link to="/classics">The Classics</Link> </h2>
        <h2>  <Link to="/games">Movies with Games</Link> </h2>
        <h2><Link to="/HorrorGames">Horror Games</Link></h2>
      </div>
    </div>
  )
  

}

export default Header;