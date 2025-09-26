import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Home/Home";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
