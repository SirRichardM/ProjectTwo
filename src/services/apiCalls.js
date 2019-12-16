import React, { Component } from "react";
import axios from "axios"
import { Link, Route } from "react-router-dom"
import Info from "./Info"
const post = "https://image.tmdb.org/t/p/original"



const theClassics = ["the thing","nightmare on elm street", "alien", "night of the living dead", "the exorcist", "friday the 13th"]

 
  

class GetMovies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: []
       
      
    }
  }
    


  componentDidMount() {
    for (let i = 0; i < theClassics.length; i++)
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=8f5a5d2d5c46bee563141af24bce82ab&query=${theClassics[i]}`)
        .then(movie => {
          console.log(movie)
          let movies = {
            movieTitle: movie.data.results[0].title,
            overview: movie.data.results[0].overview,
             poster: (post + movie.data.results[0].poster_path)
          }
          console.log(movies)
          this.setState({
            movie: [...this.state.movie, movies],
            
          })
        })
        
  }

  render() {
    console.log(this.state.movie)
    
    return (
      <div>
        <div className="classics">
         {this.state.movie.map((film, index) =>
           <div key={index}>
             <div className="spaces">
             <h2>{film.movieTitle}</h2>
               <Link to="/Info" ><img src={film.poster} alt="poster"/> </Link>
               <p>{film.overview}</p>

               </div>
             <Route path="/Info" render={() => <Info info={this.state.movie}/>} />
          </div>
          
          )} 
        </div>
    </div>
  )
}



}


export default GetMovies;