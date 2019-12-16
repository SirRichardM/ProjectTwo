import React, { Component } from "react";
import axios from "axios"

 
  

  export const getMovies = async () => {
    const movie = await axios.get("https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=8f5a5d2d5c46bee563141af24bce82ab&query=the+thing")
    this.setState({
      movieTitle: movie.data.results[0].title,
      poster: "",
      overview: movie.data.results[0].overview
    })
  }

  



export default getMovies;