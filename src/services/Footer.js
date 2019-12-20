import React from "react"
import { Link, Route } from "react-router-dom"

function Footer() {
  return (
<div>
   
      <div className="footer">
         <div className="again" >
        <h2> <Link className="head" to="/classics">The Classics</Link> </h2>
        <h2>  <Link className="head" to="/games">Movies with Games</Link> </h2>
        <h2><Link className="head" to="/HorrorGames">Horror Games</Link></h2>
      </div> 
        
        <h2>Created by Richard Moebus. Data provided by RAWG API and themoviedb.org.</h2>
        
      </div>
      </div>
  )
}

export default Footer;