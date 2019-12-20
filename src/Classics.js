import React from "react"
import GetMovies from "./services/ApiCalls"

import { Link, Route } from "react-router-dom"

import { getMovies } from "./services/ApiCalls"
import Info from "./services/Info"

const Classics = (props) => {

  console.log(props)
  return (
    <div>
      <div>
        <h1 className="tarman" >The Best of the Best</h1>
        <h2>A curated list of some of the best horror around from the legitmentally scary to the campy gore classics...</h2>
       <div className="classics">
        {props.classi.map((film, index) =>
           <div key={index}>
            <div className="spaces">
             <h2>{film.movieTitle}</h2>
              <Link to={`/Info/${film.id}` }><img src={film.poster} alt="poster"/> </Link>
              {/* <p>{film.overview}</p> */}
              {/* <Route path="/Info" render={() => <Info info={film.id}/>} /> */}
              </div>
           {/* <Route path="/Info" render={() => <Info info={this.state.movie}/>} /> */}
        </div>
          
          )}          </div>
    </div>
  </div>
)

}

export default Classics;