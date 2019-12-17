import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Link, Route } from "react-router-dom"
import Home from "./Home"
import Classics from "./Classics"
import Games from "./Games"
import GetMovies from "./services/ApiCalls"
import Info from "./services/Info"
import GameInfo from "./gameinfo"
import Header from "./Header"
import Footer from "./services/Footer"
const post = "https://image.tmdb.org/t/p/original"


const theClassics = ["the thing", "nightmare on elm street", "alien", "night of the living dead", "the exorcist", "friday the 13th", "evil dead II", "braindead", "the return of the living dead", "bad taste", "the stuff", "creepshow", "street trash", "from beyond", "hellraiser", "event horizon"]



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      extra: false,
      
    }
  }


  

  componentDidMount() {
    for (let i = 0; i < theClassics.length; i++)
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=8f5a5d2d5c46bee563141af24bce82ab&query=${theClassics[i]}`)
        .then(movie => {
          
          let movies = {
            movieTitle: movie.data.results[0].title,
            overview: movie.data.results[0].overview,
            poster: (post + movie.data.results[0].poster_path),
            id: movie.data.results[0].id
             
          }
          
          this.setState({
            movie: [...this.state.movie, movies],
            
          })
        })
        
  }

  



  render() {
    
    return (
      <div className="App" >
        <Header />

        <Link to="/home">Home of Horror</Link>
        <Link to="/classics">The Classics</Link>
        <Link to="/games">Classis w. Games</Link>
        <Route path="/home" render={() => <Home />} />
        <Route path="/classics" render={(props) => <Classics {...props} classi={this.state.movie} />} />
        <Route path="/games" render={() => <Games />} />
        <Route path="/gameinfo/:id" render={(props) => <GameInfo {...props}  />} />
      <Route path="/Info/:id" render={(props) => <Info {...props} id={this.state.movie}/>} />

        <div className="container" >


          <div className="text-block">

            <h2>Horror Classics!</h2>
            ?

            
          </div>
          <main>



          </main>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

