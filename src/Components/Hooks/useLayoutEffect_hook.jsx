import React, { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffect() {
  const divRef = useRef(null);

  useEffect(() => {
    console.log("useEffect");
    divRef.current.style.backgroundColor = "#DE3163";
  }, []);

  useLayoutEffect(() => {
    /**
     * This runs just before the useEffect
     * This works the same way as componentDidMount and componentDidUpdate or useEffect.
     * Your code runs immediately after the DOM has been updated,
     * but before the browser has had a chance to "paint" those changes
     * (the user doesn't actually see the updates until after the browser has repainted)
     * This can be useful if you need to make DOM measurements (like getting the scroll position or other styles for an element)
     * and then make DOM mutations or trigger a synchronous re-render by updating state.
     */
    console.log("useLayoutEffect");
    divRef.current.style.backgroundColor = "#6495ED";
  }, []);

  return (
    <div className="stretch p2" ref={divRef}>
      UseLayoutEffect Demo
    </div>
  );
}

export default UseLayoutEffect;
