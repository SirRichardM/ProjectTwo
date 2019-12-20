import React, {Component} from "react"
import { render } from "@testing-library/react"
import axios from "axios"
import { Link, Route } from "react-router-dom"
import GameInfo from "./gameinfo"

const games = ["alien isolation", "the thing","friday the 13th", "alone in the dark 1",  "gremlins", "predator", "alien vs predator", "jaws", "saw", "texas chainsaw massacre", "doom", "resident evil 1", "resident evil 2", "friday the 13th 2018", "evil dead regeneration", "the evil dead", "evil dead hail to the king", "silent hill 1", "doom 2", "the ring terror", "land of the dead fiddler", "saw 2", "jaws unleashed", "alien resurrection",  "nightmare on elm street"]



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
        <h1 className="brutal">From Cinema to Game and Vice Versa</h1>
        <h2>Video games based on movies and movies based on video games are notoriously bad but you may be suprised by some of the titles on this here....</h2>
        <div className="classics"  >
        {this.state.games.map((game, index) =>
          <div key={index}>
            <div className="spaces">
              <h2>{game.title}</h2>
              <div className="srcsht">
                <Link to={`/gameinfo/${game.id}`} id={game.id}><img  src={game.screenshot} /> </Link>
                </div>
              </div>
          </div>
          )}
          </div>
        
      </div>
    )
  }
}

export default Games;