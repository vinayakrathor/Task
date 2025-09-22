import { useEffect, useState } from "react";
// import "./reg.css"

function Demo2(){
    const [count ,setCount] =useState(0);
    // useEffect(()=>{
    //     console.log(count);
    // },[]);
    function add(){

        setCount(count+1);
    }
    function remove(){

        setCount(count-1);
    }
    return(
        <div  >
            <h1>Count:{count}</h1>
            <button onClick={add}>add</button>
            <button onClick={remove}>Delete</button>
            
        </div>
    )
    

}
export default Demo2;
