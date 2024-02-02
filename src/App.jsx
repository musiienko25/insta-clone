import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Pagelayout from "./components/AuthFomr/Layouts/PageLayout/Pagelayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import useAuthStore from "./store/authStore";

function App() {
  const authUser = useAuthStore((state) => state.user);
  return (
    <Pagelayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        ></Route>
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        ></Route>
        <Route path="/:username" element={<ProfilePage />}></Route>
      </Routes>
    </Pagelayout>
  );
}

export default App;
