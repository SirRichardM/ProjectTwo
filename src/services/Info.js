import React, { Component } from "react";
import axios from "axios";
let pic = "https://image.tmdb.org/t/p/original"


console.log("hello")


class Info extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movie: []
    }

  }

  componentDidMount() {
    let idFor = this.props.match.params.id
    const rez = axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${idFor}?api_key=8f5a5d2d5c46bee563141af24bce82ab`)
      .then(details => {
        console.log(details)
        this.setState({
          movie: {
            title: details.data.original_title,
            overview: details.data.overview,
            release: details.data.release_date,
            tagline: details.data.tagline,
            runtime: details.data.runtime, 
            backdrop: (pic + details.data.backdrop_path),
            budget: details.data.budget,
            

          }

        })
      
    })
    


    
    
  }



  render () {
    console.log(this.props.match.params.id)
    
    console.log(this.state.movie)
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <h2>{this.state.movie.release}</h2>
        <h2>{this.state.movie.tagline}</h2>
        <img src={this.state.movie.backdrop} />
        <p>{this.state.movie.overview}</p>
        <h2>Runtime:{this.state.movie.runtime}Mins</h2>
        <h2>Budget: $ {this.state.movie.budget}</h2>
      
      
      </div>
    );
  }
}



export default Info;