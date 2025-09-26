import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <RegisterPage />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
