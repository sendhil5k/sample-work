//https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
import React,{Component} from 'react';

export default class PersistingStateClass extends Component{
constructor(){
    super();
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
        count: 0
      }
}
setState(state){
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
}
IncrementVal = ()=>{
    return this.setState({...this.state, count: this.state.count + 1});
}
DecrementVal = ()=>{
    return this.setState({...this.state, count: this.state.count - 1})
}
render(){
    return(
        <>
        <h1>Persisting State on page refresh</h1>
        <p>Count vlaeu: {this.state.count}</p>
        <button onClick={this.IncrementVal}>Increment -</button>
        <button onClick={this.DecrementVal}>Decrement -</button>
        </>
    )   
}
}