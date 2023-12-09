import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Iconpass from "./Icon";

function ListItem(props) {  
  let arr2=[<CiEdit/>, <CiSearch/>, <MdDelete/>];

  let Delete=()=>{
   let temp=props.arr;
   temp.splice(props.index,1);
   props.setArr([...temp]);

  }
 let Edit=()=>{
   props.arr[props.index]="hello";
   props.setArr([...props.arr]);
 }

  return (
    <>
      <div className="d-flex flex-row justify-content-between align-middle ls1">
        <p className="ls2">{props.name} </p>
        <div className="ls3 justify-content-between align-middle">
          {
            arr2.map((it)=>{
              return(
                <>
                
                <Iconpass n={it} Delete={Edit}/>
                
                </>
              );
            })
          }
          
        </div>
      </div>
    </>
    
  );
}
export default ListItem;
