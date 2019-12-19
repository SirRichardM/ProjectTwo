import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import axios from "axios"




class GameInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      platforms: [],
      apiData: false,
      counter: 0
    }

  }

  componentDidMount() {

    let platforms = []
    let developers = []
    let screens = []
    axios.get(`https://api.rawg.io/api/games/${this.props.match.params.id}`)
      .then(gameDeets => {
        console.log(gameDeets)

        for (let i = 0; i < gameDeets.data.parent_platforms.length; i++) {
          platforms.push(gameDeets.data.parent_platforms[i].platform.name)

        }
        for (let j = 0; j < gameDeets.data.developers.length; j++) {
          developers.push(gameDeets.data.developers[j].name)

        }
        axios.get(`https://api.rawg.io/api/games/${this.props.match.params.id}/screenshots`)
          .then(gameScreen => {
            console.log(gameScreen)
            for (let k = 0; k < gameScreen.data.results.length; k++) {
              screens.push(gameScreen.data.results[k].image)
            }

            console.log(platforms)

          }).then(() => {
            this.setState({
              title: gameDeets.data.name,
              description: gameDeets.data.description_raw,
              release: gameDeets.data.released,
              platforms: platforms,
              developers: [...developers],
              screens: [...screens],
              apiData: true
            })
          })
        
      }
      )
  }

  onClick = (e) => {
    e.preventDefault();
    this.gameVote();
  }

  gameVote = (e) => {
    
    this.setState({
      counter: this.state.counter += 1
    })
}




  render() {
    console.log(this.props.match.params.id)
    console.log(this.state.screens)
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={(e) => {this.gameVote()}} >Worth playing?</button>
        <h2>Released Date : {this.state.release}</h2>
        <p>{this.state.description}</p>
        <p>Developed by :</p>

        {this.state.apiData === true ?
          this.state.developers.map((dev, index) =>
            <div key={index}>
              <p>{dev}</p>
            </div>
          ) : <h1>Loading..</h1>
        }
          <div className="shotbox">
        {this.state.apiData === true ?
          this.state.screens.map((image, index) =>
            
              <div key={index}>
                <img className="shots" src={image} alt="hooray" />
              </div>
          )
          : <h1>Loading...</h1>}
              </div>
        <h2>Made for the</h2>

        {this.state.apiData === true ?
          this.state.platforms.map((plat, index) =>

            <div key={index}>
              <p> {plat}</p>

            </div>
          )

          : <h1>Loading...</h1>}

        <h2>Systems</h2>



      </div>
    )
  }

}

export default GameInfo;