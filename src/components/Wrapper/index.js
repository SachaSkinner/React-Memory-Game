import React from "react";
import "./style.css";
const OrangeBackGround = {
  background:'#e97a1f'
}




function Wrapper(props) {
  return <div className="wrapper" style={OrangeBackGround}>{props.children}</div>;
}

export default Wrapper;
