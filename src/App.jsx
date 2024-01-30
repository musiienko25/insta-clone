import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Pagelayout from "./components/AuthFomr/Layouts/PageLayout/Pagelayout";

function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </Pagelayout>
  );
}

export default App;
