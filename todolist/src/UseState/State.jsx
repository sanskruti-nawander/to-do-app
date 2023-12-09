import React, { useState } from "react";
function State() {
  let [count, setcount] = useState(0);
  let Add = () => {
    setcount(count++);
  };
  let Subract = () => {
    setcount(count--); 
  };
  return (
    <>
      <p>This is a State.jsx file{count}</p>
      <button onClick={() => Add()}>Add</button>
      <button onClick={() => Subract()}>Subract</button>
    </>
  );
}
export default State;
