import React, { Component } from "react";
import axios from "axios";
let pic = "https://image.tmdb.org/t/p/original"
const additionalPics = []


console.log("hello")


class Info extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movie: [],
      apiData: false,
      apiDataTwo: false
    }

  }

  componentDidMount() {
    let idFor = this.props.match.params.id
    const rez =  axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${idFor}?api_key=8f5a5d2d5c46bee563141af24bce82ab`)
      .then(details => {
        this.setState({
          movie: {
            title: details.data.original_title
          }
      })
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.movie.title}&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=3`)
        .then(gif => {
        
          this.setState({
            movie: {
              title: details.data.original_title,
              overview: details.data.overview,
              release: details.data.release_date,
              tagline: details.data.tagline,
              runtime: details.data.runtime,
              backdrop: (pic + details.data.backdrop_path),
              budget: details.data.budget,
              gifs: gif.data.data[0].embed_url,
              apiData: true

            }
          })

        })
     
        // axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.movie.title}&api_key=VC8tFxRJWVzQj5LrvDTYc0YsEgUm4EhH&limit=1`)
        //   .then(gif => {
        //     this.setState({
        //       movie: {
        //         gifs: gif.data.data[0].embed_url,
        //         apiData: true
        //       }
            
        //   })
        
          
        //   })

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${idFor}/similar?api_key=8f5a5d2d5c46bee563141af24bce82ab`)
          .then(image => {
          console.log(image)
        })
      
    })
    


    
    
  }



  render () {
    console.log(this.props.match.params.id)
    console.log(this.state.movie.apiData)
    console.log(this.state.movie.gifs)
    return (
      <div>
        {this.state.movie.apiData === true  ?
          <div className="stats">
            <h1>{this.state.movie.title}</h1>
            <h2>Released on: {this.state.movie.release}</h2>
            <br />
            <h2> " {this.state.movie.tagline} "</h2>
            <br />
            <embed src={this.state.movie.gifs} />
            <img src={this.state.movie.backdrop} />
            <p>{this.state.movie.overview}</p>
            <h2>Runtime: {this.state.movie.runtime} Mins</h2>
            <h2>Budget: $ {this.state.movie.budget}</h2>
          </div>
          : <h1>Loading..</h1>}  
      </div>
    );
  }
}



export default Info;