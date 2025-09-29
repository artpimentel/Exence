import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/Home/Home";
import CatalogPage from "../pages/Catalog/Catalog";

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
