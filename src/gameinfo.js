import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import axios from "axios"




class GameInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        description: ""
    }

  }

  componentDidMount() {
    axios.get(`https://api.rawg.io/api/games/${this.props.match.params.id}`)
      .then(gameDeets => {
        console.log(gameDeets)
        this.setState({
          title: gameDeets.data.name,
          description: gameDeets.data.description_raw,
          release: gameDeets.data.released
          
        })
    })
  
  }
 
  
  render() {
    console.log(this.props.match.params.id)
    console.log(this.state)
    return (
      <div>
        <h1>SUP</h1>
      </div>
    )
  }

}

export default GameInfo;