/**
 * https://beta.reactjs.org/apis/react/useCallback
 */

import { useState, useCallback } from "react";
import MemoHook from "./memo_hook";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [toDos, setToDos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setToDos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <div>
        Count: {count} <button onClick={increment}>+</button>
      </div>
      <hr />
      <MemoHook toDos={toDos} addTodo={addTodo} />
    </>
  );
}

export default UseCallback;
