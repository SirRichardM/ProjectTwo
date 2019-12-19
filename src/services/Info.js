import React, { Component } from "react";
import axios from "axios";
let pic = "https://image.tmdb.org/t/p/original"
const additionalPics = []
const you = "https://www.youtube.com/embed/"

console.log("hello")


class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      apiData: false,
      apiDataTwo: false,
      additionalPics: []
    }

  }

  componentDidMount() {
    let idFor = this.props.match.params.id
    const rez = axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${idFor}?api_key=8f5a5d2d5c46bee563141af24bce82ab`)
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

       

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${idFor}/images?api_key=8f5a5d2d5c46bee563141af24bce82ab`)
          .then(image => {
            console.log(image.data.backdrops[0].file_path)
            const newPics = [];
            for (let i = 0; i < image.data.backdrops.length; i++) {
              newPics.push(image.data.backdrops[i].file_path)


            }
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${idFor}/videos?api_key=8f5a5d2d5c46bee563141af24bce82ab`)
              .then(video => {
                console.log(video.data.results[0].key)
                this.setState({
                  key: video.data.results[0].key
                })
            })

            
            this.setState({
              additionalPics: [...newPics]
            })
            

            console.log(this.state.additionalPics)
          })

      })





  }



  render() {
    console.log(this.props.match.params.id)
    console.log(this.state.movie.apiData)
    console.log(this.state.movie.gifs)
    console.log(this.state.additionalPics)
    console.log(you + this.state.key)
    
    return (
      <div>
        {this.state.movie.apiData === true ?
          <div className="stats">
            <h1 className="crew">{this.state.movie.title}</h1>
            <h2> "{this.state.movie.tagline}"</h2>
            <iframe src={you + this.state.key} />
            {/* <embed src={this.state.movie.gifs} /> */}
            <h2> "{this.state.movie.tagline}"</h2>
            <p className="moovs"> {this.state.movie.overview}</p>
            {/* <img src={this.state.movie.backdrop} /> */}
                {/* <div className="row">
            <h2>Runtime: {this.state.movie.runtime} Mins</h2>
            <h2>Released on: {this.state.movie.release}</h2>
              <h2>Budget: $ {this.state.movie.budget}</h2>
              </div> */}
            <embed src={this.state.movie.gifs} />
          </div>
          : <h1>Loading..</h1>}
        {/* <iframe src={you + this.state.key} /> */}
        <div className="row">
            <h2>Runtime: {this.state.movie.runtime} Mins</h2>
            <h2>Released on: {this.state.movie.release}</h2>
              <h2>Budget: $ {this.state.movie.budget}</h2>
              </div>
              
              
        <div className="stills">
          {this.state.additionalPics.map((pics, i) =>
            <div key={i} >
              <div >
              <img src={pic + pics} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}



export default Info;