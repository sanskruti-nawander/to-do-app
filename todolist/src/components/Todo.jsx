import React, { useState } from "react";
import "./Todo.css";
import ListItem from "./ListItem";
import Button from "./Button";

function Todo() {
  let[arr,setArr]=useState([]);
  let[value,setValue]=useState("");
  let a=(event)=>{
setValue(event.target.value);
  }
  let b=()=>{
    let c;
    c=arr;
    c.push(value);
    setArr([...c]);
    setValue("")
  }

 
  let arr3=["Full","Completed","Uncompleted"];
  
    

  


  return (
    <div className="maindiv">
      <div className="d-flex  flex-row mx-1 justify-content-center">
        <input className="mx-3" placeholder="newtask" type="text" onChange={(event)=>a(event)} value={value}/>

        <button  onClick={()=>b()} className="mx-4"> Add</button>
      </div>
      <div className="d-flex  flex-row mx-1 justify-content-center div2">
      {arr3.map((it)=>{
        return(
          <>
            <Button names={it} />
          </>
        )
      })}
      </div>
      {arr.map((it,index) => {
        return (
          <>
            <ListItem  name={it} arr={arr} setArr={setArr}  index={index}/>
          </>
        );
      })}
      
    </div>
  );
}
export default Todo;
