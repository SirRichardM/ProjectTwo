import React, {Component} from "react"
import { render } from "@testing-library/react"
import axios from "axios"

const games = ["alien isolation", "the thing","friday the 13th", "alone in the dark 1",  "gremlins", "predator", "alien vs predator", "jaws", "total recall", "saw",  ]



class Games extends Component {
  constructor(props) {
    super(props)

    this.state = {
      games: []
    }
  }

  componentDidMount() {
    for (let i = 0; i < games.length; i++)
   axios.get(`https://api.rawg.io/api/games?search=${games[i]}`)
     .then(game => {
       console.log(game)
       console.log(game.data.results[0].short_screenshots[0].image)
       let gameRes = {
         title: game.data.results[0].name,
         screenshot: game.data.results[0].short_screenshots[0].image

       }
       this.setState({
        games : [...this.state.games, gameRes]
      })

    })
  }




  render() {
    return (
      <div>
        <div className="classics"  >
        {this.state.games.map((game, index) =>
          <div key={index}>
            <div className="spaces">
            <h2>{game.title}</h2>
              <img src={game.screenshot} /> 
              </div>
          </div>
          )}
          </div>
        <h1>Movies turned Games</h1>
      </div>
    )
  }
}

export default Games;