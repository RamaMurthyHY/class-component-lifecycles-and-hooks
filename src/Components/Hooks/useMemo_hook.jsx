import React, { useState, useMemo } from "react";

/**
 * The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
 * In this example, we have an expensive function that runs on every render.
 * When changing the count or adding a todo, you will notice a delay in execution.
 */

function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.log("DOne Calculation...");
    return num;
  };

  /**
   * Try this function calling with useMemo and without useMemo and observe the delay in rendering
   */

  //   const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default UseMemo;
