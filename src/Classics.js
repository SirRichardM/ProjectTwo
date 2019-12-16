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
       <div className="classics">
        {props.classi.map((film, index) =>
           <div key={index}>
            <div className="spaces">
             <h2>{film.movieTitle}</h2>
               <Link to="/Info" ><img src={film.poster} alt="poster"/> </Link>
              <p>{film.overview}</p>
              <Route path="/Info" render={() => <Info information={props.classi}/>} />
              </div>
           {/* <Route path="/Info" render={() => <Info info={this.state.movie}/>} /> */}
        </div>
          
          )}          </div>
    </div>
  </div>
)

}

export default Classics;