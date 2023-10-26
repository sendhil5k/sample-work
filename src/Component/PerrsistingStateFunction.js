//https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
import React, { useEffect, useState } from 'react'

const PerrsistingStateFunction = () => {
    const [count1, setCount1] = useState(0);

    useEffect(() => {
      try{
          setCount1(JSON.parse(window.localStorage.getItem('count1')));
      }catch(e){
        console.error(e);
      }
    }, []);
  
    useEffect(() => {
        try{
      window.localStorage.setItem('count1', count1);
    }catch(e){
        console.error(e);
      }
    }, [count1]);
  
    const increaseCount = () => {
      return setCount1(count1 + 1);
    }
    const decreaseCount = () => {
      return setCount1(count1 - 1)
    }
  
    return (
      <div className="App">
        <h1> Count {count1} </h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    );
}

export default PerrsistingStateFunction
