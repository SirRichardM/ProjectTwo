import React from "react";
import axios from "axios";


 function Info (props) {

 console.log(props.information)
  return (
    <div>
      <h1>{props.information.overview}</h1>
    </div>
  )
}



export default Info;