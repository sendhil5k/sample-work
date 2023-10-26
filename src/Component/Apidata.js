import React, { useEffect, useState } from 'react'
const Apidata = () => {
  const [inputApi, setInputapi] = useState([]);
  const fetchapi = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setInputapi(data)
    } catch(error) {
      console.log(error)
    }
    
  }
  useEffect(function(){
     fetchapi();
  },[]);

  return (
    <div>
      <h1>Fetch Data from json Api</h1>
      { inputApi.slice(0,5).map((item, index)=>(
        <p key={index}>{item.name}</p>
      ))}
    </div>
  )
}

export default Apidata
