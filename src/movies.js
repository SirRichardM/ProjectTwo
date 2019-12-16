import React from "react"
import { Link, Route } from "react-router-dom"


const Movies = () => {
  return (
    <div>
     <Route path="./movies" render={() => <Movies /> } />
      <h1>Melt</h1> 
      </div>
  )
}

export default Movies;