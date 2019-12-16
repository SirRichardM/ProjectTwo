import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Link, Route } from "react-router-dom"
import Home from "./Home"
import Classics from "./Classics"
import Games from "./Games"
import GetMovies from "./services/ApiCalls"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: "",
      poster: "",
      overview: ""
    }
  }


  // // componentDidMount = async () => {
  // //   let result = await axios.get("https://api.rawg.io/api/games?search=doom")
  // //   console.log(result)
  // //   console.log(result.data.results)
  // //   let movie = await axios.get("https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=8f5a5d2d5c46bee563141af24bce82ab&query=the+thing")
  // //   console.log(movie)
  // //   console.log(movie.data.results[0].overview)
  // //   this.setState({
  // //     movieTitle: movie.data.results[0].title,
  // //     poster: "",
  // //     overview: movie.data.results[0].overview
  // //   })

  // }
  
  // onClick = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     movieTitle: movie.data.results[0].title
  //   })
  // }



  render() {
    return (
      <div className="App" >
        <Link to="/home">Home of Horror</Link>
        <Link to="/classics">The Classics</Link>
        <Link to="/games">Classis w. Games</Link>
        < Route path="/home" render={() => <Home />} />
        <Route path="/classics" render={() => <Classics />} />
        <Route path="/games" render={() => <Games/>} />

        
        <div className="container" >
        

          <div className="text-block">
       
            <h2>Horror Classics!</h2>
            <GetMovies />
            
            {/* <img src ="https://image.tmdb.org/t/p/original/tzGY49kseSE9QAKk47uuDGwnSCu.jpg" alt=""/> */}
          </div>
          <main>
            
        

          </main>
        </div>
        <h2>{this.state.movieTitle}</h2>
        <h2>{this.state.overview}</h2>
      </div>
    );
  }
}

export default App;

