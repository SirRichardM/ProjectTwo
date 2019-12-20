import React, {Component} from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom"



const games = ["outlast", "system shock", "system shock 2", "outlast 2", "until dawn", "evil within", "amnesia dark", "alan wake", "condemned 2", "agony", "left 4 dead", "dead space", "dead space 2", "f.e.a.r", "bloodborne", "layers of fear", "splatterhouse", "splatterhouse 2", "imscared", "soma", "the last of us", "inside", "clock tower", "dusk", "hexen", "blood", "harvester", "blood 2"]


class HorrorGames extends Component {
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
         screenshot: game.data.results[0].short_screenshots[0].image,
         id : game.data.results[0].id

       }
       this.setState({
        games : [...this.state.games, gameRes]
      })

     })
    axios.get(`https://api.rawg.io/api/games/${this.state.games.id}`)
      .then(gameDeets => {
      console.log(gameDeets)
    })
  }




  render() {
  
    return (
      <div>
        <h1 className="splat">Infamous Horror Games</h1>
        <h2>Some good, some bad......all ugly</h2>
        <div className="classics"  >
        {this.state.games.map((game, index) =>
          <div key={index}>
            <div className="spaces">
            <h2>{game.title}</h2>
              <Link to={`/gameinfo/${game.id}`} id={game.id}><img src={game.screenshot} /> </Link>
              </div>
          </div>
          )}
          </div>
        {/* <Route path="/gameinfo" render={() => <GameInfo />} /> */}
      </div>
    )
  }
}

export default HorrorGames;