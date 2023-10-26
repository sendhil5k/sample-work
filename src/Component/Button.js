import React from "react";
export default function Button(props) {

  return (
    <>
        <button onClick={props.handleclick}>{props.button1}</button><br/>
        <button>{props.button2}</button>
        <button>{props.children}</button>
    </>
  );
}

