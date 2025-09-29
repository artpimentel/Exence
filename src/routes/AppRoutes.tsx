import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";

function AppRoutes() {
  return (
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
        path="/catalog"
        element={
          <MainLayout>
            <CatalogPage />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
