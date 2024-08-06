import React from "react";
import MainInterfacePage from "../Pages/MainInterfacePage";
import LoginPage from "../Pages/LoginPage";

import { Route, Routes } from "react-router-dom";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/weather-app" element={<MainInterfacePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} /> {/* Route par défaut */}
    </Routes>
  );
}

export default AppRoutes;
