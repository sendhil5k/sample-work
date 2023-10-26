import React from "react";
import Tabledata from "./Tabledata";
import FormInput from "./Formitem";
import { useState } from "react";
export default function Main(){
    const [tableApi, settableApi]=useState([]);
    const [inputVal, setinputVal] = useState({userPhone:'', userLastname:'', userFirstname:''});
    
    const submitForm =(event)=>{
        event.preventDefault();
        const checkEmptyInput = !Object.values(inputVal).every(res=>res==="")
            if(checkEmptyInput)
            {
            const newData = (data)=>([...data, inputVal])
            settableApi(newData);
            const emptyInput= {userPhone:'', userLastname:'', userFirstname:''}
            setinputVal(emptyInput)
     }
    }

    const handleChange= (event)=>{
        const newInput = (data)=>({...data, [event.target.name]:event.target.value})
        setinputVal(newInput)
    }
    
    return(
        <>
        <FormInput submitForm={submitForm} handleChange={handleChange} inputVal={inputVal} />
        <Tabledata tableApi={tableApi} />
        </>
    )
}