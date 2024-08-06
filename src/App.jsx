import React, { useEffect } from "react";
import "./App.css";
import MainInterfacePage from "./Pages/MainInterfacePage";
import LoginPage from "./Pages/LoginPage";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const apiKey = localStorage.getItem('API_key');
  const userName = localStorage.getItem('USER_name');

  useEffect(() => {
    if (apiKey && userName) {
      navigate('/weather-app');
    }
  }, [apiKey, userName, navigate]);

  if (apiKey && userName) {
    return null; // Ne pas rendre la page de connexion si déjà redirigé
  }
  return (
    <div className="px-2.5 flex items-center justify-center bg-slate-600 min-h-screen">
      <LoginPage />
    </div>
  );
}

export default App;
