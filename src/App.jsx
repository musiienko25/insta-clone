import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Pagelayout from "./components/AuthFomr/Layouts/PageLayout/Pagelayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </Pagelayout>
  );
}

export default App;
