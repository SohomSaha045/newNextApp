'use client'

import { useState } from "react";

export default function Rating(props){
   const [button,setButton]=useState({backgroundColor:''});
    return (
        <div>
        <button onClick={()=>{alert(props.rating);setButton({backgroundColor:'purple'})}} style={button}>Show Rating</button>
        </div>
    )
}  