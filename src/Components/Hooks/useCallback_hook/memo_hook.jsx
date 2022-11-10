/**
 * https://beta.reactjs.org/apis/react/useCallback
 */

import { memo } from "react";

const MemoHook = ({ toDos, addTodo }) => {
  console.log("child render");

  /**
   * Using memo will cause React to skip rendering a component if its props have not changed.
   * This can improve performance.
   */
  return (
    <>
      <h2>My Todos</h2>
      <h4>
        (This is a child component, and it won't re-render even though the
        parent component re-renders, It will only re-renders if the passed props
        get change, that is because of "memo hook, even )
      </h4>
      {toDos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(MemoHook);
