// src/Home.tsx
import React from "react";
import { useAuth } from "./auth/AuthContext";
import { logout } from "./auth/auth";

const Home: React.FC = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenue, {user?.email}</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Home;
