// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomRouter from "./router/CustomRouter";

function App() {
  return (
    <div className="App">
      <Routes>
        {CustomRouter.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
