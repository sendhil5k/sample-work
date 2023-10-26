
//import Pure_component from './Component/Pure_component';
import './App.css';
import Card from "./Component/Card";
import Button from "./Component/Button";
import Apidata from "./Component/Apidata";
import AxiosFetch from "./Component/AxiosFetch";
import PersistingStateClass from "./Component/PersistingStateClass";
import PerrsistingStateFunction from "./Component/PerrsistingStateFunction";
import Main from "./printForm/Main";
import OnclickFetch from './Component/OnclicFetch';
import ClickFetch from './Component/ClickFetch';

export default function App() { 
 const toggle1 = ()=>{
    alert("you clicked me")
}
const box ={
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%',
    flex: '1',
    justifyContent: 'space-around'
  
}
  return (
    <>
      <ClickFetch/>
      <OnclickFetch />
      <Main />
      <div style={box}>
        <PersistingStateClass/>
        <PerrsistingStateFunction/>
      </div>
      <Apidata />
        <hr/>
      <AxiosFetch />
      <Card>
           <p>Welcome to my Card</p>
        <Button button1="Click Me 1" button2="Click Me 2" handleclick={toggle1}>
            Hi Sendhil Kumar k
       </Button>
      </Card>
    </>
  );
}

