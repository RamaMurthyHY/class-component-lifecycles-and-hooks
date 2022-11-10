import React, { useEffect, useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const focusInputHandler = () => {
    inputRef.current.focus();
  };

  const clearInputHandler = () => {
    inputRef.current.value = "";
  };

  useEffect(() => {
    /**
     * useRef hooks will cause to re-render the component on any modification of the dom elements using useRef
     * For example this useEffect will executed on input changes on input
     */
    console.log("useRef hook");
  });

  return (
    <div>
      <input
        className="mb3"
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <br />
      <button className="mr2" onClick={focusInputHandler}>
        Click to focus
      </button>
      <button onClick={clearInputHandler}>Reset</button>
    </div>
  );
}

export default UseRef;
