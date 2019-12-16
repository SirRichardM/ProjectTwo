import React from "react"

import { Link, Route } from "react-router-dom"

import {getMovies} from "./services/ApiCalls"

const Classics = (props) => {

  return (
    <div>
      <h1>The Classics</h1>
      <Link to="/movies" >Click for the Classics</Link>
      />
  </div>
)

}

export default Classics;