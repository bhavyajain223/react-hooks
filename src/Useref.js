import React, { useRef } from "react";
import "./App.css";
function Useref() {
  let inputRef = useRef(null);
  function handleInput() {
    // console.log("hello");
    // inputRef.current.value = "100";
    inputRef.current.style.display = "none";
  }
  return (
    <div className="App">
      <h1>Use ref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>handle click</button>
    </div>
  );
}
export default Useref;
