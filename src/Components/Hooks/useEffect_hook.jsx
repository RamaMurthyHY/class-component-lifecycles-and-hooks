import React, { useEffect, useState } from "react";

function UseEffect() {
  const [toggleColor, setToggleColor] = useState("");

  useEffect(() => {
    /**
     * This useEffect without dependency array Runs the on every render,
     * any state change inside component will cause to execute this method
     */
    console.log("Runs on every render");
  });

  useEffect(() => {
    /**
     * This useEffect with empty dependency array Runs only on the first render,
     * and it behaves like componentDidMount of class component
     */
    console.log("Runs only on the first render");
  }, []);

  useEffect(() => {
    /**
     * This useEffect with dependency Runs on the first render And on given dependency value changes,
     * and it behaves like componentDidUpdate of class component
     */
    console.log(
      "Runs on the first render And on given dependency value changes"
    );
  }, [toggleColor]);

  useEffect(() => {
    /**
     * This useEffect with return statement will execute just before component unmount,
     * and it behaves like componentWillUnmount of class component
     */
    return () => {
      /**
       * Code to execute while unmounting the component
       */
      console.log("Runs on just before component unmount");
    };
  }, []);

  const setBGColor = () => {
    const colors = [
      "#DFFF00",
      "#FF7F50",
      "#FFBF00",
      "#DE3163",
      "#9FE2BF",
      "#40E0D0",
      "#6495ED",
      "#CCCCFF",
    ];
    setToggleColor(colors[Math.floor(Math.random() * 8)]);
  };

  return (
    <div className="p2 stretch" style={{ background: toggleColor }}>
      <button onClick={setBGColor}>Click to toggle color</button>
    </div>
  );
}

export default UseEffect;
