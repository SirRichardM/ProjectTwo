import React, { Component } from "react";
import axios from "axios"

const theClassics = ["the thing","nightmare on elm street", "alien", "night of the living dead", ]

 
  

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
            overview: movie.data.results[0].overview
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
         {this.state.movie.map((film, index) =>
          <div key={index}>
            <h1>{film.movieTitle}</h1>
            <p>{film.overview}</p>
          
          </div>
          )} 
        
    </div>
  )
}



}


export default GetMovies;