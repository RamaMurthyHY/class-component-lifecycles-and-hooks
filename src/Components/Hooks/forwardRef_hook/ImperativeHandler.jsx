import React, { useRef } from "react";
import Message from "./message";

function ImperativeHandler() {
  const buttonRef = useRef();

  return (
    <div className="p2">
      <button className="mb2" onClick={() => buttonRef.current.alterToggle()}>
        Toggle Message from parent button
      </button>
      <Message ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandler;
