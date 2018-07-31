import React from "react";
import "./PusheenCss.css";



//import PusheenList from "../../../../theclickygame/src/PusheenList.json";
//changed alt to true!
const PusheenCard = props =>(

  <div className ="card">
  <div className = "img-container">
  <img alt="true" src ={props.image}/>

  
  </div>
  <div className="content">
   
    <p>
 
    </p> 

    
    </div>
  </div>
);


export default PusheenCard;