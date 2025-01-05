import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz/Quiz";
import { Index } from "./Quiz/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Index />}
          ></Route>
          <Route
            path="/quiz/:id"
            element={<Quiz  />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
