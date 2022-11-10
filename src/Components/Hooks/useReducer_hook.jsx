/**
 * The useReducer Hook is similar to the useState Hook. It allows for custom state logic.
 * If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
 */

import React, { useReducer } from "react";

const ACTIONS = {
  Increment: "increment",
  Decrement: "decrement",
  ToggleShowText: "toggleShowText",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.Increment:
      return { ...state, counter: state.counter + 1 };
    case ACTIONS.Decrement:
      return { ...state, counter: state.counter - 1 };
    case ACTIONS.ToggleShowText:
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true });
  return (
    <div className="dflex alignCenter">
      <button
        disabled={state.counter < 1}
        onClick={() => {
          dispatch({ type: ACTIONS.Decrement });
          dispatch({ type: ACTIONS.toggleShowText });
        }}
      >
        Decrement
      </button>
      <h1 className="mrgn">{state.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.Increment });
          dispatch({ type: ACTIONS.toggleShowText });
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default UseReducer;
