import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      
        <img src={props.image} alt="character" onClick={() => {props.clickCard(props.id)}} />
      </div>
      
    </div>
  );
}


export default CharacterCard;

