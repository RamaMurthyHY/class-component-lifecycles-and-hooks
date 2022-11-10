import React, { forwardRef, useImperativeHandle, useState } from "react";

const Message = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={toggleHandler}>
        Toggle Message from message component
      </button>
      <br />
      <br />
      {toggle && <span>It is a message</span>}
    </div>
  );
});

export default Message;
