import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
function myfunction(e){
    console.log([e.clientX,e.clientY])
}
export default function Func(props){
    const [input,setinput]=useState("")

    useEffect(()=>{
        console.log(props)
    })
    return(<><h1>{props.name}</h1></>)
}