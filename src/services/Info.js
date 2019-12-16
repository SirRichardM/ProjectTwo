import React from "react";
import axios from "axios";


 function Info (props) {

 
  return (
    <div>
      <h1>HELLO MOTO {props.info.movieTitle}</h1>
    </div>
  )
}



export default Info;