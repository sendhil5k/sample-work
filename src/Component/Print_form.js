import React from 'react';
export default function Print_form(){
    const calc = (a,b)=>{
        sum = a+b;
        sub1 = a-b;
        mul = a*b;
        div1 = a/b;
    }
    const [sum, sub1, mul, div1] = calc(2+5);
    return(
        <>
        <h1>Welcome Print Form</h1>
        {calc.sum}

        </>
    )
}