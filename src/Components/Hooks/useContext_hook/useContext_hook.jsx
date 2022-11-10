import React, { createContext, useState } from "react";
import Login from "./login";
import User from "./user";

export const AppContext = createContext(null);

function UseContext() {
  const [username, setUsername] = useState("");

  return (
    <div className="p2">
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}

export default UseContext;
