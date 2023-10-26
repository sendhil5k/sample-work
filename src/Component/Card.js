//import Button from './Component/Button';
import React from "react";
export default function Card(props){
  return (
    <>
        <div style={{border:'1px solid gray',
            padding:'20px',
            textAlign:'center'}}>
                {props.children}
            </div>
    </>
  );
}

