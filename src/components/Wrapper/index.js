import React from "react";
import "./style.css";


const backGr = {
  background:  '#ffecb3'
}

function Wrapper(props) {
  return <div className="wrapper" style={backGr}>{props.children}</div>;
}

export default Wrapper;
