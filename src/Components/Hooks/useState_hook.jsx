import React, { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <>
      <button className="btnStyle" disabled={counter < 0} onClick={increment}>
        Increment
      </button>
      <button className="btnStyle" disabled={counter < 1} onClick={decrement}>
        Decrement
      </button>
      <div className="counter">Counter: {counter}</div>
    </>
  );
}

export default UseState;
